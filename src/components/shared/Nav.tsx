import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Cart, NavClose, NavOpen } from '../Icons';
import { Button } from '../ui/button';
import Container from '../Container';
import { useAppSelector } from '@/redux/hooks';
import { useCartItems } from '@/hooks/useCartItems';

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
  const location = useLocation();

  const { cartItems } = useCartItems();

  const scrollThreshold = window.innerWidth < 768 ? 150 : 300;
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);

    if (currentScrollY > scrollThreshold && currentScrollY > prevScrollY) {
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
      className={`transition-all duration-300 ${
        location.pathname === '/' ? 'bg-transparent' : 'bg-white shadow-md'
      } fixed left-0 bg- right-0 z-50 py-3 md:py-5 ${
        scrollY >= scrollThreshold ? 'shadow-md bg-white' : ''
      } ${navVisible ? 'top-0' : '-top-full'}`}
    >
      <Container>
        <div className='flex justify-between items-center'>
          <Link to='/' className='flex items-center gap-3'>
            <h2 className='md:text-3xl text-xl font-bold text-brightOrange'>
              GearPro
            </h2>
          </Link>
          <ul className='hidden md:flex  gap-4 lg:gap-6'>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `py-2.5 font-medium rounded-md hover:text-brightOrange  cursor-pointer duration-150 ${
                    isActive
                      ? 'text-brightOrange'
                      : location.pathname === '/' && scrollY <= scrollThreshold
                      ? ' text-white'
                      : 'text-stone-900'
                  } hover:text-tertiaryColor`
                }
              >
                <li>{item.label}</li>
              </NavLink>
            ))}

            <Link
              to='/cart'
              className='relative py-2.5 px-3 border bg-white rounded-full'
            >
              <Cart />
              <span className='absolute -top-1 -right-2 bg-brightOrange rounded-full py-[.5px] px-[6px] text-[11px]  text-white'>
                {cartItems?.length}
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
            className={`fixed md:hidden left-0 top-0 bottom-0 w-full h-screen bg-offWhite z-50 transition-transform duration-500 ${
              nav ? '-translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className='flex justify-between items-center p-[13px] lg:p-4'>
              <Link
                to='/'
                onClick={() => setNav(false)}
                className='flex items-center gap-3'
              >
                <h2 className='md:text-3xl text-xl font-bold text-brightOrange'>
                  GearPro
                </h2>
              </Link>
              <div onClick={handleNav} className='cursor-pointer'>
                <NavClose />
              </div>
            </div>

            <ul className='  flex flex-col items-start text-[13px] '>
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  onClick={() => setNav(false)}
                  to={item.to}
                  className={({ isActive }) =>
                    `px-4 py-3 text-stone-900 rounded-md cursor-pointer duration-300 leading-[18px] font-semibold ${
                      isActive ? 'text-black' : 'text-[#698898]'
                    } `
                  }
                >
                  <li>{item.label}</li>
                </NavLink>
              ))}

              <Link
                to='/cart'
                onClick={() => setNav(false)}
                className='relative pl-4 pb-3 pt-1.5 mt-1'
              >
                <Cart />
                <span className='absolute top-0 -right-3 bg-brightOrange rounded-full py-[.5px] px-[5px] text-[10px]  text-white'>
                  {cartItems?.length}
                </span>
              </Link>
            </ul>
            {/* <ul className='mt-4 flex flex-col items-start text-[13px] sm:text-base'>
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
            </ul> */}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Nav;
