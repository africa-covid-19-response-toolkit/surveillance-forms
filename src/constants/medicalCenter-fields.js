import { NATIONALITY_KEYS, CALLERTYPE_KEYS } from "./common";
import { COMMON_FIELDS } from "./common-fields";
import { OCCUPATION_KEYS } from "./common";
import { emailValidator } from "../validation/form/medical";

const MEDICAL_FIELDS = (lang, handleFieldChange, langCode, formValues) => {
  const uniqueFields = [
    {
      type: "select",
      label: lang.t("occupation.label"),
      property: "occupation",
      onChange: handleFieldChange("occupation"),
      choices: OCCUPATION_KEYS.map((r) => ({
        label: lang.t(`occupation.${r}`),
        value: r,
      })),
    },
    {
      type: "text",
      label: lang.t("occupationOther"),
      property: "occupationOther",
      onChange: handleFieldChange("occupationOther"),
    },
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
    {
      type: "switch",
      label: lang.t("travelHistory"),
      property: "travelHx",
      onChange: handleFieldChange("travelHx"),
      onLabel: lang.t("yes"),
      offLabel: lang.t("no"),
    },

    {
      type: "switch",
      label: lang.t("healthFacility"),
      property: "healthFacility",
      onChange: handleFieldChange("healthFacility"),
      onLabel: lang.t("yes"),
      offLabel: lang.t("no"),
    },
  ];
  var Fields = COMMON_FIELDS(lang, handleFieldChange);

  uniqueFields.map((field) => Fields.push(field));
  return Fields;
};

export default MEDICAL_FIELDS;
