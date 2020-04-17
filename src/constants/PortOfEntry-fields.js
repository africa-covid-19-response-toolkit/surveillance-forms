import {
    nameValidator,
    ageValidator,
    emailValidator,
    nameMaxLengthValidator,
  } from "../validation/form/portOfEntry";

import {
    SEX_VALUE,
    HOTEL_KEYS,
    OCCUPATION_KEYS
} from "./common"

  const PORT_OF_ENTRY_FIELDS = (lang, handleFieldChange) => { return [
    {
      type: "text",
      label: lang.t("firstName"),
      property: "firstName",
      focus: true,
      onChange: handleFieldChange("firstName"),
      onValidate: nameValidator.validate,
      validationErrorMsg: lang.t(nameValidator.validationErrorMsg),
    },
    {
      type: "text",
      label: lang.t("middleName"),
      property: "middleName",
      onChange: handleFieldChange("middleName"),
      onValidate: nameMaxLengthValidator.validate,
      validationErrorMsg: lang.t(nameMaxLengthValidator.validationErrorMsg),
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
      label: lang.t("email"),
      property: "email",
      onChange: handleFieldChange("email"),
      onValidate: emailValidator.validate,
      validationErrorMsg: lang.t(emailValidator.validationErrorMsg),
    },
    {
      type: "text",
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
      type: "select",
      label: lang.t("nationality.label"),
      property: "nationality",
      onChange: handleFieldChange("nationality"),
      choices: [
        { label: lang.t("nationality.ethiopian"), value: "ET" }, //placeholder
        { label: lang.t("nationality.other"), value: "other" },
      ],
    },
    {
      type: "text",
      label: lang.t("passportNumber"),
      property: "passportNo",
      onChange: handleFieldChange("passportNo"),
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
      type: "text",
      label: lang.t("phoneNumber"),
      property: "phoneNumber",
      onChange: handleFieldChange("phoneNumber"),
    },
    {
      type: "select",
      label: lang.t("travelFrom"),
      property: "travelFrom",
      onChange: handleFieldChange("travelFrom"),
      choices: [
        { label: "country 1", value: "1" }, //placeholder
        { label: "country 2", value: "2" },
      ],
    },
    {
      type: "select",
      label: lang.t("transitFrom"),
      property: "transitFrom",
      onChange: handleFieldChange("transitFrom"),
      choices: [
        { label: "country 1", value: "1" }, //placeholder
        { label: "country 2", value: "2" },
      ],
    },
    {
      type: "select",
      label: lang.t("hotel.label"),
      property: "hotelName",
      onChange: handleFieldChange("hotelName"),
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
      label: lang.t("seatNumber"),
      property: "seatNumber",
      onChange: handleFieldChange("seatNumber"),
    },
    {
      type: "text",
      label: lang.t("flightNumber"),
      property: "flightNumber",
      onChange: handleFieldChange("flightNumber"),
    },

    {
      type: "check",
      label: lang.t("chronicLungDisease"),
      property: "chronicLungDisease",
      onChange: handleFieldChange("chronicLungDisease"),
    },
    {
      type: "check",
      label: lang.t("fever"),
      property: "fever",
      onChange: handleFieldChange("fever"),
    },
    {

      type: 'check',
      label: lang.t('fatigue'),
      property: 'fatigue',
      onChange: handleFieldChange('fatigue')
    },
    {
      type: 'check',
      label: lang.t('cough'),
      property: 'cough',
      onChange: handleFieldChange('cough')
    },
    {
      type: 'check',
      label: lang.t('shortnessOfBreath'),
      property: 'shortnessOfBreath',
      onChange: handleFieldChange('shortnessOfBreath')
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
      label: lang.t("shortnessOfBreath"),
      property: "shortnessOfBreath",
      onChange: handleFieldChange("shortnessOfBreath"),
    },
  ]};


  export default PORT_OF_ENTRY_FIELDS;
