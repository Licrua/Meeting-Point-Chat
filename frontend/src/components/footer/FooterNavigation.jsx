import { Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import navLinks from '@data/footer/footerNavLinks';
import { motion } from 'framer-motion';

const FooterNavigation = () => {
  const { t } = useTranslation();

  return (
    <Nav className="d-flex justify-content-center ">
      {navLinks.map((item) => (
        <Nav.Link
          as={motion.a}
          initial={{
            scale: 1,
            textDecoration: 'none',
            textUnderlineOffset: '0px',
          }}
          whileHover={{
            scale: 1.3,
            textDecoration: 'underline',
            textUnderlineOffset: '7px',
          }}
          className="text-secondary"
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
          href={item.path}
        >
          {t(item.label)}
        </Nav.Link>
      ))}
    </Nav>
  );
};

export default FooterNavigation;
