import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NavClose, NavOpen } from '../Icons';
import { Button } from '../ui/button';

const Nav = () => {
  const [scrollY, setScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [navVisible, setNavVisible] = useState(true);
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > prevScrollY) {
      setNavVisible(false); // Hide nav on scroll down
    } else {
      setNavVisible(true); // Show nav on scroll up
    }
    setPrevScrollY(scrollY);
  }, [scrollY]);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav
      className={`transition-all duration-300 fixed left-0 bg-red-100 right-0 z-50 py-3 md:py-6 ${
        scrollY >= 100 ? 'shadow-md' : ''
      } ${navVisible ? 'top-0' : '-top-full'}`}
    >
      <div className='mx-auto max-w-[1208px] px-4 md:px-6 1230:px-0'>
        <div className='flex justify-between items-center'>
          <Link to='/' className='flex items-center gap-3'>
            <h2 className='md:text-3xl text-xl lg:text-4xl font-bold text-tertiaryColor'>
              Nextgendevs
            </h2>
          </Link>
          <ul className='hidden md:flex gap-4 lg:gap-6'>
            <li
              className={`py-2.5 font-medium rounded-md lg:text-lg cursor-pointer duration-150 ${
                activeSection === 'course' && location.pathname === '/'
                  ? 'text-tertiaryColor'
                  : 'text-[#698898]'
              } hover:text-tertiaryColor`}
            >
              Course
            </li>
            <li
              className={`py-2.5 font-medium rounded-md lg:text-lg cursor-pointer duration-150 ${
                activeSection === 'student_outcomes' &&
                location.pathname === '/'
                  ? 'text-tertiaryColor'
                  : 'text-[#698898]'
              } hover:text-tertiaryColor`}
            >
              Student Outcomes
            </li>
            <li
              className={`py-2.5 font-medium rounded-md lg:text-lg cursor-pointer duration-150 ${
                activeSection === 'curriculum' && location.pathname === '/'
                  ? 'text-tertiaryColor'
                  : 'text-[#698898]'
              } hover:text-tertiaryColor`}
            >
              Curriculum
            </li>
            <NavLink
              to='/contact'
              className={({ isActive }) =>
                isActive
                  ? 'py-2.5 font-medium text-tertiaryColor rounded-md lg:text-lg cursor-pointer duration-150  hover:text-tertiaryColor'
                  : 'py-2.5 font-medium text-[#698898] rounded-md lg:text-lg cursor-pointer duration-150  hover:text-tertiaryColor'
              }
            >
              <li>Contact</li>
            </NavLink>
            <Link to='/register'>
              <Button>Register</Button>
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
      </div>
    </nav>
  );
};

export default Nav;
