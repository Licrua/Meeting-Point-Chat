import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styles from '@styles/Auth.module.scss';

const GeneralAuthContainer = ({ children }) => {
  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0, y: -100 }}
      whileHover={{
        boxShadow: '0 0px 10px 10px rgba(156, 156, 156, 0.6)',
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 1 }}
      className={styles.authorization_container}
    >
      {children}
    </Container>
  );
};
export default GeneralAuthContainer;
