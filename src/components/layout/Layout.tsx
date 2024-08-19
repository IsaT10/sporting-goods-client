import { Outlet, useLocation } from 'react-router-dom';
import Nav from '../shared/Nav';
import Footer from '../shared/Footer';

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <Nav />
      <div
        className={`min-h-screen ${
          location.pathname !== '/' ? 'mt-16 md:mt-20' : ''
        } `}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
