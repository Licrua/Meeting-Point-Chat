import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from '@styles/Auth.module.scss';

const GeneralAuthFooter = ({ text, transferPage, transferLink }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="hr-custom-line" />
      <div className={styles.link_container}>
        {t(`${text}`)}
        <Link className={styles.link_to_signup} to={`/${transferPage}`}>
          {t(`${transferLink}`)}.
        </Link>
      </div>
    </>
  );
};

export default GeneralAuthFooter;
