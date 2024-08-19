import SectionTitle from '@/components/SectionTitle';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

const testimonials = [
  {
    quote:
      'GearPro has everything I need for my outdoor adventures. The quality is top-notch, and the customer service is unbeatable!',
    name: 'John Doe',
    title: 'Outdoor Enthusiast',
  },
  {
    quote:
      'I’ve purchased all my sports equipment from GearPro. Their selection is fantastic, and I always find what I need at great prices.',
    name: 'Sarah Williams',
    title: 'Fitness Coach',
  },
  {
    quote:
      'As a professional athlete, I rely on GearPro for my gear. Their products are durable, reliable, and always meet my expectations.',
    name: 'Mike Johnson',
    title: 'Professional Athlete',
  },
  {
    quote:
      'From tennis rackets to running shoes, GearPro has it all. Their easy online shopping experience and fast delivery keep me coming back.',
    name: 'Emily Davis',
    title: 'Tennis Player',
  },
  {
    quote:
      'I’ve been using GearPro for years. The quality of their products and their commitment to customer satisfaction is outstanding.',
    name: 'David Brown',
    title: 'Sports Enthusiast',
  },
];

export default function Testimonial() {
  return (
    <div className='bg-orange-100 pb-12 sm:pb-16 md:mb-24 lg:pb-32'>
      <SectionTitle
        title='Voices of Our Customers'
        subTitle='Hear firsthand from our satisfied customers. Their stories and feedback highlight the quality and trust we deliver every day.'
      />

      <div className=' rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden'>
        <InfiniteMovingCards
          items={testimonials}
          direction='left'
          speed='slow'
        />
      </div>
    </div>
  );
}
