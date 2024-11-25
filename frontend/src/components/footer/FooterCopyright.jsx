import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const FooterCopyright = () => {
  const { t } = useTranslation('');
  return (
    <Row>
      <Col className="d-flex w-100 justify-content-center">
        <p className="m-0">{t('footer.copyright')}</p>
      </Col>
    </Row>
  );
};

export default FooterCopyright;
