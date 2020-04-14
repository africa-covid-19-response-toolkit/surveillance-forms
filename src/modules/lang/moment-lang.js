import moment from "moment";
import momentAm from "./moment-am";

moment.defineLocale("am", {
  parentLocale: "en",
  momentAm
});

export default moment;
