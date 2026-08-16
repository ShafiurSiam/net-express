// Central bilingual (বাংলা/English) UI copy tree. Every human-facing string that
// isn't part of src/data/* or src/config/* content lives here, namespaced by
// where it's used. Look up a value with resolve("namespace.key", language) —
// or, inside a component, with the t() helper from useLanguage().
export const translations = {
  common: {
    payBill: { bn: "বিল পরিশোধ", en: "Pay Bill" },
    payNow: { bn: "বিল পরিশোধ করুন", en: "Pay Bill Now" },
  },

  languageSwitch: {
    switchToBangla: { bn: "ভাষা বাংলায় পরিবর্তন করুন", en: "Switch language to Bangla" },
    switchToEnglish: { bn: "ভাষা ইংরেজিতে পরিবর্তন করুন", en: "Switch language to English" },
  },

  nav: {
    home: { bn: "হোম", en: "Home" },
    about: { bn: "আমাদের সম্পর্কে", en: "About" },
    packages: { bn: "প্যাকেজ", en: "Packages" },
    offers: { bn: "অফার", en: "Offers" },
    coverage: { bn: "কভারেজ", en: "Coverage" },
    support: { bn: "সহায়তা", en: "Support" },
    contact: { bn: "যোগাযোগ", en: "Contact" },
    mainNav: { bn: "প্রধান মেনু", en: "Main menu" },
    openMenu: { bn: "মেনু খুলুন", en: "Open menu" },
    closeMenu: { bn: "মেনু বন্ধ করুন", en: "Close menu" },
    mobileNav: { bn: "মোবাইল মেনু", en: "Mobile menu" },
  },

  footer: {
    quickLinksHeading: { bn: "দ্রুত লিংক", en: "Quick Links" },
    supportHeading: { bn: "সহায়তা", en: "Support" },
    contactHeading: { bn: "যোগাযোগ", en: "Contact" },
    copyright: { bn: "© {year} {name}। সর্বস্বত্ব সংরক্ষিত।", en: "© {year} {name}. All rights reserved." },
    faqLabel: { bn: "সচরাচর জিজ্ঞাসা", en: "FAQ" },
    termsLabel: { bn: "শর্তাবলী", en: "Terms" },
    privacyLabel: { bn: "গোপনীয়তা নীতি", en: "Privacy Policy" },
  },

  floatingContact: {
    whatsapp: { bn: "WhatsApp এ যোগাযোগ করুন", en: "Contact us on WhatsApp" },
    messenger: { bn: "Messenger এ যোগাযোগ করুন", en: "Contact us on Messenger" },
  },

  modal: {
    close: { bn: "বন্ধ করুন", en: "Close" },
    connectionRequestTitle: { bn: "নতুন সংযোগের জন্য আবেদন করুন", en: "Apply for a New Connection" },
  },

  connectionForm: {
    nameLabel: { bn: "নাম", en: "Name" },
    namePlaceholder: { bn: "আপনার নাম লিখুন", en: "Enter your name" },
    mobileLabel: { bn: "মোবাইল নম্বর", en: "Mobile Number" },
    mobilePlaceholder: { bn: "০১XXXXXXXXX", en: "01XXXXXXXXX" },
    areaLabel: { bn: "এলাকা / থানা", en: "Area / Thana" },
    areaPlaceholder: { bn: "যেমনঃ ধানমন্ডি, ঢাকা", en: "e.g. Dhanmondi, Dhaka" },
    addressLabel: { bn: "সম্পূর্ণ ঠিকানা", en: "Full Address" },
    addressPlaceholder: { bn: "বাসা/হোল্ডিং নম্বর, রোড, এলাকা", en: "House/holding no., road, area" },
    packageLabel: { bn: "পছন্দের প্যাকেজ", en: "Preferred Package" },
    selectPackage: { bn: "প্যাকেজ নির্বাচন করুন", en: "Select a package" },
    packageOption: { bn: "{name} — ৳{price}/{period}", en: "{name} — ৳{price}/{period}" },
    homePackagesGroup: { bn: "ইন্টারনেট প্যাকেজ", en: "Internet Packages" },
    smePlansGroup: { bn: "SME ও কর্পোরেট প্ল্যান", en: "SME & Corporate Plans" },
    smePlanOption: { bn: "{name} ({speed}) — আলোচনা সাপেক্ষে মূল্য", en: "{name} ({speed}) — Negotiable pricing" },
    submit: { bn: "অনুরোধ পাঠান", en: "Send Request" },
    submitting: { bn: "পাঠানো হচ্ছে...", en: "Sending..." },
    successTitle: { bn: "অনুরোধ গ্রহণ করা হয়েছে", en: "Request Received" },
    successBody: { bn: "ধন্যবাদ! আমাদের প্রতিনিধি শীঘ্রই আপনার সাথে যোগাযোগ করবেন।", en: "Thank you! Our representative will contact you shortly." },
    savedNote: {
      bn: "আপনার তথ্য সংরক্ষণ করা হয়েছে। আমাদের প্রতিনিধি শীঘ্রই যোগাযোগ করবে।",
      en: "Your info has been saved. Our representative will contact you soon.",
    },
    errorMessage: {
      bn: "রিকুয়েস্ট পাঠাতে সমস্যা হয়েছে। আবার চেষ্টা করুন অথবা ফোনে যোগাযোগ করুন: {phone}",
      en: "There was a problem sending the request. Try again or contact us by phone: {phone}",
    },
    newRequest: { bn: "নতুন অনুরোধ করুন", en: "Make a New Request" },
  },

  packageCard: {
    mostPopular: { bn: "সবচেয়ে জনপ্রিয়", en: "Most Popular" },
    getConnected: { bn: "সংযোগ নিন", en: "Get Connected" },
    whatsNew: { bn: "নতুন কী", en: "What's New" },
  },

  offerCard: {
    validity: { bn: "মেয়াদ: {validity}", en: "Validity: {validity}" },
  },

  hero: {
    eyebrow: { bn: "বাংলাদেশের বিশ্বস্ত ইন্টারনেট সেবা", en: "Bangladesh's Trusted Internet Service" },
    titleLead: { bn: "আপনার গতির", en: "Your Speed" },
    titleHighlight: { bn: "সাথী", en: "Companion" },
    titleTail: { bn: "নেট এক্সপ্রেস", en: "Net Express" },
    subtitle: {
      bn: "দ্রুত, নির্ভরযোগ্য ও নিরবচ্ছিন্ন ব্রডব্যান্ড ইন্টারনেট সংযোগ — আপনার বাসা কিংবা ব্যবসার প্রয়োজনে, সাশ্রয়ী মূল্যে।",
      en: "Fast, reliable, uninterrupted broadband internet — for your home or business, at an affordable price.",
    },
    ctaPrimary: { bn: "প্যাকেজ দেখুন", en: "View Packages" },
    ctaSecondary: { bn: "এখনই সংযোগ নিন", en: "Get Connected Now" },
    trustSupport: { bn: "২৪/৭ কাস্টমার সাপোর্ট", en: "24/7 Customer Support" },
    trustUptime: { bn: "৯৯%+ নেটওয়ার্ক আপটাইম", en: "99%+ Network Uptime" },
    trustInstall: { bn: "ফ্রি ইনস্টলেশন", en: "Free Installation" },
    imageAlt: { bn: "নেটওয়ার্ক সংযোগের বিমূর্ত চিত্র", en: "Abstract illustration of a network connection" },
  },

  home: {
    packagesSection: {
      eyebrow: { bn: "ইন্টারনেট প্যাকেজ", en: "Internet Packages" },
      title: { bn: "বাসার জন্য উপযুক্ত ইন্টারনেট প্যাকেজ বেছে নিন", en: "Choose the Right Internet Package for Your Home" },
      subtitle: { bn: "প্রয়োজন অনুযায়ী গতি বেছে নিন — কোনো লুকানো খরচ নেই, শুধু নিরবচ্ছিন্ন সংযোগ।", en: "Pick the speed that fits your needs — no hidden costs, just an uninterrupted connection." },
      viewAll: { bn: "সকল প্যাকেজ ও বিজনেস প্ল্যান দেখুন", en: "View All Packages & Business Plans" },
    },
    offersSection: {
      eyebrow: { bn: "বিশেষ অফার", en: "Special Offers" },
      title: { bn: "চলমান বিশেষ অফারসমূহ", en: "Current Special Offers" },
      subtitle: { bn: "সীমিত সময়ের জন্য উপলব্ধ চমৎকার সব সুবিধা।", en: "Great perks available for a limited time." },
    },
    whyChooseUs: {
      eyebrow: { bn: "কেন আমরা", en: "Why Us" },
      title: { bn: "কেন আমাদের বেছে নেবেন?", en: "Why Choose Us?" },
      subtitle: { bn: "গতি, নির্ভরযোগ্যতা ও গ্রাহকসেবায় আমরা প্রতিশ্রুতিবদ্ধ।", en: "We're committed to speed, reliability, and customer care." },
      features: [
        { title: { bn: "অত্যাধুনিক গতির ইন্টারনেট", en: "Cutting-Edge Speed" }, description: { bn: "সর্বোচ্চ গতিতে ব্রাউজিং, স্ট্রিমিং ও গেমিং উপভোগ করুন কোনো বাফারিং ছাড়াই।", en: "Enjoy browsing, streaming, and gaming at top speed with no buffering." } },
        { title: { bn: "নির্ভরযোগ্য সংযোগ", en: "Reliable Connection" }, description: { bn: "স্থিতিশীল নেটওয়ার্ক অবকাঠামো, যা নিশ্চিত করে নিরবচ্ছিন্ন ইন্টারনেট সেবা।", en: "A stable network infrastructure that guarantees uninterrupted internet service." } },
        { title: { bn: "২৪/৭ কাস্টমার সাপোর্ট", en: "24/7 Customer Support" }, description: { bn: "যেকোনো সময় প্রয়োজনে আমাদের সাপোর্ট টিম আপনার পাশে রয়েছে।", en: "Our support team is by your side whenever you need us." } },
        { title: { bn: "দ্রুত সমস্যা সমাধান", en: "Fast Issue Resolution" }, description: { bn: "প্রযুক্তিগত সমস্যায় দ্রুততম সময়ে সমাধান দেওয়াই আমাদের অগ্রাধিকার।", en: "Resolving technical issues as quickly as possible is our priority." } },
        { title: { bn: "আধুনিক নেটওয়ার্ক প্রযুক্তি", en: "Modern Network Technology" }, description: { bn: "সর্বশেষ প্রযুক্তি ব্যবহার করে গড়ে তোলা নেটওয়ার্ক পরিকাঠামো।", en: "Network infrastructure built with the latest technology." } },
        { title: { bn: "সহজ বিল পেমেন্ট", en: "Easy Bill Payment" }, description: { bn: "বিকাশ, নগদ, রকেট বা কার্ডের মাধ্যমে ঘরে বসেই বিল পরিশোধ করুন।", en: "Pay your bill from home via bKash, Nagad, Rocket, or card." } },
      ],
    },
    coverageSection: {
      eyebrow: { bn: "কভারেজ এলাকা", en: "Coverage Area" },
      title: { bn: "আপনার এলাকায় কি আমাদের সংযোগ রয়েছে?", en: "Do We Cover Your Area?" },
      subtitle: { bn: "আপনার এলাকার নাম লিখে দ্রুত যাচাই করুন।", en: "Enter your area name to check quickly." },
      placeholder: { bn: "এলাকার নাম লিখুন, যেমনঃ মিরপুর", en: "Enter area name, e.g. Mirpur" },
      button: { bn: "কভারেজ দেখুন", en: "Check Coverage" },
      imageAlt: { bn: "কভারেজ এলাকার বিমূর্ত মানচিত্র", en: "Abstract map of coverage areas" },
      resultPrefix: { bn: "", en: "" },
      resultSuffix: {
        bn: "এলাকায় সংযোগ সম্পর্কে জানতে আমাদের প্রতিনিধি শীঘ্রই আপনার সাথে যোগাযোগ করবেন। বিস্তারিত তালিকার জন্য",
        en: "our representative will contact you shortly about a connection in this area. For the full list, see the",
      },
      resultTail: { bn: "দেখুন।", en: "page." },
      coveragePageLink: { bn: "কভারেজ পেজ", en: "Coverage" },
    },
    howItWorks: {
      eyebrow: { bn: "সংযোগ প্রক্রিয়া", en: "Connection Process" },
      title: { bn: "কিভাবে সংযোগ নেবেন", en: "How to Get Connected" },
      subtitle: { bn: "মাত্র কয়েকটি ধাপে শুরু করুন নতুন ইন্টারনেট সংযোগ।", en: "Start your new internet connection in just a few steps." },
      stepLabel: { bn: "ধাপ {number}", en: "Step {number}" },
      button: { bn: "এখনই সংযোগের জন্য আবেদন করুন", en: "Apply for a Connection Now" },
      steps: [
        { title: { bn: "প্যাকেজ নির্বাচন", en: "Choose a Package" }, description: { bn: "আপনার প্রয়োজন অনুযায়ী উপযুক্ত ইন্টারনেট প্যাকেজ বেছে নিন।", en: "Pick the internet package that fits your needs." } },
        { title: { bn: "আবেদন করুন", en: "Apply" }, description: { bn: "অনলাইন ফর্মের মাধ্যমে দ্রুত সংযোগের জন্য আবেদন সম্পন্ন করুন।", en: "Complete your connection application quickly via the online form." } },
        { title: { bn: "প্রতিনিধি যোগাযোগ করবে", en: "We'll Call You" }, description: { bn: "আমাদের প্রতিনিধি নিশ্চিতকরণের জন্য আপনার সাথে যোগাযোগ করবে।", en: "Our representative will contact you to confirm the details." } },
        { title: { bn: "সংযোগ স্থাপন", en: "Installation" }, description: { bn: "নির্ধারিত সময়ে আমাদের টেকনিশিয়ান এসে সংযোগ স্থাপন করবে।", en: "Our technician will arrive at the scheduled time to install your connection." } },
        { title: { bn: "ইন্টারনেট ব্যবহার করুন", en: "Start Using Internet" }, description: { bn: "উপভোগ করুন দ্রুতগতির নিরবচ্ছিন্ন ইন্টারনেট সেবা।", en: "Enjoy fast, uninterrupted internet service." } },
      ],
    },
    paymentSection: {
      eyebrow: { bn: "বিল পরিশোধ", en: "Bill Payment" },
      title: { bn: "ঘরে বসেই সহজে বিল পরিশোধ করুন", en: "Pay Your Bill Easily From Home" },
      subtitle: { bn: "বিকাশ, নগদ, রকেট অথবা কার্ড/ব্যাংক ট্রান্সফারের মাধ্যমে দ্রুত ও নিরাপদে আপনার ইন্টারনেট বিল পরিশোধ করুন।", en: "Pay your internet bill quickly and securely via bKash, Nagad, Rocket, or card/bank transfer." },
    },
    faqSection: {
      eyebrow: { bn: "সচরাচর জিজ্ঞাসা", en: "Frequently Asked Questions" },
      title: { bn: "আপনার প্রশ্নের উত্তর", en: "Answers to Your Questions" },
    },
    ctaSection: {
      title: { bn: "আজই নেট এক্সপ্রেসের সাথে যুক্ত হয়ে উপভোগ করুন নিরবচ্ছিন্ন ইন্টারনেট", en: "Join Net Express Today and Enjoy Uninterrupted Internet" },
      subtitle: { bn: "দ্রুত, নির্ভরযোগ্য ও সাশ্রয়ী সংযোগের জন্য এখনই আবেদন করুন — আমাদের প্রতিনিধি দ্রুত আপনার সাথে যোগাযোগ করবে।", en: "Apply now for a fast, reliable, and affordable connection — our representative will reach out to you right away." },
      button: { bn: "সংযোগের জন্য আবেদন করুন", en: "Apply for a Connection" },
    },
  },

  seo: {
    about: { title: { bn: "আমাদের সম্পর্কে", en: "About Us" }, description: { bn: "Net Express একটি আধুনিক, নির্ভরযোগ্য বাংলাদেশি ইন্টারনেট সেবা প্রদানকারী প্রতিষ্ঠান।", en: "Net Express is a modern, reliable Bangladeshi internet service provider." } },
    contact: { title: { bn: "যোগাযোগ", en: "Contact" }, description: { bn: "Net Express এর সাথে যোগাযোগ করুন — ফোন, ইমেইল অথবা অফিসের ঠিকানায়।", en: "Get in touch with Net Express — by phone, email, or at our office." } },
    coverage: { title: { bn: "কভারেজ এলাকা", en: "Coverage Area" }, description: { bn: "আপনার এলাকায় Net Express এর সংযোগ রয়েছে কিনা যাচাই করুন।", en: "Check whether Net Express covers your area." } },
    notFound: { title: { bn: "পৃষ্ঠা পাওয়া যায়নি", en: "Page Not Found" }, description: { bn: "দুঃখিত, আপনার খোঁজা পৃষ্ঠাটি খুঁজে পাওয়া যায়নি।", en: "Sorry, the page you're looking for could not be found." } },
    offers: { title: { bn: "বিশেষ অফার", en: "Special Offers" }, description: { bn: "Net Express এর চলমান সকল বিশেষ অফার ও প্রমোশন দেখুন।", en: "See all of Net Express's current special offers and promotions." } },
    packages: { title: { bn: "ইন্টারনেট প্যাকেজ", en: "Internet Packages" }, description: { bn: "Net Express এর সকল ইন্টারনেট প্যাকেজ ও মূল্য তালিকা — বাসা ও ব্যবসার জন্য।", en: "All Net Express internet packages and pricing — for home and business." } },
    payment: { title: { bn: "বিল পরিশোধ", en: "Pay Bill" }, description: { bn: "বিকাশ, নগদ, রকেট বা কার্ডের মাধ্যমে Net Express এর ইন্টারনেট বিল পরিশোধ করুন।", en: "Pay your Net Express internet bill via bKash, Nagad, Rocket, or card." } },
    privacy: { title: { bn: "গোপনীয়তা নীতি", en: "Privacy Policy" }, description: { bn: "Net Express এর গোপনীয়তা নীতি।", en: "Net Express's privacy policy." } },
    speedTest: { title: { bn: "স্পিড টেস্ট", en: "Speed Test" }, description: { bn: "আপনার ইন্টারনেট সংযোগের গতি যাচাই করুন (ডেমো)।", en: "Check your internet connection speed (demo)." } },
    support: { title: { bn: "সহায়তা", en: "Support" }, description: { bn: "Net Express গ্রাহক সহায়তা কেন্দ্র — সচরাচর জিজ্ঞাসা ও যোগাযোগের তথ্য।", en: "Net Express customer support center — FAQs and contact information." } },
    terms: { title: { bn: "শর্তাবলী", en: "Terms" }, description: { bn: "Net Express এর সেবা ব্যবহারের শর্তাবলী।", en: "Net Express's terms of service." } },
  },

  pageHeader: {
    about: { eyebrow: { bn: "আমাদের সম্পর্কে", en: "About Us" }, title: { bn: "নেট এক্সপ্রেস সম্পর্কে জানুন", en: "Learn About Net Express" } },
    contact: { eyebrow: { bn: "যোগাযোগ", en: "Contact" }, title: { bn: "আমাদের সাথে যোগাযোগ করুন", en: "Get in Touch With Us" }, subtitle: { bn: "যেকোনো প্রশ্ন বা সহায়তার জন্য নিচের মাধ্যমগুলোতে যোগাযোগ করুন।", en: "Reach out through any of the channels below for questions or support." } },
    coverage: { eyebrow: { bn: "কভারেজ", en: "Coverage" }, title: { bn: "আপনার এলাকায় কি সংযোগ পাওয়া যাবে?", en: "Is a Connection Available in Your Area?" }, subtitle: { bn: "এলাকার নাম লিখে যাচাই করুন, অথবা নিচের তালিকায় খুঁজুন।", en: "Check by entering your area name, or search the list below." } },
    offers: { eyebrow: { bn: "অফার", en: "Offers" }, title: { bn: "চলমান বিশেষ অফারসমূহ", en: "Current Special Offers" }, subtitle: { bn: "সীমিত সময়ের জন্য উপলব্ধ চমৎকার সব সুবিধা।", en: "Great perks available for a limited time." } },
    packages: { eyebrow: { bn: "প্যাকেজ", en: "Packages" }, title: { bn: "ইন্টারনেট প্যাকেজ ও মূল্য তালিকা", en: "Internet Packages & Pricing" }, subtitle: { bn: "প্রয়োজন অনুযায়ী বেছে নিন সবচেয়ে উপযুক্ত প্যাকেজ।", en: "Choose the package that best fits your needs." } },
    payment: { eyebrow: { bn: "বিল পরিশোধ", en: "Pay Bill" }, title: { bn: "সহজে ও নিরাপদে বিল পরিশোধ করুন", en: "Pay Your Bill Easily & Securely" }, subtitle: { bn: "নিচের বাটনে ক্লিক করে আপনার পছন্দের মাধ্যমে বিল পরিশোধ করুন।", en: "Click the button below to pay via your preferred method." } },
    privacy: { eyebrow: { bn: "আইনি তথ্য", en: "Legal" }, title: { bn: "গোপনীয়তা নীতি", en: "Privacy Policy" }, subtitle: { bn: "এই পৃষ্ঠাটি একটি প্লেসহোল্ডার — চূড়ান্ত বিষয়বস্তু শীঘ্রই আপডেট করা হবে।", en: "This page is a placeholder — final content will be updated soon." } },
    speedTest: { eyebrow: { bn: "স্পিড টেস্ট", en: "Speed Test" }, title: { bn: "ইন্টারনেট স্পিড টেস্ট", en: "Internet Speed Test" }, subtitle: { bn: "আপনার সংযোগের ডাউনলোড, আপলোড ও পিং গতি যাচাই করুন।", en: "Check your connection's download, upload, and ping speed." } },
    support: { eyebrow: { bn: "সহায়তা", en: "Support" }, title: { bn: "আমরা আপনার পাশে আছি", en: "We're Here to Help" }, subtitle: { bn: "সাধারণ প্রশ্নের উত্তর খুঁজুন, অথবা সরাসরি আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন।", en: "Find answers to common questions, or reach our support team directly." } },
    terms: { eyebrow: { bn: "আইনি তথ্য", en: "Legal" }, title: { bn: "শর্তাবলী", en: "Terms" }, subtitle: { bn: "এই পৃষ্ঠাটি একটি প্লেসহোল্ডার — চূড়ান্ত বিষয়বস্তু শীঘ্রই আপডেট করা হবে।", en: "This page is a placeholder — final content will be updated soon." } },
  },

  about: {
    journeyTitle: { bn: "আমাদের যাত্রা", en: "Our Journey" },
    paragraph1: {
      bn: "{companyName} প্রতিষ্ঠিত হয়েছে একটি সহজ লক্ষ্য নিয়ে — বাংলাদেশের মানুষের জন্য দ্রুত, নির্ভরযোগ্য ও সাশ্রয়ী ইন্টারনেট সংযোগ নিশ্চিত করা। আধুনিক নেটওয়ার্ক প্রযুক্তি ও দক্ষ টিমের মাধ্যমে আমরা প্রতিনিয়ত গ্রাহকসেবার মান উন্নত করে চলেছি।",
      en: "{companyName} was founded with a simple goal — to bring fast, reliable, and affordable internet connections to the people of Bangladesh. With modern network technology and a skilled team, we're continuously improving the quality of our customer service.",
    },
    paragraph2: {
      bn: "বাসাবাড়ি থেকে শুরু করে ব্যবসা প্রতিষ্ঠান — সব ধরনের গ্রাহকের চাহিদা মাথায় রেখে আমরা তৈরি করেছি বিভিন্ন মূল্যের ও গতির প্যাকেজ, যা মানানসই আপনার প্রয়োজনের সাথে।",
      en: "From homes to businesses, we've built packages at various prices and speeds to suit every kind of customer, matched to your needs.",
    },
    imageAlt: { bn: "নেট এক্সপ্রেস অফিস ও নেটওয়ার্কের বিমূর্ত চিত্র", en: "Abstract illustration of the Net Express office and network" },
    values: [
      { title: { bn: "আমাদের লক্ষ্য", en: "Our Mission" }, description: { bn: "প্রতিটি ঘরে ও ব্যবসায় সাশ্রয়ী মূল্যে দ্রুতগতির ইন্টারনেট পৌঁছে দেওয়া।", en: "Delivering fast internet at an affordable price to every home and business." } },
      { title: { bn: "আমাদের দৃষ্টিভঙ্গি", en: "Our Vision" }, description: { bn: "বাংলাদেশের সবচেয়ে নির্ভরযোগ্য ও গ্রাহকবান্ধব ইন্টারনেট সেবা প্রদানকারী প্রতিষ্ঠান হয়ে ওঠা।", en: "Becoming Bangladesh's most reliable and customer-friendly internet service provider." } },
      { title: { bn: "আমাদের প্রতিশ্রুতি", en: "Our Promise" }, description: { bn: "স্বচ্ছতা, মানসম্পন্ন সেবা ও দ্রুত সমস্যা সমাধানের মাধ্যমে গ্রাহকের আস্থা অর্জন করা।", en: "Earning customer trust through transparency, quality service, and fast issue resolution." } },
    ],
  },

  contact: {
    phoneLabel: { bn: "ফোন / হটলাইন", en: "Phone / Hotline" },
    emailLabel: { bn: "ইমেইল", en: "Email" },
    addressLabel: { bn: "অফিসের ঠিকানা", en: "Office Address" },
    hoursLabel: { bn: "কার্যসময়", en: "Working Hours" },
    sentTitle: { bn: "বার্তা পাঠানো হয়েছে", en: "Message Sent" },
    sentBody: { bn: "আমরা যত দ্রুত সম্ভব আপনার সাথে যোগাযোগ করব।", en: "We'll get back to you as soon as possible." },
    newMessage: { bn: "নতুন বার্তা পাঠান", en: "Send a New Message" },
    formHeading: { bn: "বার্তা পাঠান", en: "Send a Message" },
    nameLabel: { bn: "নাম", en: "Name" },
    namePlaceholder: { bn: "আপনার নাম", en: "Your name" },
    contactLabel: { bn: "ফোন / ইমেইল", en: "Phone / Email" },
    contactPlaceholder: { bn: "যোগাযোগের মাধ্যম", en: "Your contact detail" },
    messageLabel: { bn: "বার্তা", en: "Message" },
    messagePlaceholder: { bn: "আপনার বার্তা লিখুন", en: "Write your message" },
    submit: { bn: "বার্তা পাঠান", en: "Send Message" },
  },

  coverage: {
    placeholder: { bn: "এলাকার নাম লিখুন", en: "Enter area name" },
    verify: { bn: "যাচাই করুন", en: "Verify" },
    resultCoveredSuffix: {
      bn: "এলাকায় আমাদের সংযোগ উপলব্ধ। এখনই আবেদন করুন অথবা আমাদের হটলাইনে যোগাযোগ করুন।",
      en: "is covered by our network. Apply now or contact our hotline.",
    },
    resultNotCoveredSuffix: {
      bn: "এলাকাটি এই মুহূর্তে তালিকায় নেই। তবে আমরা দ্রুত সম্প্রসারণ করছি — সরাসরি যোগাযোগ করুন বিস্তারিত জানতে।",
      en: "isn't on our list yet. We're expanding quickly, though — contact us directly for details.",
    },
    sampleHeading: { bn: "বর্তমান কভারেজ এলাকা (নমুনা)", en: "Current Coverage Areas (Sample)" },
    disclaimer: { bn: "* এটি একটি ডেমো তালিকা। প্রকৃত কভারেজ তথ্যের জন্য পরবর্তীতে সরাসরি API সংযুক্ত করা হবে।", en: "* This is a demo list. A real coverage API will be connected later." },
  },

  notFound: {
    title: { bn: "পৃষ্ঠা পাওয়া যায়নি", en: "Page Not Found" },
    body: { bn: "দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা সরানো হয়েছে অথবা কখনো ছিল না। হোমপেজে ফিরে যান।", en: "Sorry, the page you're looking for has been moved or never existed. Head back to the homepage." },
    backHome: { bn: "হোমপেজে ফিরে যান", en: "Back to Homepage" },
  },

  payment: {
    cardTitle: { bn: "আপনার বিল পরিশোধ করুন", en: "Pay Your Bill" },
    cardBody: { bn: "গ্রাহক আইডি বা মোবাইল নম্বর ব্যবহার করে নিচের পেমেন্ট গেটওয়ে থেকে বিল পরিশোধ সম্পন্ন করুন।", en: "Complete your payment through the gateway below using your customer ID or mobile number." },
    hotlineNote: { bn: "সমস্যা হলে আমাদের হটলাইনে কল করুন: {hotline}", en: "Facing an issue? Call our hotline: {hotline}" },
    perks: [
      { title: { bn: "মুহূর্তেই সম্পন্ন", en: "Instant" }, description: { bn: "কোনো অপেক্ষা ছাড়াই কয়েক সেকেন্ডে বিল পরিশোধ করুন।", en: "Pay your bill in seconds with no waiting." } },
      { title: { bn: "নিরাপদ পেমেন্ট", en: "Secure Payment" }, description: { bn: "নিরাপদ ও এনক্রিপ্টেড পেমেন্ট গেটওয়ের মাধ্যমে লেনদেন সম্পন্ন হয়।", en: "Transactions go through a secure, encrypted payment gateway." } },
      { title: { bn: "মোবাইল থেকেই সম্ভব", en: "Pay From Mobile" }, description: { bn: "বিকাশ, নগদ বা রকেট অ্যাপ থেকে সরাসরি বিল পরিশোধ করুন।", en: "Pay directly from the bKash, Nagad, or Rocket app." } },
    ],
  },

  terms: {
    sections: [
      { title: { bn: "১. সেবার শর্তাবলী", en: "1. Terms of Service" }, body: { bn: "{companyName} এর ইন্টারনেট সেবা ব্যবহারের মাধ্যমে গ্রাহক এই শর্তাবলীর সাথে সম্মত হচ্ছেন বলে ধরে নেওয়া হয়। এই পৃষ্ঠার বিষয়বস্তু একটি সাময়িক প্লেসহোল্ডার — চূড়ান্ত আইনি ভাষা একজন পেশাদার আইনজীবীর মাধ্যমে প্রস্তুত করা হবে।", en: "By using {companyName}'s internet service, the customer is deemed to agree to these terms. This page's content is a temporary placeholder — the final legal language will be prepared by a professional lawyer." } },
      { title: { bn: "২. একাউন্ট ও সংযোগ", en: "2. Account & Connection" }, body: { bn: "গ্রাহককে নিবন্ধনের সময় সঠিক তথ্য প্রদান করতে হবে। ভুল বা অসম্পূর্ণ তথ্যের কারণে সংযোগ বিলম্বিত বা বাতিল হতে পারে।", en: "Customers must provide accurate information at the time of registration. Incorrect or incomplete information may delay or cancel the connection." } },
      { title: { bn: "৩. বিল ও পরিশোধ", en: "3. Billing & Payment" }, body: { bn: "নির্ধারিত সময়ের মধ্যে মাসিক বিল পরিশোধ করতে হবে। বিল বকেয়া থাকলে সাময়িকভাবে সংযোগ বন্ধ রাখার অধিকার সংরক্ষণ করে কর্তৃপক্ষ।", en: "Monthly bills must be paid within the specified time. The company reserves the right to temporarily suspend the connection for overdue bills." } },
      { title: { bn: "৪. ব্যবহারবিধি", en: "4. Acceptable Use" }, body: { bn: "অবৈধ বা ক্ষতিকর কার্যকলাপে ইন্টারনেট সংযোগ ব্যবহার করা যাবে না। এই নীতি লঙ্ঘন করলে সংযোগ স্থগিত করা হতে পারে।", en: "The internet connection must not be used for illegal or harmful activity. Violating this policy may result in suspension of the connection." } },
      { title: { bn: "৫. সেবা বাতিল", en: "5. Service Cancellation" }, body: { bn: "গ্রাহক যেকোনো সময় লিখিত অনুরোধের মাধ্যমে সংযোগ বাতিল করতে পারবেন। প্রযোজ্য শর্ত অনুযায়ী অগ্রিম নোটিশ প্রয়োজন হতে পারে।", en: "Customers may cancel their connection at any time via written request. Advance notice may be required as per applicable terms." } },
    ],
  },

  privacy: {
    sections: [
      { title: { bn: "১. তথ্য সংগ্রহ", en: "1. Information Collection" }, body: { bn: "{companyName} গ্রাহকসেবার উদ্দেশ্যে নাম, ফোন নম্বর, ঠিকানা ও প্যাকেজ সংক্রান্ত তথ্য সংগ্রহ করে। এই পৃষ্ঠার বিষয়বস্তু একটি সাময়িক প্লেসহোল্ডার — চূড়ান্ত নীতিমালা একজন পেশাদার আইনজীবীর মাধ্যমে প্রস্তুত করা হবে।", en: "{companyName} collects name, phone number, address, and package information for customer-service purposes. This page's content is a temporary placeholder — the final policy will be prepared by a professional lawyer." } },
      { title: { bn: "২. তথ্যের ব্যবহার", en: "2. Use of Information" }, body: { bn: "সংগৃহীত তথ্য শুধুমাত্র সংযোগ স্থাপন, বিলিং ও গ্রাহকসেবার উদ্দেশ্যে ব্যবহৃত হয়। বিপণন উদ্দেশ্যে ব্যবহারের ক্ষেত্রে পূর্বানুমতি নেওয়া হবে।", en: "Collected information is used only for connection setup, billing, and customer service. Prior consent will be obtained for any marketing use." } },
      { title: { bn: "৩. তথ্য সুরক্ষা", en: "3. Data Security" }, body: { bn: "গ্রাহকের ব্যক্তিগত তথ্য সুরক্ষিত রাখতে যথাযথ প্রযুক্তিগত ও প্রশাসনিক ব্যবস্থা গ্রহণ করা হয়।", en: "Appropriate technical and administrative measures are taken to keep customer personal information secure." } },
      { title: { bn: "৪. তৃতীয় পক্ষের সাথে তথ্য শেয়ার", en: "4. Sharing With Third Parties" }, body: { bn: "আইনি প্রয়োজন ব্যতীত গ্রাহকের ব্যক্তিগত তথ্য কোনো তৃতীয় পক্ষের সাথে শেয়ার করা হয় না।", en: "Customer personal information is not shared with any third party except as legally required." } },
      { title: { bn: "৫. যোগাযোগ", en: "5. Contact" }, body: { bn: "গোপনীয়তা নীতি সম্পর্কিত যেকোনো প্রশ্নের জন্য আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন।", en: "Contact our support team with any questions about this privacy policy." } },
    ],
  },

  speedTest: {
    testing: { bn: "পরীক্ষা চলছে...", en: "Testing..." },
    start: { bn: "টেস্ট শুরু করুন", en: "Start Test" },
    download: { bn: "ডাউনলোড", en: "Download" },
    upload: { bn: "আপলোড", en: "Upload" },
    ping: { bn: "পিং", en: "Ping" },
    disclaimer: { bn: "এটি একটি ডেমো ইন্টারফেস — প্রকৃত স্পিড পরিমাপ ভবিষ্যতে ব্যাকএন্ড ইন্টিগ্রেশনের মাধ্যমে যুক্ত করা হবে।", en: "This is a demo interface — real speed measurement will be added later via backend integration." },
  },

  support: {
    directTitle: { bn: "সরাসরি সহায়তা নিন", en: "Get Direct Support" },
    directBody: { bn: "আমাদের ২৪/৭ সাপোর্ট টিম আপনার যেকোনো সমস্যা সমাধানে প্রস্তুত।", en: "Our 24/7 support team is ready to resolve any issue you have." },
    contactButton: { bn: "যোগাযোগ করুন", en: "Contact Us" },
  },
};

// Walks a dot-path (e.g. "nav.home") and returns the {bn, en} entry's value
// for the given language, falling back to Bangla, then the raw key.
export const resolve = (key, language) => {
  const entry = key.split(".").reduce((acc, part) => (acc == null ? acc : acc[part]), translations);
  if (!entry || typeof entry !== "object") return key;
  return entry[language] ?? entry.bn ?? key;
};
