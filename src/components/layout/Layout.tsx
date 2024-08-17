import { Outlet } from 'react-router-dom';
import Nav from '../shared/Nav';
import Footer from '../shared/Footer';

export default function Layout() {
  return (
    <>
      <Nav />
      <div className='min-h-screen mt-16 md:mt-20 '>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
