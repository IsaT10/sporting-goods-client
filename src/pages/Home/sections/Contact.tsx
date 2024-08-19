import { ContactForm } from '@/components/ContactForm';
import Container from '@/components/Container';
import { Facebook, Instagram, LinkedIn, WhatsApp } from '@/components/Icons';
import SectionTitle from '@/components/SectionTitle';

export default function Contact() {
  return (
    <Container>
      <SectionTitle
        title='Reach Out to Us'
        subTitle='We value your feedback and are here to assist you. Contact us with your queries, and we’ll get back to you as soon as possible.'
      />
      <div className='flex gap-10 mb-20 md:mb-28'>
        <div className=' w-1/2 hidden md:flex flex-col justify-between'>
          <p className='text-lg text-stone-600'>
            At GearPro, we’re committed to providing exceptional customer
            service and ensuring your shopping experience is seamless and
            enjoyable. Whether you have questions about our products, need help
            with an order, or want to provide feedback, our dedicated team is
            here to help.
          </p>
          <div className=' flex flex-col items-center md:items-start'>
            <p className='text-[13px] md:text-lg  font-bold  mb-4'>Follow us</p>
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
        <div className='w-full md:w-1/2'>
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
