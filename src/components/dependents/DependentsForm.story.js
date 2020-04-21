import React from "react";
import { storiesOf } from "@storybook/react";
import DependentsForm from "./DependentsForm";
import Ployglot from "node-polyglot";
import en from "../../modules/lang/phrases_en";
import am from "../../modules/lang/phrases_am";

const langEn = new Ployglot({ locale: "en", phrases: en });
const langAm = new Ployglot({ locale: "am", phrases: am });

const onSubmit = (formValues) => {
  console.log("onSubmit", formValues);
};

storiesOf("Dependents Form", module)
  .add("the form - english", () => {
    return <DependentsForm onSubmit={onSubmit} lang={langEn} />;
  })
  .add("the form - amharic", () => {
    return <DependentsForm onSubmit={onSubmit} lang={langAm} />;
  });
