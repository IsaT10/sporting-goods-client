import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid md:auto-rows-[23rem] grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6 max-w-7xl mx-auto ',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  img,
}: {
  className?: string;
  title?: string | React.ReactNode;
  img?: string;
}) => {
  return (
    <div
      className={cn(
        'row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4',
        className
      )}
    >
      <Link to={`/all-products?category=${title}`}>
        <img
          className='flex flex-1 w-full h-[300px] object-cover rounded-xl '
          src={img}
          alt=''
        />
        <div className='group-hover/bento:translate-x-2  transition duration-200'>
          <div className=' font-semibold  mt-3.5'>{title}</div>
        </div>
      </Link>
    </div>
  );
};
