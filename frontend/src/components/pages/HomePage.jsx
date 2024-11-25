import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '@styles/Home.module.scss';
import HomeButton from '../homePage/HomeButton';
import HomeText from '../homePage/HomeText';
import HomeVideo from '../homePage/HomeVideo';

const HomePage = () => {
  const [isComponentVisible, setComponentVisible] = useState(false);
  const changeVisibilityHandler = () => setComponentVisible(true);

  return (
    <Container>
      <HomeVideo visibleHandler={changeVisibilityHandler} />
      <hr className={styles.home_custome_line} />
      <Row>
        {isComponentVisible && (
          <Col
            as={motion.div}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 2 }}
            initial={{ opacity: 0, y: -100 }}
            style={{ height: '100vh' }}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <HomeText />
            <HomeButton />
            <div className="hr-custom-line pb-4 d-flex" />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default HomePage;
