import AddressValues from "../config/lang-phrases/addres_values_en";

const NATIONALITY_KEYS = Object.keys(AddressValues.nationality);
const COUNTRY_KEYS = Object.keys(AddressValues.country);
const CITY_KEYS = Object.keys(AddressValues.city);
const REGION_KEYS = Object.keys(AddressValues.region);
const CUSTOMFIELD1_KEYS = Object.keys(AddressValues.subcity);
const CONTACTINFO = ["email", "phoneNumber"];
const UNDERLYING = [
  "chronicLungDisease",
  "heartDisease",
  "liverDisease",
  "renalDisease",
  "autoimmuneDisease",
  "cancer",
  "diabetes",
  "hiv",
  "pregnancy",
];

const OCCUPATION_KEYS = ["hcp", "airport", "merchant", "other"];
const GENDER_VALUE = {
  property: "gender",
  female: "F",
  male: "M",
};

const RISKS = [
  "hasRecentlyTraveled",
  "contactWithSuspected",
  "contactWithConfirmed",
  "worksAtOrVisitedHealthFacility",
];
const ADDRESS = [
  "country",
  "region",
  "city",
  "postalCode",
  "street",
  "building",
];
const BIOGRAPHICALDATA = [
  "firstName",
  "middleName",
  "lastName",
  "age",
  "dateOfBirth",
  "gender",
  "preferredLanguage",
  "occupation",
  "nationality",
  "passportNumber",
  "governmentIssuedId",
];
const SYMPTOMS = [
  "fever",
  "cough",
  "shortnessOfBreath",
  "fatigue",
  "headache",
  "runnyNose",
  "feelingUnwell",
];
const LANGUAGES_KEYS = ["amharic", "oromo"];

const CALLERTYPE_KEYS = ["callerType1", "callerType2"];

const HOTEL_KEYS = ["skylight", "ghion", "azzeman", "sapphire", "other"];

export {
  BIOGRAPHICALDATA,
  CONTACTINFO,
  OCCUPATION_KEYS,
  UNDERLYING,
  RISKS,
  ADDRESS,
  SYMPTOMS,
  LANGUAGES_KEYS,
  GENDER_VALUE,
  REGION_KEYS,
  NATIONALITY_KEYS,
  CALLERTYPE_KEYS,
  HOTEL_KEYS,
  COUNTRY_KEYS,
  CITY_KEYS,
  CUSTOMFIELD1_KEYS,
};
