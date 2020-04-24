import { COMMON_FIELDS } from "./common-fields";
const DEPENDENTS_ENTRY_FIELDS = (lang, handleFieldChange, langCode) => {
  const uniqueFields = [
    {
      type: "text",
      label: lang.t("relationshipToPassenger"),
      property: "relationshipToPassenger",
      onChange: handleFieldChange("relationshipToPassenger"),
    },

    {
      type: "text",
      label: lang.t("seatNumber"),
      property: "seatNumber",
      onChange: handleFieldChange("seatNumber"),
    },
  ];
  var Fields = COMMON_FIELDS(lang, handleFieldChange, langCode);
  uniqueFields.map((field) => Fields.push(field));

  return Fields;
};

export default DEPENDENTS_ENTRY_FIELDS;
