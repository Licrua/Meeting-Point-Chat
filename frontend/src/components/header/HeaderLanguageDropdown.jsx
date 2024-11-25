import { NavDropdown } from 'react-bootstrap';
import { motion } from 'framer-motion';
import languageLogo from '@assets/icons/headerIcons/translator.png';
import { useTranslation } from 'react-i18next';
import changeLanguageHandler from '@utils/changeLanguage';

const HeaderLanguageDropdown = () => {
  const { t } = useTranslation();
  return (
    <NavDropdown
      align="end"
      className="mx-5"
      title={
        <motion.img
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          width="40"
          height="40"
          src={languageLogo}
          alt="language_img"
        />
      }
      id="basic-nav-dropdown"
    >
      <NavDropdown.Item
        href="#action/3.1"
        onClick={() => changeLanguageHandler('ru')}
      >
        {t('languages.ru')}
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item
        href="#action/3.2"
        onClick={() => changeLanguageHandler('en')}
      >
        {t('languages.en')}
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default HeaderLanguageDropdown;
