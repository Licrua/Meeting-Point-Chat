import i18next from 'i18next';

const changeLanguageHandler = (lang) => {
  i18next.changeLanguage(lang);
};

export default changeLanguageHandler;
