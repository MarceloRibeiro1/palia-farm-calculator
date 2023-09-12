import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import pt_br from './pt/pt_br.json';

void i18next.use(initReactI18next).init({
  interpolation: {
    escapeValue: false,
  },
  debug: false,
  lng: 'pt',
  returnNull: false,
  returnEmptyString: true,
  resources: {
    pt: {
      translation: pt_br,
    },
  },
});

export default i18next;
