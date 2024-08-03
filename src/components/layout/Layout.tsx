import { Outlet } from 'react-router-dom';
import Nav from '../shared/Nav';
import Footer from '../shared/Footer';

export default function Layout() {
  return (
    <>
      <Nav />
      <div className='min-h-screen mt-20 md:mt-24'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
