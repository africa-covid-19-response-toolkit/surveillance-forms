import { COMMON_FIELDS } from "./common-fields";
const COMMUNITY_FIELDS = (lang, handleFieldChange) => {
  const uniquefield = {
    type: "select",
    label: lang.t("language.label"),
    property: "language",
    onChange: handleFieldChange("language"),
    choices: [
      { label: lang.t("language.amharic"), value: "am" },
      { label: lang.t("language.oromo"), value: "or" },
    ],
  };
  var Fields = COMMON_FIELDS(lang, handleFieldChange);

  Fields.push(uniquefield);
  return Fields;
};

export default COMMUNITY_FIELDS;
