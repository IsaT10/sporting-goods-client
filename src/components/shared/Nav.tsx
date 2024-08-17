import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Cart, NavClose, NavOpen } from '../Icons';
import { Button } from '../ui/button';
import Container from '../Container';
import { useAppSelector } from '@/redux/hooks';

const navItems = [
  { to: '/about-us', label: 'About Us' },
  { to: '/all-products', label: 'All Products' },
  { to: '/manage-products', label: 'Manage Products' },
];

const Nav = () => {
  const [scrollY, setScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [navVisible, setNavVisible] = useState(true);
  const [nav, setNav] = useState(false);

  const cart = useAppSelector((state) => state.cart);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);

    if (currentScrollY > 300 && currentScrollY > prevScrollY) {
      setNavVisible(false); // Hide nav on scroll down
    } else {
      setNavVisible(true); // Show nav on scroll up
    }

    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav
      className={`transition-all duration-300 fixed left-0 bg-stone-200 right-0 z-50 py-3 md:py-5 ${
        scrollY >= 300 ? 'shadow-md ' : ''
      } ${navVisible ? 'top-0' : '-top-full'}`}
    >
      <Container>
        <div className='flex justify-between items-center'>
          <Link to='/' className='flex items-center gap-3'>
            <h2 className='md:text-3xl text-xl font-bold text-tertiaryColor'>
              GearPro
            </h2>
          </Link>
          <ul className='hidden md:flex gap-4 lg:gap-6'>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `py-2.5 font-medium rounded-md  cursor-pointer duration-150 ${
                    isActive ? 'text-black' : 'text-[#698898]'
                  } hover:text-tertiaryColor`
                }
              >
                <li>{item.label}</li>
              </NavLink>
            ))}

            <Link to='/cart' className='relative py-2.5'>
              <Cart />
              <span className='absolute top-0 -right-3 bg-orange-500 rounded-full py-[3px] px-2 text-xs font-semibold text-white'>
                {cart?.items?.length}
              </span>
            </Link>
          </ul>

          {/* Mobile Navigation Icon */}
          <div
            onClick={handleNav}
            className='block md:hidden z-50 cursor-pointer'
          >
            {nav ? <NavClose /> : <NavOpen />}
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`fixed left-0 top-0 bottom-0 w-full h-screen bg-red-100 z-50 transition-transform duration-500 ${
              nav ? '-translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className='flex justify-between items-center p-[13px] lg:p-4'>
              <Link
                to='/'
                onClick={() => setNav(false)}
                className='flex items-center gap-3'
              >
                <h2 className='md:text-3xl text-xl lg:text-4xl font-bold text-tertiaryColor'>
                  Nextgendevs
                </h2>
              </Link>
              <div onClick={handleNav} className='cursor-pointer'>
                <NavClose />
              </div>
            </div>
            <ul className='mt-4 flex flex-col items-start text-[13px] sm:text-base'>
              <li className='px-4 py-3 text-[#698898] rounded-md cursor-pointer duration-300 hover:text-tertiaryColor leading-[18px] font-semibold'>
                Courses
              </li>
              <li className='px-4 py-3 text-[#698898] rounded-md cursor-pointer duration-300 hover:text-tertiaryColor leading-[18px] font-semibold'>
                Student Outcomes
              </li>
              <li className='px-4 py-3 text-[#698898] rounded-md cursor-pointer duration-300 hover:text-tertiaryColor leading-[18px] font-semibold'>
                Curriculum
              </li>
              <li
                onClick={() => setNav(false)}
                className='px-4 py-3 text-[#698898] rounded-md cursor-pointer duration-300 hover:text-tertiaryColor leading-[18px] font-semibold'
              >
                <Link to='/contact'>Contact</Link>
              </li>
              <li className='mt-4'>
                <Link to='/register'>
                  <Button>Register</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Nav;
