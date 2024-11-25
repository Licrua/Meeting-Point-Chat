import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import App from '../components/App';
import en from '../locales/en.json';
import ru from '../locales/ru.json';

const init = async () => {
  //   const i18n = i18next.createInstance();

  const resources = {
    en: {
      translation: en,
    },
    ru: {
      translation: ru,
    },
  };

  try {
    await i18next.use(initReactI18next).init({
      resources,
      debug: true,
      fallbackLng: 'ru',
      interpolation: {
        escapeValue: false,
      },
    });

    // Установка i18n в глобальную область видимости (при необходимости)
    // window.i18n = i18n;
  } catch (error) {
    console.error('Ошибка инициализации i18n:', error);
  }

  return (
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  );
};

export default init;
