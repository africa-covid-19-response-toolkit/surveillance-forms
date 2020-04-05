import {merge} from 'lodash';
import en from './phrases_en';
import am from './phrases_am';

const codeToLanguagePack = {
  en,
  am,
};

const DEFAULT_LANGUAGE_CODE = 'en';
const DEFAULT_LANGUAGE_PACK = codeToLanguagePack[DEFAULT_LANGUAGE_CODE];

const getLangaugeByCode = (code) => {
  if (code === DEFAULT_LANGUAGE_CODE) {
    return DEFAULT_LANGUAGE_PACK;
  }

  const merged = {};
  const languagePack = codeToLanguagePack[code] || DEFAULT_LANGUAGE_PACK;
  merge(merged, DEFAULT_LANGUAGE_PACK, languagePack);

  return merged;
};

export default getLangaugeByCode;
