import Container from './Container';
import { Link } from 'react-router-dom';

export default function PageHeader({
  title,
  route,
}: {
  title: string;
  route: string;
}) {
  return (
    <div className='inline-block bg-[#091F40] w-full py-4 md:py-12 lg:py-[70px]'>
      <Container>
        <h2 className='text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold md:mb-2 text-white'>
          {title}
        </h2>
        <span className=' text-stone-400 text-sm font-medium'>
          <span className='cursor-pointer text-[10px] sm:text-xs md:text-base hover:text-stone-200'>
            <Link to='/'>home / </Link>
          </span>

          <span className='cursor-pointer text-xs md:text-base text-stone-200'>
            {route}
          </span>
        </span>
      </Container>
    </div>
  );
}
