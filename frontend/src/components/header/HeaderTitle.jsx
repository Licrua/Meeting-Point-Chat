import { useTranslation } from 'react-i18next';
import headerTitleImage from '@assets/icons/headerIcons/technical-support.png';
import { motion } from 'framer-motion';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeaderTitle = () => {
  const { t } = useTranslation();

  return (
    <Link to="/login">
      <Navbar.Brand className="d-flex flex-wrap align-items-center">
        <img
          alt="chat_header_icon"
          src={headerTitleImage}
          width="40"
          height="40"
          className="d-inline-block"
        />{' '}
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.2,
            paddingLeft: '10px',
            transition: { duration: 0.1 },
          }}
          animate={{
            color: ['#000000 ', '#ffffff', '#000000', '#ffffff'],
            textShadow:
              '-1px -1px 0 #00000000, 1px -1px 0 #00000000, -1px 1px 0 #00000000, 1px 1px 0 #0000002a',
          }}
          transition={{
            duration: 5,
            ease: 'linear',
            repeat: Infinity,
          }}
          className="ms-2 fw-italic"
        >
          {t('title')}
          <em>
            <div
              style={{
                fontSize: '0.6em',
              }}
            >
              {t('subTitle')}
            </div>
          </em>
        </motion.div>
      </Navbar.Brand>
    </Link>
  );
};
export default HeaderTitle;
