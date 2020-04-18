import { decorate, observable, action } from "mobx";
import Ployglot from "node-polyglot";
import langUtil from "./lang-util";

const getPolygotInstance = (languageCode) => {
  const languagePack = langUtil.getLanguagesByCode(languageCode);

  const polyglot = new Ployglot({
    locale: languageCode,
    phrases: languagePack,
  });

  return polyglot;
};

class LanguageStore {
  langCode = "en";
  lang = getPolygotInstance(this.langCode);

  setLanguage(languageCode) {
    this.langCode = languageCode;
    this.lang = getPolygotInstance(languageCode);
  }
}

decorate(LanguageStore, {
  lang: observable,
  langCode: observable,
  setLanguage: action,
});

export default new LanguageStore();
