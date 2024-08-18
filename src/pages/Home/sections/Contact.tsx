import { ContactForm } from '@/components/ContactForm';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';

export default function Contact() {
  return (
    <Container>
      <SectionTitle
        title='Reach Out to Us'
        subTitle='We value your feedback and are here to assist you. Contact us with your queries, and we’ll get back to you as soon as possible.'
      />
      <div className='flex gap-10'>
        <div className='w-1/2'>sad</div>
        <div className='w-1/2'>
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
