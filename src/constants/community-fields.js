import { COMMON_FIELDS } from "./common-fields";

const COMMUNITY_FIELDS = (lang, handleFieldChange, langcode) => {
  const uniqueFields = [
    {
      type: "text",
      label: lang.t("source"),
      property: "source",
      onChange: handleFieldChange("source"),
    },
  ];
  var Fields = COMMON_FIELDS(lang, handleFieldChange, langcode);
  uniqueFields.map((field) => Fields.push(field));

  return Fields;
};

export default COMMUNITY_FIELDS;
