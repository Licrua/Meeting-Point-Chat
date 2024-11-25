import { Container } from 'react-bootstrap';
import SocialMediaIcons from '@data/footer/icons';
import FooterCopyright from './FooterCopyright';
import FooterSocialNovbar from './FooterSocialNovbar';
import FooterNavigation from './FooterNavigation';

const Footer = () => {
  return (
    <Container fluid>
      <FooterNavigation />
      <FooterSocialNovbar socialIcons={SocialMediaIcons} />
      <FooterCopyright />
    </Container>
  );
};

export default Footer;
