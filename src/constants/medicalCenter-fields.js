import { CALLERTYPE_KEYS } from "./common-keys";
import { COMMON_FIELDS } from "./common-fields";

const MEDICAL_FIELDS = (lang, handleFieldChange, langCode, formValues) => {
  const uniqueFields = [
    {
      type: "select",
      label: lang.t("callerType.label"),
      property: "callerType",
      onChange: handleFieldChange("callerType"),
      choices: CALLERTYPE_KEYS.map((r) => ({
        label: lang.t(`callerType.${r}`),
        value: r,
      })),
    },
    {
      type: "date",
      label: lang.t("callDate"),
      property: "callDate",
      langCode: langCode,
      onChange: handleFieldChange("callDate"),
    },
  ];
  var Fields = COMMON_FIELDS(lang, handleFieldChange);

  uniqueFields.map((field) => Fields.push(field));
  return Fields;
};

export default MEDICAL_FIELDS;
