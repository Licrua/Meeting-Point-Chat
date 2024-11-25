import { Navbar, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';

const FooterSocialNovbar = ({ socialIcons }) => {
  return (
    <Row>
      <address>
        <Navbar
          bg="light"
          expand="lg"
          className="d-flex  justify-content-center"
        >
          {socialIcons.map((item) => (
            <Navbar.Brand target="_blank" key={item.id} href={item.href}>
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.5 }}
                src={item.src}
                alt={item.alt}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          ))}
        </Navbar>
      </address>
    </Row>
  );
};
export default FooterSocialNovbar;
