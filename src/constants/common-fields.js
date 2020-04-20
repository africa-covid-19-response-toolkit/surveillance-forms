import { nameValidator, ageValidator } from "../validation/form/community";
import {
  GENDER_VALUE,
  COUNTRY_KEYS,
  REGION_KEYS,
  OCCUPATION_KEYS,
  NATIONALITY_KEYS,
  LANGUAGES_KEYS,
} from "./common";
import { emailValidator } from "../validation/form/medical";
const COMMON_FIELDS = (lang, handleFieldChange, langCode) => {
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
      type: "date",
      label: lang.t("dateOfBirth"),
      property: "dateOfBirth",
      langCode: langCode,
      onChange: handleFieldChange("dateOfBirth"),
    },

    {
      type: "select",
      label: lang.t("gender.label"),
      property: GENDER_VALUE.property,
      onChange: handleFieldChange(GENDER_VALUE.property),
      choices: [
        { label: lang.t("gender.female"), value: GENDER_VALUE.female },
        { label: lang.t("gender.male"), value: GENDER_VALUE.male },
      ],
    },
    {
      type: "select",
      label: lang.t("preferredLanguage.label"),
      property: "preferredLanguage",
      onChange: handleFieldChange("preferredLanguage"),
      choices: LANGUAGES_KEYS.map((l) => ({
        label: lang.t(`preferredLanguage.${l}`),
        value: l,
      })),
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
      type: "text",
      label: lang.t("occupationOther"),
      property: "occupationOther",
      onChange: handleFieldChange("occupationOther"),
    },
    {
      type: "text",
      label: lang.t("passportNumber"),
      property: "passportNumber",
      onChange: handleFieldChange("passportNumber"),
    },
    {
      type: "text",
      label: lang.t("governmentIssuedId"),
      property: "governmentIssuedId",
      onChange: handleFieldChange("governmentIssuedId"),
    },

    {
      type: "text",
      label: lang.t("phoneNumber"),
      property: "phoneNumber",
      onChange: handleFieldChange("phoneNumber"),
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
      type: "text",
      label: lang.t("email"),
      property: "email",
      onChange: handleFieldChange("email"),
      onValidate: emailValidator.validate,
      validationErrorMsg: lang.t(emailValidator.validationErrorMsg),
    },
    {
      type: "switch",
      label: lang.t("hasRecentlyTraveled"),
      property: "hasRecentlyTraveled",
      onChange: handleFieldChange("hasRecentlyTraveled"),
      onLabel: lang.t("yes"),
      offLabel: lang.t("no"),
    },
    {
      type: "switch",
      label: lang.t("worksAtOrVisitedHealthFacility"),
      property: "worksAtOrVisitedHealthFacility",
      onChange: handleFieldChange("worksAtOrVisitedHealthFacility"),
      onLabel: lang.t("yes"),
      offLabel: lang.t("no"),
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
  ];
};

export { COMMON_FIELDS };
