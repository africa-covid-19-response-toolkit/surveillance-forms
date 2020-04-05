import { decorate, observable, action } from "mobx";
import Ployglot from "node-polyglot";
import getLangaugeByCode from "./lang-util";

const getPolygotInstance = (languageCode) => {
  const languagePack = getLangaugeByCode(languageCode);
  const polyglot = new Ployglot({
    locale: languageCode,
    phrases: languagePack,
  });

  return polyglot;
};

class LanguageStore {
  langCode = "en";
  lang = getPolygotInstance(this.langCode);

  async setLanguage(languageCode) {
    this.landCode = languageCode;
    this.lang = getPolygotInstance(languageCode);
  }
}

decorate(LanguageStore, {
  lang: observable,
  setLanguage: action,
});

export default new LanguageStore();
