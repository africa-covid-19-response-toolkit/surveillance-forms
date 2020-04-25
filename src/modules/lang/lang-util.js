import { merge } from "lodash";
import en from "../../config/lang-phrases/phrases_en";
import am from "../../config/lang-phrases/phrases_am";

// Add languages packs here for new a language support
const supportedLanguages = {
  en: {
    pack: en,
    name: "english",
  },
  am: {
    pack: am,
    name: "amharic",
  },
};

const DEFAULT_LANGUAGE_CODE = "en";

const DEFAULT_LANGUAGE_PACK = supportedLanguages[DEFAULT_LANGUAGE_CODE].pack;

const getLanguagesByCode = (code) => {
  if (code === DEFAULT_LANGUAGE_CODE) {
    return DEFAULT_LANGUAGE_PACK;
  }
  const merged = {};
  const languagePack = supportedLanguages[code].pack || DEFAULT_LANGUAGE_PACK;
  merge(merged, DEFAULT_LANGUAGE_PACK, languagePack);

  return merged;
};
// Get supported lanauges
// translation is also done here
const getSupportedLanguages = (lang) => {
  var languages = [];

  Object.keys(supportedLanguages).forEach(function(key) {
    languages.push({
      value: key,
      label: lang.t("preferredLanguage." + supportedLanguages[key].name),
    });
  });
  return languages;
};

export default { getLanguagesByCode, getSupportedLanguages };
