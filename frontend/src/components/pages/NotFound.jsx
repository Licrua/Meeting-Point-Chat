import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import notFoundImage from '@images/icons/journal-error-man-holding-a-warning-sign.png';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Container>
      <Row>
        <Col className="d-flex m-2 flex-column justify-content-center align-items-center">
          <Image src={notFoundImage} />
          <h1>{t('notFoundPage.notFoundHeader')}</h1>
          <p>{t('notFoundPage.notFoundText')}</p>
          <Button onClick={() => navigate('home')}>
            {t('notFoundPage.notFoundReturnLink')}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default NotFound;
