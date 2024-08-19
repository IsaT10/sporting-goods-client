import Container from '@/components/Container';
import { Link } from 'react-router-dom';
import ContactUs from './sections/ContactUs';
import Map from './sections/Map';
import img from '../../assets/images/badminton-1.jpg';
import teamMember1 from '../../assets/images/download (3).jpeg';
import teamMember2 from '../../assets/images/download (4).jpeg';
import teamMember3 from '../../assets/images/download (5).jpeg';
import HeaderTitle from '@/components/HeaderTitle';
import TeamMemberCard from '@/components/TeamMemberCard';
import { Facebook, Instagram, LinkedIn, WhatsApp } from '@/components/Icons';
import PageHeader from '@/components/PageHeader';

const teamMembers = [
  {
    id: 1,
    name: 'Son',
    role: 'Product Manager',
    image: teamMember1, // Replace with the actual image URL
  },
  {
    id: 2,
    name: 'Steve',
    role: 'Inventory Manager',
    image: teamMember2, // Replace with the actual image URL
  },
  {
    id: 3,
    name: 'Jhon',
    role: 'Content Writer',
    image: teamMember3, // Replace with the actual image URL
  },
  {
    id: 4,
    name: 'William',
    role: 'Sales Analyst',
    image: teamMember2, // Replace with the actual image URL
  },
];

export default function AboutUs() {
  return (
    <div className=''>
      <div className='bg-[#091F40] w-full py-10 md:py-20'>
        <Container>
          <h2 className='text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1.5 md:mb-4 text-white'>
            About Us
          </h2>
          <span className=' text-stone-400 text-xs md:text-sm font-medium'>
            <span className='cursor-pointer hover:text-stone-200'>
              <Link to='/'>home </Link>
            </span>
            / <span className='cursor-pointer text-stone-200'>about-us</span>
          </span>
        </Container>
      </div>

      <Container>
        <div className='flex justify-between relative'>
          <div className='md:w-[37%] lg:w-[35%] md:h-[400px] flex flex-col justify-start mt-6 lg:mt-16 md:items-center'>
            <h4 className='text-xl 900:text-2xl font-bold'>Why GearPro?</h4>
            <p className='md:text-center text-stone-500 900:text-lg mt-3'>
              GearPro offers a wide range of high-quality sporting goods from
              trusted brands. Enjoy a seamless shopping experience with secure
              payment options. Trust GearPro for all your sporting needs.
            </p>
          </div>
          <img
            className='hidden md:inline-block w-[60%] lg:h-[500px] absolute right-0 -top-24 lg:-top-36 rounded-md'
            src={img}
            alt=''
          />
        </div>

        <div className='flex flex-col gap-24 my-16 md:my-24'>
          <div>
            <HeaderTitle title='Our Mission & Vision' />
            <p className='text-stone-500 lg:text-lg leading-relaxed'>
              At GearPro, our mission is to empower athletes and sports
              enthusiasts by providing them with top-quality equipment that
              enhances their performance and enjoyment. We strive to be the
              go-to source for all sporting needs, offering innovative products
              and unparalleled customer service. Our vision is to be a global
              leader in the sporting goods industry, known for our commitment to
              quality, innovation, and customer satisfaction. We aim to inspire
              and support athletes of all levels in achieving their goals and
              reaching their full potential.
            </p>
          </div>

          <div>
            <HeaderTitle title='Our Team' />
            <div className='grid sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-10'>
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.id} {...member} />
              ))}
            </div>
          </div>

          <div className='md:flex gap-10'>
            <div className='flex-1'>
              <HeaderTitle title='Contact Info and Location' />
              <div className='flex flex-col h-[85%] justify-between'>
                <div className='lg:text-base text-sm font-semibold space-y-4'>
                  <p>
                    Address:{' '}
                    <span className='text-stone-600 font-normal'>
                      8644 103rd Ave, Ozone Park, NY 11417
                    </span>
                  </p>
                  <p>
                    Phone Number:{' '}
                    <span className='text-stone-600 font-normal'>
                      +1 (555) 123-4567
                    </span>
                  </p>
                  <p>
                    Email:{' '}
                    <span className='text-stone-600 font-normal'>
                      contact@gearpro.com
                    </span>
                  </p>
                </div>
                <div className=' flex flex-col items-start my-10'>
                  <p className='text-sm lg:text-lg  font-bold mb-4'>
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
            <Map />
          </div>
        </div>
      </Container>
    </div>
  );
}
