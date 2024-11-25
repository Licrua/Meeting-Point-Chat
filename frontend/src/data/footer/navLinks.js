import i18n from 'i18next';

const navLinks = [
  {
    path: 'https://github.com/Licrua',
    label: i18n.t('footer.author'),
    id: 0,
  },
  {
    path: 'https://github.com/Licrua/react-chat',
    label: i18n.t('footer.project'),
    id: 1,
  },
  {
    path: 'https://github.com/Licrua#%D1%81%D0%B2%D1%8F%D0%B7%D1%8C-%D1%81%D0%BE-%D0%BC%D0%BD%D0%BE%D0%B9',
    label: i18n.t('footer.contacts'),
    id: 2,
  },
];

export default navLinks;
