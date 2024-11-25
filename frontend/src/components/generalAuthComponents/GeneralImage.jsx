import { Col, Image } from 'react-bootstrap';

const GeneralImage = ({ image }) => {
  return (
    <Col className="d-flex justify-content-center align-items-center" xs={6}>
      <Image
        alt="authImg"
        style={{ maxWidth: '100%', height: 'auto' }}
        src={image}
      />
    </Col>
  );
};

export default GeneralImage;
