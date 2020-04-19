import { emailValidator } from "../validation/form/portOfEntry";

import { COUNTRY_KEYS, NATIONALITY_KEYS, LANGUAGES_KEYS } from "./common";
import { COMMON_FIELDS } from "./common-fields";
const DEPENDENTS_ENTRY_FIELDS = (lang, handleFieldChange, langCode) => {
  const uniqueFields = [
    {
      type: "text",
      label: lang.t("flightNumber"),
      property: "flightNumber",
      onChange: handleFieldChange("flightNumber"),
    },

    {
      type: "select",
      label: lang.t("nationality.label"),
      property: "nationality",
      onChange: handleFieldChange("nationality"),
      choices: NATIONALITY_KEYS.map((n) => ({
        label: lang.t(`nationality.${n}`),
        value: n,
      })),
    },

    {
      type: "text",
      label: lang.t("seatNumber"),
      property: "seatNumber",
      onChange: handleFieldChange("seatNumber"),
    },
    {
      type: "select",
      label: lang.t("travelFrom"),
      property: "travelFrom",
      onChange: handleFieldChange("travelFrom"),
      choices: COUNTRY_KEYS.map((r) => ({
        label: lang.t(`country.${r}`),
        value: r,
      })),
    },
    {
      type: "select",
      label: lang.t("transitFrom"),
      property: "transitFrom",
      onChange: handleFieldChange("transitFrom"),
      choices: COUNTRY_KEYS.map((r) => ({
        label: lang.t(`country.${r}`),
        value: r,
      })),
    },
  ];
  var Fields = COMMON_FIELDS(lang, handleFieldChange);
  uniqueFields.map((field) => Fields.push(field));

  return Fields;
};

export default DEPENDENTS_ENTRY_FIELDS;
