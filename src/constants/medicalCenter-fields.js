import { NATIONALITY_KEYS, CALLERTYPE_KEYS } from "./common";
import { COMMON_FIELDS } from "./common-fields";
import { emailValidator } from "../validation/form/medical";

const MEDICAL_FIELDS = (lang, handleFieldChange, langCode, formValues) => {
  const uniqueFields = [
    {
      type: "text",
      label: lang.t("email"),
      property: "email",
      onChange: handleFieldChange("email"),
      onValidate: emailValidator.validate,
      validationErrorMsg: lang.t(emailValidator.validationErrorMsg),
    },
    {
      type: "text",
      label: lang.t("receiverName"),
      property: "receiverName",
      onChange: handleFieldChange("receiverName"),
    },
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
    {
      type: "select",
      label: lang.t("nationality.label"),
      property: "nationality",
      onChange: handleFieldChange("nationality"),
      choices: NATIONALITY_KEYS.map((r) => ({
        label: lang.t(`nationality.${r}`),
        value: r,
      })),
    },
  ];
  var Fields = COMMON_FIELDS(lang, handleFieldChange);

  uniqueFields.map((field) => Fields.push(field));
  return Fields;
};

export default MEDICAL_FIELDS;
