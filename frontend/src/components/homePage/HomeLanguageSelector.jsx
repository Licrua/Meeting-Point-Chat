import { useTranslation } from 'react-i18next';
import changeLanguageHandler from '@utils/changeLanguage';
import { DropdownButton, NavDropdown } from 'react-bootstrap';

const HomeLanguageSelector = () => {
  const { t } = useTranslation();
  return (
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <NavDropdown.Item onClick={() => changeLanguageHandler('ru')}>
        {t('languages.ru')}
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item onClick={() => changeLanguageHandler('en')}>
        {t('languages.en')}
      </NavDropdown.Item>
    </DropdownButton>
  );
};

export default HomeLanguageSelector;
