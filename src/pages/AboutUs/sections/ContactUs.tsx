import { ContactForm } from '@/components/ContactForm';
import HeaderTitle from '@/components/HeaderTitle';

export default function ContactUs() {
  return (
    <div className='flex-1 '>
      <HeaderTitle title={'Contact Us'} />
      <ContactForm />
    </div>
  );
}
