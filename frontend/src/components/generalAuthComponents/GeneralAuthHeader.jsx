import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const GeneralAuthHeader = ({ translation }) => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        // className={styles.header}
      >
        <motion.h1
          initial={{ width: 0, opacity: 0, y: -200 }}
          animate={{ width: '100%', opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className={` d-flex justify-content-center`}
        >
          {t(`${translation}`)}
        </motion.h1>
      </div>
      <div className="hr-custom-line" />
    </>
  );
};

export default GeneralAuthHeader;
