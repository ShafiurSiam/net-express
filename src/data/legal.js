// Text of the Terms of Service (/terms) and Privacy Policy (/privacy) pages.
// Edit wording here — no component changes needed.
//
// Shape of both exports: { lastUpdated (ISO date string), sections: [...] }.
// One section: { id (unique, used for the table-of-contents anchor),
// title ({ bn, en }), body (optional array of { bn, en } paragraphs),
// items (optional array of { bn, en } bullets, shown after the paragraphs),
// extra (optional array of { bn, en } paragraphs shown after the bullets),
// showContact (optional true — renders the company contact details block) }.
//
// Placeholders inside any text, filled from src/config/company.js at render
// time so contact details are never hard-coded here: {company} (Net Express /
// নেট এক্সপ্রেস), {address}, {supportPhone}, {billingPhone}.
//
// Written from an audit of what the site actually does (see the Privacy Policy
// sections). Things the business owner still has to decide are marked
// TODO(owner) — the wording stays deliberately neutral until then.

export const termsContent = {
  lastUpdated: "2026-09-21",
  sections: [
    {
      id: "acceptance",
      title: { bn: "১. শর্তাবলী গ্রহণ ও আমরা কারা", en: "1. Acceptance of Terms & Who We Are" },
      body: [
        {
          bn: "{company} টঙ্গী, গাজীপুরে ব্রডব্যান্ড ইন্টারনেট সেবা প্রদানকারী একটি প্রতিষ্ঠান। এই ওয়েবসাইট ব্যবহার করলে, নতুন সংযোগের জন্য আবেদন করলে অথবা আমাদের ইন্টারনেট সেবা গ্রহণ করলে আপনি এই শর্তাবলীর সাথে সম্মত আছেন বলে ধরা হবে।",
          en: "{company} is an internet service provider offering broadband in Tongi, Gazipur. By using this website, applying for a new connection, or using our internet service, you agree to these terms.",
        },
        {
          bn: "শর্তগুলোর সাথে একমত না হলে অনুগ্রহ করে ওয়েবসাইট ও সেবা ব্যবহার করবেন না।",
          en: "If you do not agree with these terms, please do not use the website or the service.",
        },
      ],
    },
    {
      id: "services",
      title: { bn: "২. সেবা ও প্যাকেজ", en: "2. Services & Packages" },
      body: [
        {
          bn: "ওয়েবসাইটে দেখানো প্যাকেজের গতি \"সর্বোচ্চ\" (up to) গতি, যা সর্বোত্তম প্রচেষ্টার ভিত্তিতে (best-effort) দেওয়া হয়। বাস্তব গতি নেটওয়ার্কের অবস্থা, আপনার ডিভাইস, ওয়্যারিং বা ওয়াই-ফাই, দূরত্ব এবং দিনের সময়ের ওপর নির্ভর করে কম-বেশি হতে পারে।",
          en: "The speeds shown for each package are \"up to\" speeds, provided on a best-effort basis. Actual speed varies with network conditions, your device, wiring or Wi-Fi, distance and time of day.",
        },
        {
          bn: "ওয়েবসাইটে প্রদর্শিত প্যাকেজের বিবরণ ও মূল্য পরিবর্তন হতে পারে। আমাদের সেবা কেবল আমাদের সেবা এলাকার মধ্যে পাওয়া যায় — কভারেজ পৃষ্ঠায় আপনার এলাকা যাচাই করে নিতে পারেন।",
          en: "Package details and prices shown on the website may change. Our service is available only inside our service area — you can check your area on the Coverage page.",
        },
      ],
    },
    {
      id: "connection",
      title: { bn: "৩. নতুন সংযোগের প্রক্রিয়া", en: "3. New Connection Process" },
      body: [
        {
          bn: "\"এখনই সংযোগ নিন\" ফর্ম জমা দেওয়া মানে একটি আবেদন বা অনুরোধ পাঠানো — এটি সংযোগ পাওয়ার নিশ্চয়তা নয়। সংযোগ দেওয়া কভারেজ, কারিগরি সম্ভাব্যতা এবং আমাদের প্রতিনিধির নিশ্চিতকরণের ওপর নির্ভর করে। আমাদের প্রতিনিধি আপনার দেওয়া মোবাইল নম্বরে যোগাযোগ করবেন।",
          en: "Submitting the \"Get Connected Now\" form is an application or request — it is not a guarantee of a connection. A connection depends on coverage, technical feasibility and confirmation by our staff. Our representative will contact you on the mobile number you provide.",
        },
        {
          bn: "সংযোগ ফি (যদি থাকে), ইন্সটলেশন খরচ এবং রাউটার/ONU/ক্যাবলের মতো যন্ত্রপাতির মালিকানা ও ফেরতের নিয়ম সাবস্ক্রিপশনের সময় {company} আপনাকে জানাবে।",
          en: "Any connection fee, installation charges, and the ownership and return rules for equipment such as the router, ONU and cable will be told to you by {company} at the time of subscription.",
        },
      ],
      // TODO(owner): confirm installation fee, equipment ownership and return rules.
    },
    {
      id: "billing",
      title: { bn: "৪. বিল ও পরিশোধ", en: "4. Billing & Payment" },
      body: [
        {
          bn: "ইন্টারনেট সেবার বিল মাসিক ভিত্তিতে হয়। ওয়েবসাইটের \"বিল পরিশোধ\" পৃষ্ঠা থেকে বিকাশের মাধ্যমে বিল পরিশোধ করা যায়। পরিশোধের সময় সঠিক গ্রাহক তথ্য ব্যবহার করুন এবং লেনদেন আইডি/রসিদ সংরক্ষণ করুন — কোনো সমস্যা হলে এটি প্রমাণ হিসেবে কাজে লাগবে।",
          en: "Internet service is billed monthly. You can pay through bKash from the Pay Bill page of this website. Use the correct customer details when paying and keep your transaction ID or receipt — it is your proof of payment if there is any problem.",
        },
        {
          bn: "নির্ধারিত সময়ের মধ্যে বিল পরিশোধ না করলে নোটিশ দিয়ে সেবা সাময়িকভাবে বন্ধ বা সংযোগ বিচ্ছিন্ন করা হতে পারে। পুনঃসংযোগের শর্ত, বিলের তারিখ ও অন্যান্য বিষয় সাবস্ক্রিপশনের সময় {company} আপনাকে জানাবে। ফেরত বা সমন্বয় (adjustment) বিষয়টি ক্ষেত্রভেদে আলাদাভাবে বিবেচনা করা হয়।",
          en: "If a bill is not paid on time, the service may be suspended or disconnected after notice. Reconnection conditions, billing dates and other details will be told to you by {company} at the time of subscription. Refunds and adjustments are considered case by case.",
        },
        {
          bn: "বিল পরিশোধের প্রক্রিয়াটি বিকাশ ও একটি বহিঃস্থ বিল-পেমেন্ট পোর্টালের মাধ্যমে হয়। আমরা আপনার বিকাশ পিন বা পাসওয়ার্ড চাই না বা সংরক্ষণ করি না।",
          en: "Bill payment goes through bKash and an external bill-payment portal. We never ask for or store your bKash PIN or password.",
        },
      ],
      // TODO(owner): exact billing date, late-payment / disconnection notice period, reconnection fee, refund policy.
    },
    {
      id: "acceptable-use",
      title: { bn: "৫. গ্রহণযোগ্য ব্যবহার", en: "5. Acceptable Use" },
      body: [
        {
          bn: "আপনি নিজের সংযোগ ও একাউন্টের সব কার্যকলাপের জন্য দায়ী। নিচের কাজগুলো নিষিদ্ধ:",
          en: "You are responsible for your connection, your account and everything done through it. The following is not allowed:",
        },
      ],
      items: [
        { bn: "যেকোনো অবৈধ কাজে সংযোগ ব্যবহার করা", en: "Using the connection for any illegal activity" },
        { bn: "হ্যাকিং, স্প্যাম, প্রতারণা বা নেটওয়ার্কের ক্ষতি করে এমন কাজ", en: "Hacking, spam, fraud or anything that harms the network" },
        { bn: "লিখিত অনুমতি ছাড়া সংযোগ বিক্রি, ভাড়া বা বাণিজ্যিকভাবে শেয়ার করা", en: "Reselling, renting or commercially sharing the connection without written permission" },
        { bn: "পাইরেসি ও কপিরাইট লঙ্ঘন", en: "Piracy and copyright infringement" },
      ],
    },
    {
      id: "third-party",
      title: { bn: "৬. লোকাল FTP ও তৃতীয় পক্ষের লিংক", en: "6. Local FTP & Third-Party Links" },
      body: [
        {
          bn: "ওয়েবসাইটের FTP মেনুতে থাকা লোকাল FTP এবং বহিঃস্থ সাইট (যেমন Movie Mazic, Cinefreak) গ্রাহকের সুবিধার জন্য দেওয়া হয়েছে। এসব সাইটের কনটেন্ট {company}-এর মালিকানাধীন বা নিয়ন্ত্রিত নয়, এবং আমরা এর সঠিকতা, নিরাপত্তা বা প্রাপ্যতার নিশ্চয়তা দিই না। এগুলো ব্যবহারের সময় কপিরাইট ও বাংলাদেশের আইন মেনে চলা আপনার দায়িত্ব।",
          en: "The local FTP and external sites in the website's FTP menu (for example Movie Mazic and Cinefreak) are provided for convenience. Their content is not owned or controlled by {company}, and we do not guarantee its accuracy, safety or availability. You must respect copyright and Bangladeshi law when using them.",
        },
      ],
    },
    {
      id: "interruptions",
      title: { bn: "৭. সেবা বিঘ্ন ও রক্ষণাবেক্ষণ", en: "7. Service Interruptions & Maintenance" },
      body: [
        {
          bn: "রক্ষণাবেক্ষণ, বিদ্যুৎ সমস্যা, আপস্ট্রিম প্রোভাইডারের সমস্যা বা আমাদের নিয়ন্ত্রণের বাইরের ঘটনার (force majeure) কারণে সেবা বিঘ্নিত হতে পারে। এর ফলে সৃষ্ট পরোক্ষ ক্ষতির জন্য {company} দায়ী থাকবে না। সমস্যায় পড়লে সাপোর্ট পৃষ্ঠা বা নিচের যোগাযোগ নম্বরে জানান।",
          en: "The service may be interrupted by maintenance, power problems, upstream provider issues or events beyond our control (force majeure). {company} is not liable for indirect losses caused by this. If you have a problem, contact us through the Support page or the numbers below.",
        },
      ],
      showContact: true,
    },
    {
      id: "reviews",
      title: { bn: "৮. পাবলিক রিভিউ", en: "8. Public Reviews" },
      body: [
        {
          bn: "আপনি ওয়েবসাইটে যে রিভিউ (নাম, রেটিং ও মন্তব্য) জমা দেবেন তা কোনো পূর্ব-যাচাই ছাড়াই সবার জন্য প্রকাশিত হয়। রিভিউ সৎ হতে হবে এবং তাতে অপমানজনক, বেআইনি বা স্প্যাম কিছু থাকা চলবে না। এসব শর্ত লঙ্ঘন করলে আমরা রিভিউ সরিয়ে দিতে পারি। রিভিউ জমা দিয়ে আপনি ওয়েবসাইটে তা প্রদর্শনের অনুমতি দিচ্ছেন।",
          en: "Reviews you submit on the website (name, rating and comment) are published publicly without prior moderation. Reviews must be honest and must not contain abusive, unlawful or spam content. We may remove reviews that break these rules. By submitting a review you allow us to display it on the website.",
        },
      ],
    },
    {
      id: "website",
      title: { bn: "৯. ওয়েবসাইট ব্যবহার, মেধাস্বত্ব ও দায়সীমা", en: "9. Website Use, Intellectual Property & Liability" },
      body: [
        {
          bn: "লোগো, লেখা ও ডিজাইনসহ এই ওয়েবসাইটের কনটেন্ট {company}-এর সম্পত্তি; অনুমতি ছাড়া এর বাণিজ্যিক ব্যবহার করা যাবে না। ওয়েবসাইটের তথ্য যথাসম্ভব সঠিক রাখার চেষ্টা করা হয়, তবে কোনো নিশ্চয়তা (warranty) ছাড়াই \"যেমন আছে\" ভিত্তিতে দেওয়া হয়। আইনে অনুমোদিত সর্বোচ্চ সীমা পর্যন্ত এই ওয়েবসাইট ব্যবহারের ফলে সৃষ্ট ক্ষতির জন্য {company}-এর দায় সীমিত।",
          en: "The content of this website, including the logo, text and design, belongs to {company} and may not be used commercially without permission. We try to keep the information accurate, but it is provided \"as is\" without warranty. To the extent allowed by law, {company}'s liability for loss arising from use of this website is limited.",
        },
      ],
    },
    {
      id: "changes",
      title: { bn: "১০. শর্ত পরিবর্তন, প্রযোজ্য আইন ও যোগাযোগ", en: "10. Changes, Governing Law & Contact" },
      body: [
        {
          bn: "আমরা যেকোনো সময় এই শর্তাবলী হালনাগাদ করতে পারি; হালনাগাদের পর ওয়েবসাইট বা সেবা ব্যবহার চালিয়ে গেলে নতুন শর্ত গ্রহণ করা হয়েছে বলে ধরা হবে। এই শর্তাবলী বাংলাদেশের আইন দ্বারা পরিচালিত হবে।",
          en: "We may update these terms at any time; continuing to use the website or service after an update means you accept the new terms. These terms are governed by the laws of Bangladesh.",
        },
        {
          bn: "যেকোনো প্রশ্নের জন্য যোগাযোগ করুন:",
          en: "For any question, contact us:",
        },
      ],
      showContact: true,
      // TODO(owner): confirm the competent court (Gazipur / Dhaka) and add it here.
    },
  ],
};

export const privacyContent = {
  lastUpdated: "2026-09-21",
  sections: [
    {
      id: "who-we-are",
      title: { bn: "১. আমরা কারা", en: "1. Who We Are" },
      body: [
        {
          bn: "{company} টঙ্গী, গাজীপুরের একটি ইন্টারনেট সেবা প্রদানকারী প্রতিষ্ঠান এবং এই ওয়েবসাইটে সংগৃহীত তথ্যের নিয়ন্ত্রক। গোপনীয়তা বিষয়ে যোগাযোগের মাধ্যম এই পৃষ্ঠার শেষে দেওয়া আছে।",
          en: "{company} is an internet service provider in Tongi, Gazipur, and the controller of the information collected on this website. Contact details for privacy questions are at the end of this page.",
        },
      ],
    },
    {
      id: "what-we-collect",
      title: { bn: "২. আমরা কী তথ্য সংগ্রহ করি", en: "2. What We Collect" },
      body: [
        {
          bn: "\"এখনই সংযোগ নিন\" ফর্ম জমা দিলে আমরা এই তথ্যগুলো সংগ্রহ করি:",
          en: "When you submit the \"Get Connected Now\" form, we collect:",
        },
      ],
      items: [
        { bn: "আপনার নাম", en: "Your name" },
        { bn: "মোবাইল নম্বর", en: "Mobile number" },
        { bn: "এলাকা / থানা", en: "Area / Thana" },
        { bn: "সম্পূর্ণ ঠিকানা", en: "Full address" },
        { bn: "আপনার পছন্দের প্যাকেজ", en: "Your preferred package" },
      ],
      extra: [
        {
          bn: "রিভিউ দিলে আমরা আপনার নাম, রেটিং, মন্তব্য, জমা দেওয়ার সময় এবং যে ভাষায় (বাংলা/ইংরেজি) ওয়েবসাইট ব্যবহার করছিলেন তা সংরক্ষণ করি।",
          en: "When you post a review, we store your name, rating, comment, the time of submission and the website language (Bangla/English) you were using.",
        },
        {
          bn: "আমাদের হোস্টিং প্রোভাইডার ও Cloudflare সাধারণ প্রযুক্তিগত লগ (যেমন আইপি অ্যাড্রেস, ব্রাউজারের ধরন, দেখা পৃষ্ঠা ও সময়) রাখতে পারে। কভারেজ যাচাই টুল আপনার লেখা এলাকার নাম আমাদের সার্ভারে পাঠায় না — যাচাই আপনার ব্রাউজারেই হয়। যোগাযোগ পৃষ্ঠার বার্তা ফর্মটি বর্তমানে কোনো সার্ভারে তথ্য পাঠায় না।",
          en: "Our hosting provider and Cloudflare may keep ordinary technical logs (such as IP address, browser type, pages visited and time). The coverage checker does not send the area name you type to our servers — the check runs in your browser. The message form on the Contact page does not currently send data to any server.",
        },
        {
          bn: "আমরা যা সংগ্রহ করি না: আপনার বিকাশ পিন, পাসওয়ার্ড বা অন্য কোনো পেমেন্ট তথ্য (বিল পরিশোধ বিকাশ ও বহিঃস্থ পোর্টালে হয়, আমাদের ওয়েবসাইটে নয়)। এই ওয়েবসাইটে কোনো অ্যানালিটিক্স, বিজ্ঞাপন বা ট্র্যাকিং টুল ব্যবহার করা হয় না।",
          en: "What we do not collect: your bKash PIN, password or any other payment credentials (bill payment happens on bKash and an external portal, not on our website). This website does not use analytics, advertising or tracking tools.",
        },
      ],
    },
    {
      id: "why",
      title: { bn: "৩. কেন এই তথ্য ব্যবহার করি", en: "3. Why We Use It" },
      items: [
        { bn: "সংযোগের অনুরোধ প্রক্রিয়া করা ও আপনার সাথে যোগাযোগ করা", en: "To process connection requests and contact you" },
        { bn: "সাপোর্ট ও বিলিং সংক্রান্ত সেবা দেওয়া", en: "To provide support and billing services" },
        { bn: "আপনার দেওয়া রিভিউ ওয়েবসাইটে প্রকাশ করা", en: "To publish the reviews you submit on the website" },
        { bn: "আমাদের সেবার মান উন্নত করা", en: "To improve our service" },
      ],
    },
    {
      id: "storage",
      title: { bn: "৪. তথ্য কোথায় সংরক্ষিত হয়", en: "4. Where It Is Stored & Who Processes It" },
      body: [
        {
          bn: "সংযোগের অনুরোধ ও রিভিউ Google Sheets-এ (Google Apps Script-এর মাধ্যমে) সংরক্ষিত হয়। ওয়েবসাইটটি আমাদের হোস্টিং প্রোভাইডারের সার্ভারে চলে এবং Cloudflare-এর মাধ্যমে পরিবেশিত হয়। এছাড়া ফন্ট লোড করতে Google Fonts ব্যবহার হয়, ফলে আপনার ব্রাউজার Google-এর সার্ভারে অনুরোধ পাঠায়। এই প্রোভাইডাররা বাংলাদেশের বাইরের সার্ভারে তথ্য প্রক্রিয়া করতে পারে।",
          en: "Connection requests and reviews are stored in Google Sheets (through Google Apps Script). The website runs on our hosting provider's server and is served through Cloudflare. Google Fonts is used to load fonts, so your browser makes requests to Google's servers. These providers may process data on servers outside Bangladesh.",
        },
      ],
    },
    {
      id: "sharing",
      title: { bn: "৫. তথ্য শেয়ার", en: "5. Sharing" },
      body: [
        {
          bn: "আমরা আপনার তথ্য বিক্রি করি না এবং বিজ্ঞাপনের জন্য শেয়ার করি না। তথ্য কেবল উপরের সেবা প্রদানকারীদের সাথে, প্রয়োজনীয় কর্মীদের সাথে, অথবা আইন বা কর্তৃপক্ষ কর্তৃক বাধ্য হলে শেয়ার করা হতে পারে।",
          en: "We do not sell your information or share it for advertising. It is shared only with the service providers above, with staff who need it, or when required by law or authorities.",
        },
      ],
    },
    {
      id: "public-info",
      title: { bn: "৬. যে তথ্য সবার জন্য উন্মুক্ত", en: "6. Public Information" },
      body: [
        {
          bn: "রিভিউতে দেওয়া আপনার নাম ও মন্তব্য ওয়েবসাইটের সবাই দেখতে পাবে। তাই রিভিউতে ফোন নম্বর, ঠিকানা বা অন্য ব্যক্তিগত তথ্য লিখবেন না। সাপোর্ট ও যোগাযোগ পৃষ্ঠায় থাকা ফোন নম্বরগুলো ইচ্ছাকৃতভাবে প্রকাশিত ব্যবসায়িক নম্বর।",
          en: "The name and comment in your review are visible to everyone on the website, so please do not put phone numbers, addresses or other private information in a review. The phone numbers shown on the Support and Contact pages are business numbers that are public on purpose.",
        },
      ],
    },
    {
      id: "cookies",
      title: { bn: "৭. কুকি ও লোকাল স্টোরেজ", en: "7. Cookies & Local Storage" },
      body: [
        {
          bn: "এই ওয়েবসাইট ট্র্যাকিং কুকি ব্যবহার করে না। আপনার ব্রাউজারে শুধু কিছু ছোট সেটিং রাখা হয়: আপনার ভাষার পছন্দ (বাংলা/ইংরেজি), শেষ রিভিউ জমা দেওয়ার সময় (বারবার রিভিউ ঠেকাতে) এবং একটি সেশন-চিহ্ন যাতে অফার পপআপ একই সেশনে বারবার না আসে। ব্রাউজারের সেটিংস থেকে এগুলো মুছে ফেলা যায়।",
          en: "This website does not use tracking cookies. Only a few small settings are kept in your browser: your language preference (Bangla/English), the time of your last review submission (to prevent repeated reviews) and a session marker so the offer pop-up does not show repeatedly in the same session. You can clear these from your browser settings.",
        },
      ],
    },
    {
      id: "third-party",
      title: { bn: "৮. তৃতীয় পক্ষের লিংক", en: "8. Third-Party Links" },
      body: [
        {
          bn: "ওয়েবসাইটে Facebook, WhatsApp, Messenger, বিকাশ ও FTP মেনুর বহিঃস্থ সাইটগুলোর লিংক আছে। এসব সাইটের নিজস্ব গোপনীয়তা নীতি প্রযোজ্য, এবং সেখানে আপনার তথ্যের ব্যবহারের জন্য {company} দায়ী নয়।",
          en: "The website links to Facebook, WhatsApp, Messenger, bKash and the external sites in the FTP menu. Their own privacy policies apply, and {company} is not responsible for how they use your information.",
        },
      ],
    },
    {
      id: "retention",
      title: { bn: "৯. তথ্য কতদিন রাখা হয়", en: "9. Data Retention" },
      body: [
        {
          bn: "সেবা প্রদান এবং আইনি ও হিসাব-সংক্রান্ত প্রয়োজনে যতদিন দরকার ততদিন আপনার তথ্য রাখা হয়; এরপর তা মুছে ফেলা বা পরিচয়হীন করা হয়।",
          en: "Your information is kept for as long as needed to provide the service and for legal and accounting needs; after that it is deleted or anonymised.",
        },
      ],
      // TODO(owner): state exact retention periods for connection requests and reviews.
    },
    {
      id: "security",
      title: { bn: "১০. নিরাপত্তা", en: "10. Security" },
      body: [
        {
          bn: "আমরা যুক্তিসংগত নিরাপত্তা ব্যবস্থা নিই — ওয়েবসাইট HTTPS-এ পরিবেশিত হয় এবং তথ্যে প্রবেশাধিকার সীমিত রাখা হয়। তবে কোনো ব্যবস্থাই ১০০% নিরাপদ নয়।",
          en: "We take reasonable security measures — the website is served over HTTPS and access to data is restricted. However, no system is 100% secure.",
        },
      ],
    },
    {
      id: "rights",
      title: { bn: "১১. আপনার অধিকার", en: "11. Your Rights" },
      body: [
        {
          bn: "আপনি আপনার তথ্য দেখতে, সংশোধন করতে বা মুছে ফেলার অনুরোধ করতে এবং দেওয়া সম্মতি প্রত্যাহার করতে পারেন। নিচের যোগাযোগ মাধ্যমে জানালে আমরা যুক্তিসংগত সময়ের মধ্যে সাড়া দেব। রিভিউ মুছতে চাইলে নাম ও রিভিউর লেখা উল্লেখ করে জানান।",
          en: "You can ask to see, correct or delete your information, and withdraw consent you have given. Contact us below and we will respond within a reasonable time. To remove a review, tell us your name and the review text.",
        },
      ],
      showContact: true,
    },
    {
      id: "children",
      title: { bn: "১২. শিশুদের তথ্য", en: "12. Children" },
      body: [
        {
          bn: "আমাদের সেবা প্রাপ্তবয়স্কদের জন্য। সংযোগের আবেদন অবশ্যই একজন প্রাপ্তবয়স্ক করবেন।",
          en: "Our service is intended for adults. Connection applications must be made by an adult.",
        },
      ],
    },
    {
      id: "changes",
      title: { bn: "১৩. নীতি পরিবর্তন ও যোগাযোগ", en: "13. Changes to This Policy & Contact" },
      body: [
        {
          bn: "আমরা এই নীতি হালনাগাদ করতে পারি; পৃষ্ঠার উপরে থাকা \"সর্বশেষ হালনাগাদ\" তারিখ থেকে নতুন সংস্করণ কার্যকর হবে। গোপনীয়তা বিষয়ে প্রশ্ন থাকলে যোগাযোগ করুন:",
          en: "We may update this policy; the new version takes effect from the \"Last updated\" date at the top of this page. For privacy questions, contact us:",
        },
      ],
      showContact: true,
      // TODO(owner): add a privacy contact email in company.js (email / supportEmail) — it is
      // blank today, so the contact block below shows only phone numbers and the address.
    },
  ],
};
