import { Link } from 'react-router-dom';
import { Facebook, Instagram, LinkedIn, WhatsApp } from '../Icons';
import Container from '../Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className=' py-10 sm:py-12 md:py-16 lg:py-20 bg-stone-950'>
      <Container>
        <h2 className='md:text-2xl md:text-left text-center text-xl lg:text-3xl font-bold text-brightOrange mb-14'>
          GearPro
        </h2>

        <div className='flex md:flex-row flex-col gap-8 sm:gap-16 md:gap-28'>
          <div className='flex sm:gap-28 md:flex-row flex-col ga w-full justify-between md:w-max'>
            <div className='flex flex-col items-center md:items-start'>
              <p className='text-[13px] xs:text-base font-bold text-white mb-4'>
                Quick Links
              </p>
              <p className='text-[#A4B5C1] cursor-pointer leading-[22.4px] mb-3'>
                All Products
              </p>
              <p className='text-[#A4B5C1] cursor-pointer leading-[22.4px] mb-3'>
                Manage Products
              </p>
              <p className='text-[#A4B5C1] cursor-pointer leading-[22.4px] mb-3'>
                Cart
              </p>
              <p className='text-[#A4B5C1] cursor-pointer leading-[22.4px] mb-3'>
                About Us
              </p>
            </div>
          </div>
          <div className='flex gap-8 justify-between flex-1 md:flex-row flex-col items-center md:items-start'>
            <div className='flex flex-col items-center md:items-start'>
              <p className='text-[13px] xs:text-base font-bold text-white mb-4'>
                Contact info
              </p>

              <span className='mb-3 flex gap-3 items-center text-[#A4B5C1]'>
                <p className=' '>contact@gearpro.com</p>
              </span>
              <span className='mb-3 flex gap-3 items-center text-[#A4B5C1]'>
                <p className=''>8644 103rd Ave, Ozone Park, NY 11417</p>
              </span>
            </div>

            <div className=' flex flex-col items-center md:items-start'>
              <p className='text-[13px] xs:text-base font-bold text-white mb-4'>
                Follow us
              </p>
              <div className='flex gap-3 flex-wrap'>
                <a href='#' target='_blank'>
                  <Facebook />
                </a>
                <a href='#' target='_blank'>
                  <WhatsApp />
                </a>
                <a href='#' target='_blank'>
                  <Instagram />
                </a>
                <a href='#' target='_blank'>
                  <LinkedIn />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='text-[#A4B5C1] flex xs:flex-row flex-col gap-4 items-center justify-between mt-14 text-xs'>
          <span>© {currentYear} GearPro, Inc. All rights reserved.</span>
        </div>
      </Container>
    </div>
  );
}
