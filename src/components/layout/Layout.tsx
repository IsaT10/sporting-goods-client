import { Outlet } from 'react-router-dom';
import Nav from '../shared/Nav';
import Footer from '../shared/Footer';

export default function Layout() {
  return (
    <>
      <Nav />
      <div className='h-screen'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
