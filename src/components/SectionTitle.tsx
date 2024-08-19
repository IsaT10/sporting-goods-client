export default function SectionTitle({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <div className='pt-12  sm:pt-14 pb-6 sm:pb-8 md:pt-20 md:pb-10 lg:pt-28 lg:pb-14'>
      <h2 className='text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>
        {title}
      </h2>
      <p className='sm:w-[90%] md:w-[70%] lg:w-[50%] md:text-base text-xs sm:text-sm  mx-auto text-center text-[#828282] mt-1 '>
        {subTitle}
      </p>
    </div>
  );
}
