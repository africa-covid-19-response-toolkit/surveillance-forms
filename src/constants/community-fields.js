import { nameValidator, ageValidator } from "../validation/form/community";
import {
  OCCUPATION_KEYS,
  SEX_VALUE,
  COUNTRY_KEYS,
  REGION_KEYS,
} from "./common";

const COMMUNITY_FIELDS = (lang, handleFieldChange) => {
  return [
    {
      type: "text",
      label: lang.t("firstName"),
      property: "firstName",
      focus: false,
      onChange: handleFieldChange("firstName"),
      onValidate: nameValidator.validate,
      validationErrorMsg: lang.t(nameValidator.validationErrorMsg),
    },
    {
      type: "text",
      label: lang.t("middleName"),
      property: "middleName",
      focus: false,
      onChange: handleFieldChange("middleName"),
      onValidate: nameValidator.validate,
      validationErrorMsg: lang.t(nameValidator.validationErrorMsg),
    },
    {
      type: "text",
      label: lang.t("lastName"),
      property: "lastName",
      onChange: handleFieldChange("lastName"),
      onValidate: nameValidator.validate,
      validationErrorMsg: lang.t(nameValidator.validationErrorMsg),
    },
    {
      type: "number",
      label: lang.t("age"),
      property: "age",
      onChange: handleFieldChange("age"),
      onValidate: ageValidator.validate,
      validationErrorMsg: lang.t(ageValidator.validationErrorMsg),
    },
    {
      type: "select",
      label: lang.t("sex.label"),
      property: SEX_VALUE.property,
      onChange: handleFieldChange(SEX_VALUE.property),
      choices: [
        { label: lang.t("sex.female"), value: SEX_VALUE.female },
        { label: lang.t("sex.male"), value: SEX_VALUE.male },
      ],
    },
    {
      type: "text",
      label: lang.t("phoneNumber"),
      property: "phoneNumber",
      onChange: handleFieldChange("phoneNumber"),
    },
    {
      type: "select",
      label: lang.t("language.label"),
      property: "language",
      onChange: handleFieldChange("language"),
      choices: [
        { label: lang.t("language.amharic"), value: "am" },
        { label: lang.t("language.oromo"), value: "or" },
      ],
    },
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
      type: "select",
      label: lang.t("country.label"),
      property: "country",
      choices: COUNTRY_KEYS.map((c) => ({
        label: lang.t(`country.${c}`),
        value: c,
      })),
      onChange: handleFieldChange("country"),
    },
    {
      type: "select",
      label: lang.t("region.label"),
      property: "region",
      choices: REGION_KEYS.map((r) => ({
        label: lang.t(`region.${r}`),
        value: r,
      })),
      onChange: handleFieldChange("region"),
    },
    {
      type: "text",
      label: lang.t("city"),
      property: "city",
      onChange: handleFieldChange("city"),
    },
    {
      type: "text",
      label: lang.t("postalCode"),
      property: "postalCode",
      onChange: handleFieldChange("postalCode"),
    },
    {
      type: "text",
      label: lang.t("street"),
      property: "street",
      onChange: handleFieldChange("street"),
    },
    {
      type: "text",
      label: lang.t("building"),
      property: "building",
      onChange: handleFieldChange("building"),
    },
    {
      type: "check",
      label: lang.t("fever"),
      property: "fever",
      onChange: handleFieldChange("fever"),
    },
    {
      type: "check",
      label: lang.t("cough"),
      property: "cough",
      onChange: handleFieldChange("cough"),
    },
    {
      type: "check",
      label: lang.t("fatigue"),
      property: "fatigue",
      onChange: handleFieldChange("fatigue"),
    },
    {
      type: "check",
      label: lang.t("shortnessOfBreath"),
      property: "shortnessOfBreath",
      onChange: handleFieldChange("shortnessOfBreath"),
    },
    {
      type: "check",
      label: lang.t("headache"),
      property: "headache",
      onChange: handleFieldChange("headache"),
    },

    {
      type: "check",
      label: lang.t("runnyNose"),
      property: "runnyNose",
      onChange: handleFieldChange("runnyNose"),
    },
    {
      type: "check",
      label: lang.t("feelingUnwell"),
      property: "feelingUnwell",
      onChange: handleFieldChange("feelingUnwell"),
    },
    {
      type: "check",
      label: lang.t("chronicLungDisease"),
      property: "chronicLungDisease",
      onChange: handleFieldChange("chronicLungDisease"),
    },

    {
      type: "check",
      label: lang.t("heartDisease"),
      property: "heartDisease",
      onChange: handleFieldChange("heartDisease"),
    },

    {
      type: "check",
      label: lang.t("heartDisease"),
      property: "heartDisease",
      onChange: handleFieldChange("heartDisease"),
    },

    {
      type: "check",
      label: lang.t("liverDisease"),
      property: "liverDisease",
      onChange: handleFieldChange("liverDisease"),
    },
    {
      type: "check",
      label: lang.t("renalDisease"),
      property: "renalDisease",
      onChange: handleFieldChange("renalDisease"),
    },

    {
      type: "check",
      label: lang.t("autoimmuneDisease"),
      property: "autoimmuneDisease",
      onChange: handleFieldChange("autoimmuneDisease"),
    },

    {
      type: "check",
      label: lang.t("cancer"),
      property: "cancer",
      onChange: handleFieldChange("cancer"),
    },

    {
      type: "check",
      label: lang.t("diabetes"),
      property: "diabetes",
      onChange: handleFieldChange("diabetes"),
    },

    {
      type: "check",
      label: lang.t("hiv"),
      property: "hiv",
      onChange: handleFieldChange("hiv"),
    },

    {
      type: "check",
      label: lang.t("pregnancy"),
      property: "pregnancy",
      onChange: handleFieldChange("pregnancy"),
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
      label: lang.t("contactWithSuspected"),
      property: "contactWithSuspected",
      onChange: handleFieldChange("contactWithSuspected"),
      onLabel: lang.t("yes"),
      offLabel: lang.t("no"),
    },
    {
      type: "switch",
      label: lang.t("contactWithConfirmed"),
      property: "contactWithConfirmed",
      onChange: handleFieldChange("contactWithConfirmed"),
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
};

export default COMMUNITY_FIELDS;
