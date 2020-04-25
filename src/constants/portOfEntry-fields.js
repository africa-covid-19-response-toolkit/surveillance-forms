import { HOTEL_KEYS, COUNTRY_KEYS } from "./common-keys";
import { COMMON_FIELDS } from "./common-fields";
const PORT_OF_ENTRY_FIELDS = (lang, handleFieldChange, langCode) => {
  const uniqueFields = [
    {
      type: "select",
      label: lang.t("hotel.label"),
      property: "stayingAtHotel",
      onChange: handleFieldChange("stayingAtHotel"),
      choices: HOTEL_KEYS.map((r) => ({
        label: lang.t(`hotel.${r}`),
        value: r,
      })),
    },
    {
      type: "text",
      label: lang.t("hotelOther"),
      property: "hotelOther",
      onChange: handleFieldChange("hotelOther"),
    },

    {
      type: "text",
      label: lang.t("flightNumber"),
      property: "flightNumber",
      onChange: handleFieldChange("flightNumber"),
    },
    {
      type: "text",
      label: lang.t("seatNumber"),
      property: "seatNumber",
      onChange: handleFieldChange("seatNumber"),
    },
    {
      type: "select",
      label: lang.t("travelFromCountry"),
      property: "travelFromCountry",
      onChange: handleFieldChange("travelFromCountry"),
      choices: COUNTRY_KEYS.map((r) => ({
        label: lang.t(`country.value.${r}`),
        value: r,
      })),
    },
    {
      type: "select",
      label: lang.t("finalTransitCountry"),
      property: "finalTransitCountry",
      onChange: handleFieldChange("finalTransitCountry"),
      choices: COUNTRY_KEYS.map((r) => ({
        label: lang.t(`country.value.${r}`),
        value: r,
      })),
    },
    {
      type: "text",
      label: lang.t("source"),
      property: "source",
      onChange: handleFieldChange("source"),
    },
  ];
  var Fields = COMMON_FIELDS(lang, handleFieldChange, langCode);
  uniqueFields.map((field) => Fields.push(field));

  return Fields;
};

export default PORT_OF_ENTRY_FIELDS;
