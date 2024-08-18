export default function SectionTitle({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <div className='pt-28 pb-14'>
      <h2 className='text-center text-4xl font-bold'>{title}</h2>
      <p className='w-[50%] mx-auto text-center text-[#828282] mt-1 '>
        {subTitle}
      </p>
    </div>
  );
}
