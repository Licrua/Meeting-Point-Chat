import { useDispatch } from 'react-redux';
import { setAddToggler } from '@slices/popUpSlice';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ChannelsHeader = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div>
      <p className="d-flex mt-3 pt-1  justify-content-around">
        <i>{t('channels')}</i>
        <motion.button
          whileHover={{ scale: 2, rotate: 360 }}
          type="button"
          onClick={() => dispatch(setAddToggler(true))}
          style={{
            border: 'none',
            background: 'transparent',
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
        >
          <span className="fs-4 lh-1">{'\u2295'}</span>
        </motion.button>
        <span className="visually-hidden">+</span>
      </p>
      <div className="border border-1" />
    </div>
  );
};
export default ChannelsHeader;
