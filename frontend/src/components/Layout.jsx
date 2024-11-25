import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';

const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-light border mt-3 border-1 p-2 d-flex justify-content-center">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
