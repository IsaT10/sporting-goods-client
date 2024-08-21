import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import BlurImage from '@/components/BlurImage';

import './Hero.css';
import Container from '@/components/Container';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <Swiper
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
    >
      <SwiperSlide>
        <div className='  items-center justify-end -pt-20'>
          <div className='relative  w-full h-[70vh] md:h-[90vh] lg:h-screen'>
            <BlurImage
              src='https://i.ibb.co/pLZrRTk/banner2.jpg'
              blurHash={'OSMG@kNbkWRPNdxu%M00yDxuMxozj[of_N%MWVjZofWVf6'}
              className='w-full h-full object-cover'
            />
            <div className='absolute  inset-0 bg-gradient-to-br  from-[#000000c1] to-[#00000087]'></div>
          </div>

          <Container>
            <div className='absolute top-1/2 -translate-y-1/2 lg:-translate-y-[60%] xl:-translate-y-[75%]  mt-[5%]   text-white'>
              <h1 className='text-[26px] leading-[30px] sm:eading-9 sm:text-3xl md:text-4xl 900:text-5xl lg:text-6xl font-bold md:leading-[45px] 900:leading-[55px] lg:leading-[70px] w-[65%] sm:w-[55%] md:w-[45%] 900:w-[60%] tracking-tight mb-4 xs:mb-4'>
                Let's Level Up <br /> Your Game
              </h1>

              <p className='text-xs md:text-base w-[80%] sm:w-[75%] md:w-[60%]   sm:text-lg  md:leading-[25px] text-stone-200 mb-6 sm:mb-10 '>
                Browse our selection of expertly crafted sporting goods designed
                to enhance your skills and support your athletic ambitions.
              </p>

              <Link
                to='/all-products'
                className='px-4 sm:px-6 md:px-8 py-2 900:py-3 text-xs md:text-sm border-2 border-brightOrange mr-6 rounded-md text-white font-semibold bg-brightOrange hover:bg-brightOrange/90 duration-200'
              >
                Shop Now
              </Link>
              <Link
                to='/about-us'
                className='px-4 sm:px-6 md:px-8 py-2 900:py-3 text-xs md:text-sm border-2 border-brightOrange  rounded-md text-brightOrange font-semibold hover:text-white  duration-200'
              >
                About Us
              </Link>
            </div>
          </Container>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='  items-center justify-end rounded-md'>
          <div className='relative  w-full h-[70vh] md:h-[90vh] lg:h-screen'>
            <BlurImage
              src='https://i.ibb.co/jwbSsWf/banner1.jpg'
              blurHash={'OSMG@kNbkWRPNdxu%M00yDxuMxozj[of_N%MWVjZofWVf6'}
              className='w-full h-full object-cover '
            />
            <div className='absolute  inset-0 bg-gradient-to-r  from-[#000000dc] to-[#00000087]'></div>
          </div>

          <Container>
            <div className='absolute top-1/2 -translate-y-1/2 lg:-translate-y-[60%] xl:-translate-y-[75%]  mt-[5%]   text-white'>
              <h1 className='text-[26px] leading-9 sm:text-3xl md:text-5xl lg:text-6xl font-bold   md:leading-[45px] 900:leading-[55px] lg:leading-[70px] w-[70%] sm:w-[40%]  md:w-[60%] tracking-tight mb-2 xs:mb-4'>
                Conquer the Roads with Running
              </h1>

              <p className='text-xs md:text-base w-[75%] md:w-[60%]   sm:text-lg  md:leading-[25px] text-stone-200 mb-6 sm:mb-10 '>
                Discover our top-quality collection of running essentials for
                every athlete. Elevate your performance and achieve your goals.
              </p>

              <Link
                to='/all-products'
                className='px-4 sm:px-6 md:px-8 py-2 900:py-3 text-xs md:text-sm border-2 border-brightOrange mr-6 rounded-md text-white font-semibold bg-brightOrange hover:bg-brightOrange/90 duration-200'
              >
                Shop Now
              </Link>
              <Link
                to='/about-us'
                className='px-4 sm:px-6 md:px-8 py-2 900:py-3 text-xs md:text-sm border-2 border-brightOrange  rounded-md text-brightOrange font-semibold hover:text-white  duration-200'
              >
                About Us
              </Link>
            </div>
          </Container>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='  items-center justify-end'>
          <div className='relative bg-black'>
            <img
              className='mx-auto object-cover h-[70vh] md:h-[90vh] lg:h-screen'
              src='https://i.ibb.co/v1Y3Sc4/banner-3.png'
              alt=''
            />
          </div>

          {/* <div className=' '>
            <Button className='absolute top-1  '>Shop now</Button>
          </div> */}
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
