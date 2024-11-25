import { NavDropdown } from 'react-bootstrap';
import { motion } from 'framer-motion';
import secondaryInfoIcon from '@assets/icons/headerIcons/icons8-contact-info-96.png';
import { useTranslation } from 'react-i18next';

const HeaderSecondaryInfo = () => {
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
          src={secondaryInfoIcon}
          alt="secondary_info_icon"
        />
      }
      id="basic-nav-dropdown"
    >
      <NavDropdown.Item
        href="https://github.com/Licrua/react-chat"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('instruction')}
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default HeaderSecondaryInfo;
