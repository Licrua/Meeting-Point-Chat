import { motion } from 'framer-motion';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';

const HomeText = () => {
  const { t } = useTranslation();

  const letters = Array.from(t('homePage.homePageText'), (char) => {
    return { value: char, id: _.uniqueId() };
  });

  return (
    <div style={{ textAlign: 'center' }}>
      {letters.map(({ value, id }) => (
        <motion.span
          className="text-white fs-2 pe-2 mb-2"
          key={id}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            boxShadow: '0px 4px 10px rgba(25, 141, 69, 0.5)',
          }}
          transition={{ duration: 0.5, delay: id * 0.1 }}
        >
          {value}
        </motion.span>
      ))}
      <motion.p
        initial={{ scale: 0, x: 0, y: 0 }}
        animate={{ scale: 1, x: 0, y: 10 }}
        style={{ letterSpacing: '5px' }}
        transition={{ duration: 1 }}
        className="fs-4 d-flex justify-content-center text-white"
      >
        {t('homePage.homePageDescription')}
      </motion.p>
    </div>
  );
};

export default HomeText;
