import moment from "moment";

moment.defineLocale("am", {
  parentLocale: "en",
  months: "መስከረም_ጥቅምት_ህዳር_ታህሳስ_ጥር_የካቲት_መጋቢት_ሚያዚያ_ግንቦት_ሰኔ_ሀምሌ_ነሐሴ".split("_"),
  monthsShort: "መስከረም_ጥቅምት_ህዳር_ታህሳስ_ጥር_የካቲት_መጋቢት_ሚያዚያ_ግንቦት_ሰኔ_ሀምሌ_ነሐሴ".split(
    "_"
  ),
  weekdays: "ሰኞ_ማክሰኞ_እሮብ_ሐሙስ_አርብ_ቅዳሜ_እሑድ".split("_"),
  weekdaysShort: "ሰኞ_ማክሰኞ_እሮብ_ሐሙስ_አርብ_ቅዳሜ_እሑድ".split("_"),
  week: {
    dow: 0
  }
});

export default moment;
