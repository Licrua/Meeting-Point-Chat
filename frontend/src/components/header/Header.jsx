// import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useLocation, Link } from 'react-router-dom';
import HeaderSecondaryInfo from './HeaderSecondaryInfo';
import HeaderLanguageDropdown from './HeaderLanguageDropdown';
import HeaderTitle from './HeaderTitle';

const Header = () => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <Navbar expand="lg" className="bg-body-tertiary border rounded p-1">
      <Container
        fluid
        className="d-flex justify-content-between align-items-center"
      >
        <HeaderTitle />
        {location.pathname === '/' ? (
          <Link to="/login">
            <Button variant="primary">{t('exit')}</Button>
          </Link>
        ) : (
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" />
              <Nav>
                <HeaderLanguageDropdown />
                <HeaderSecondaryInfo />
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
};
export default Header;
