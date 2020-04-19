import React from "react";
import { storiesOf } from "@storybook/react";
import CommunityForm from "./CommunityForm";
import Ployglot from "node-polyglot";
import en from "../../modules/lang/phrases_en";
import am from "../../modules/lang/phrases_am";

const langEn = new Ployglot({ locale: "en", phrases: en });
const langAm = new Ployglot({ locale: "am", phrases: am });

const onSubmit = async (formValues) => {
  console.log("onSubmit", formValues);
  return Promise.resolve(1);
};

storiesOf("Community Form", module)
  .add("the form - english", () => {
    return (
      <CommunityForm onSubmit={onSubmit} lang={langEn} langCode={langCode} />
    );
  })
  .add("the form - amharic", () => {
    return (
      <CommunityForm onSubmit={onSubmit} lang={langAm} langCode={langCode} />
    );
  });
