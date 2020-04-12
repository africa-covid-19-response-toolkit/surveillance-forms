export default {
  months: "መስከረም_ጥቅምት_ህዳር_ታህሳስ_ጥር_የካቲት_መጋቢት_ሚያዚያ_ግንቦት_ሰኔ_ሀምሌ_ነሐሴ".split("_"),
  monthsShort: "መስከረም_ጥቅምት_ህዳር_ታህሳስ_ጥር_የካቲት_መጋቢት_ሚያዚያ_ግንቦት_ሰኔ_ሀምሌ_ነሐሴ".split(
    "_"
  ),
  weekdays: "ሰኞ_ማክሰኞ_እሮብ_ሐሙስ_አርብ_ቅዳሜ_እሑድ".split("_"),
  weekdaysShort: "ሰኞ_ማክሰኞ_እሮብ_ሐሙስ_አርብ_ቅዳሜ_እሑድ".split("_"),
  weekdaysParseExact: true,
  calendar: {
    sameDay: "[ዛሬ በሰዓቱ] LT",
    nextDay: "[ነገ በሰዓቱ] LT",
    nextWeek: "dddd [በ] LT",
    lastDay: "[ትናንት ከሰዓት] LT",
    lastWeek: "[ያለፈው ሳምንት] dddd LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "%s",
    past: "ከ %s በፊት",
    s: "ጥቂት ሰከንዶች",
    ss: "%d ሰከንዶች",
    m: "ደቂቃ",
    mm: "%d ደቂቃዎች",
    h: "ሰዓት",
    hh: "%d ሰዓታት",
    d: "ቀን",
    dd: "%d ቀናት",
    M: "ወር",
    MM: "%d ወራት",
    y: "ዓመት",
    yy: "%d ዓመታት"
  },
  week: {
    dow: 1
  },
  dayOfMonthOrdinalParse: /\d{1,2}(ኛ)/,
  longDateFormat: {
    LT: "h:mm A",
    LTS: "h:mm:ss A",
    L: "YYYY-MM-DD",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A"
  }
};
