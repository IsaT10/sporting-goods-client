import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { Button } from '@/components/ui/button';
import BlurImage from '@/components/BlurImage';
import img1 from '../../../assets/images/banner.jpeg';
import img2 from '../../../assets/images/braden-collum-9HI8UJMSdZA-unsplash.jpg';
import img3 from '../../../assets/images/discount.jpg';
import './Hero.css';
import Container from '@/components/Container';

export default function Hero() {
  return (
    <Swiper
      // autoplay={{
      //   delay: 2000,
      //   disableOnInteraction: false,
      // }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
    >
      <SwiperSlide>
        <div className='  items-center justify-end -pt-20'>
          <div className='relative  w-full h-[70vh] md:h-[80vh] lg:h-screen'>
            <BlurImage
              src={img1}
              blurHash={'OSMG@kNbkWRPNdxu%M00yDxuMxozj[of_N%MWVjZofWVf6'}
              className='w-full h-full object-cover'
            />
            <div className='absolute  inset-0 bg-gradient-to-b  from-[#0000007a] to-[#00000087]'></div>
          </div>

          <Container>
            <div className='absolute top-1/2 -translate-y-[75%]  mt-[5%] lg:w-[40%] text-white'>
              <h1 className='text-[32px] leading-9 sm:text-3xl md:text-5xl lg:text-6xl font-bold  md:leading-[55px] lg:leading-[65px] w-[70%] lg:w-[80%] tracking-tight mb-2 xs:mb-4'>
                Score Big in Cricket
              </h1>

              <p className='text-[13px] w-[90%] sm:w-[90%]   sm:text-lg  md:leading-[25px] text-stone-200 mb-6 sm:mb-10 '>
                Equip yourself with top-quality cricket gear and elevate your
                game to new heights. Discover the best equipment for champions
              </p>

              {/* <div className='hidden md:flex gap-4  '>
              <Button className={'whitespace-nowrap'}>Learn&nbsp;more</Button>

              <Button className='px-8'>Our Course</Button>
            </div> */}
            </div>
          </Container>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=' flex items-center justify-end rounded-md'>
          <div className='relative  w-full h-[70vh] md:h-[80vh] lg:h-screen'>
            <BlurImage
              src={img2}
              blurHash={'OSMG@kNbkWRPNdxu%M00yDxuMxozj[of_N%MWVjZofWVf6'}
              className='w-full h-full object-cover '
            />
            <div className='absolute  inset-0 bg-gradient-to-b  from-[#0000007a] to-[#00000087]'></div>
          </div>

          <div className='absolute mt-[5%] w-1/2 text-white'>
            <h1 className='text-[32px] leading-9 sm:text-3xl md:text-5xl lg:text-6xl font-bold  md:leading-[55px] lg:leading-[65px] w-[70%] lg:w-[80%] tracking-tight mb-2 xs:mb-4'>
              Conquer the Roads with Running
            </h1>

            <p className='text-[13px] w-[90%] sm:w-[95%] lg:w-[90%]   sm:text-lg  md:leading-[25px] text-stone-200 mb-6 sm:mb-10 '>
              Discover our top-quality collection of running essentials for
              every athlete. Elevate your performance and achieve your goals
            </p>

            {/* <div className='flex gap-4  '>
              <Button className={'whitespace-nowrap'}>Learn&nbsp;more</Button>

              <Button className='px-8'>Our Course</Button>
            </div> */}
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=' flex items-center justify-end'>
          <div className='relative'>
            <img
              className='w-full object-center object-cover h-[70vh] md:h-[80vh] lg:h-screen'
              src={img3}
              alt=''
            />
            <div className='absolute  inset-0 bg-gradient-to-b  from-[#00000049] to-[#00000087]'></div>
          </div>

          {/* <div className='absolute w-1/2 translate-x-1/2 bottom-24'>
            <Button className='absolute  '>Shop now</Button>
          </div> */}
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

{
  /* <SwiperSlide>
<div className=' flex items-center justify-end'>
  <div className='relative  w-full h-[280px] xs:h-[350px] sm:h-[450px] md:h-[650px] 2xl:h-[800px]'>
    <BlurImage
      src={img1}
      blurHash={'OSMG@kNbkWRPNdxu%M00yDxuMxozj[of_N%MWVjZofWVf6'}
      className='w-full h-full object-cover rounded-lg'
      radius={'6px'}
    />
    <div className='absolute rounded-lg inset-0 bg-gradient-to-b  from-[#0000007a] to-[#00000087]'></div>
  </div>

  <div className='absolute w-1/2 text-white'>
    <h1 className='text-[32px] leading-9 sm:text-3xl md:text-5xl lg:text-6xl font-bold  md:leading-[55px] lg:leading-[65px] w-[70%] lg:w-[80%] tracking-tight mb-2 xs:mb-4'>
      Score Big in Cricket
    </h1>

    <p className='text-[13px] w-[90%] sm:w-[95%] lg:w-[90%]   sm:text-lg  md:leading-[25px] text-stone-200 mb-6 sm:mb-10 '>
      Equip yourself with top-quality cricket gear and elevate your game
      to new heights. Discover the best equipment for champions
    </p>

    <div className='hidden md:flex gap-4  '>
      <Button className={'whitespace-nowrap'}>Learn&nbsp;more</Button>

      <Button className='px-8'>Our Course</Button>
    </div>
  </div>
</div>
</SwiperSlide>
<SwiperSlide>
<div className=' flex items-center justify-end rounded-md'>
  <div className='relative  w-full h-[280px] xs:h-[350px] sm:h-[450px] md:h-[650px] 2xl:h-[800px]'>
    <BlurImage
      src={img2}
      blurHash={'OSMG@kNbkWRPNdxu%M00yDxuMxozj[of_N%MWVjZofWVf6'}
      className='w-full h-full object-cover rounded-lg'
      radius={'6px'}
    />
    <div className='absolute rounded-lg inset-0 bg-gradient-to-b  from-[#0000007a] to-[#00000087]'></div>
  </div>

  <div className='absolute w-1/2 text-white'>
    <h1 className='text-[32px] leading-9 sm:text-3xl md:text-5xl lg:text-6xl font-bold  md:leading-[55px] lg:leading-[65px] w-[70%] lg:w-[80%] tracking-tight mb-2 xs:mb-4'>
      Conquer the Roads with Running
    </h1>

    <p className='text-[13px] w-[90%] sm:w-[95%] lg:w-[90%]   sm:text-lg  md:leading-[25px] text-stone-200 mb-6 sm:mb-10 '>
      Discover our top-quality collection of running essentials for
      every athlete. Elevate your performance and achieve your goals
    </p>

    <div className='flex gap-4  '>
      <Button className={'whitespace-nowrap'}>Learn&nbsp;more</Button>

      <Button className='px-8'>Our Course</Button>
    </div>
  </div>
</div>
</SwiperSlide>
<SwiperSlide>
<div className=' flex items-center justify-end rounded-md'>
  <div className='relative'>
    <img
      className=' w-full h-[280px] xs:h-[350px] sm:h-[450px] md:h-[650px] 2xl:h-[800px] rounded-lg'
      src={img3}
      alt=''
    />
    <div className='absolute rounded-lg inset-0 bg-gradient-to-b  from-[#00000049] to-[#00000087]'></div>
  </div>

  <div className='absolute w-1/2 translate-x-1/2 bottom-24'>
    <Button className='absolute  '>Shop now</Button>
  </div>
</div>
</SwiperSlide>
</Swiper> */
}
