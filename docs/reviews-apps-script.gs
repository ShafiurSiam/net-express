/**
 * Net Express — public customer reviews backend (Google Apps Script web app).
 *
 * SETUP (details in net-express-reviews-addendum.md):
 *   1. Create a NEW Google Sheet, then Extensions > Apps Script, and paste this file.
 *   2. Deploy > New deployment > Web app:
 *        Execute as:      Me
 *        Who has access:  Anyone
 *   3. Copy the web app URL into VITE_REVIEWS_WEBHOOK_URL (this is a SEPARATE
 *      deployment from the connection-request script).
 *
 * The "Reviews" sheet is created automatically with these columns:
 *   [Timestamp, Name, Rating, Comment, Lang, Visible]
 * To hide an inappropriate review, set its Visible cell to FALSE (uncheck it).
 * Do not delete or reorder the columns.
 *
 * doPost  - website form submissions (validated, rate-limited, de-duplicated)
 * doGet   - public list of visible reviews, newest first (JSON)
 */

// ---- Settings (safe to change) ---------------------------------------------
var SHEET_NAME = "Reviews";
var MAX_SUBMISSIONS_PER_HOUR = 20; // total across all visitors; extra submissions are rejected
var MAX_REVIEWS_RETURNED = 100; // cap on what doGet sends to the website

// ---- Limits (keep in sync with src/config/reviews.js) ------------------------
var NAME_MAX = 50;
var COMMENT_MIN = 10;
var COMMENT_MAX = 500;

var HEADERS = ["Timestamp", "Name", "Rating", "Comment", "Lang", "Visible"];
var COL = { TIMESTAMP: 0, NAME: 1, RATING: 2, COMMENT: 3, LANG: 4, VISIBLE: 5 };
var HOUR_MS = 60 * 60 * 1000;

function doPost(e) {
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) {
    return reply_({ ok: false, error: "server_busy" });
  }

  try {
    var data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (err) {
      return reply_({ ok: false, error: "invalid" });
    }

    var name = typeof data.name === "string" ? data.name.trim() : "";
    var comment = typeof data.comment === "string" ? data.comment.trim() : "";
    var rating = data.rating;
    var lang = data.lang === "bn" || data.lang === "en" ? data.lang : "";

    var validRating = typeof rating === "number" && rating % 1 === 0 && rating >= 1 && rating <= 5;
    if (
      name.length < 1 || name.length > NAME_MAX ||
      comment.length < COMMENT_MIN || comment.length > COMMENT_MAX ||
      !validRating
    ) {
      return reply_({ ok: false, error: "invalid" });
    }

    var sheet = getSheet_();
    var rows = sheet.getLastRow() > 1
      ? sheet.getRange(2, 1, sheet.getLastRow() - 1, HEADERS.length).getValues()
      : [];

    // Global hourly cap (rows are appended chronologically, so scan from the bottom).
    var now = new Date();
    var recent = 0;
    for (var i = rows.length - 1; i >= 0; i--) {
      var time = new Date(rows[i][COL.TIMESTAMP]).getTime();
      if (isNaN(time) || now.getTime() - time > HOUR_MS) break;
      recent++;
    }
    if (recent >= MAX_SUBMISSIONS_PER_HOUR) {
      return reply_({ ok: false, error: "rate_limited" });
    }

    // Reject an identical name + comment that is already in the sheet.
    var safeName = neutralize_(name);
    var safeComment = neutralize_(comment);
    for (var j = 0; j < rows.length; j++) {
      var storedName = String(rows[j][COL.NAME]);
      var storedComment = String(rows[j][COL.COMMENT]);
      if (
        (storedName === name || storedName === safeName) &&
        (storedComment === comment || storedComment === safeComment)
      ) {
        return reply_({ ok: false, error: "duplicate" });
      }
    }

    sheet.appendRow([now, safeName, rating, safeComment, lang, true]);
    return reply_({ ok: true });
  } catch (err) {
    return reply_({ ok: false, error: "server_error" });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  var sheet = getSheet_();
  var count = sheet.getLastRow() - 1;
  if (count < 1) return reply_([]);

  var rows = sheet.getRange(2, 1, count, HEADERS.length).getValues();
  var reviews = [];

  rows.forEach(function (row) {
    if (String(row[COL.VISIBLE]).toUpperCase() !== "TRUE") return;

    var name = restore_(String(row[COL.NAME])).trim();
    var comment = restore_(String(row[COL.COMMENT])).trim();
    var rating = Number(row[COL.RATING]);
    var time = new Date(row[COL.TIMESTAMP]);
    if (!name || !comment || !(rating >= 1 && rating <= 5) || isNaN(time.getTime())) return;

    reviews.push({ name: name, rating: rating, comment: comment, timestamp: time.toISOString() });
  });

  reviews.sort(function (a, b) {
    return a.timestamp < b.timestamp ? 1 : a.timestamp > b.timestamp ? -1 : 0;
  });

  return reply_(reviews.slice(0, MAX_REVIEWS_RETURNED));
}

// ---- Helpers ---------------------------------------------------------------

function getSheet_() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// Formula injection guard: text starting with = + - @ (or tab / carriage return)
// could be run as a spreadsheet formula, so prefix it with a single quote.
function neutralize_(value) {
  return /^[=+\-@\t\r]/.test(value) ? "'" + value : value;
}

// Undoes neutralize_ if the quote came back as part of the stored text.
function restore_(value) {
  return /^'[=+\-@\t\r]/.test(value) ? value.slice(1) : value;
}

function reply_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}
