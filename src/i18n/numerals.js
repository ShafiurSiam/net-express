// Converts Arabic-numeral digits inside a string/number to Bangla digits.
// Lets data files store one canonical (Arabic-numeral) value and derive the
// Bangla-numeral display form instead of hand-typing both.
const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

export const toBanglaDigits = (value) =>
  String(value).replace(/[0-9]/g, (digit) => bnDigits[digit]);

export const formatNumber = (value, language) =>
  language === "bn" ? toBanglaDigits(value) : String(value);
