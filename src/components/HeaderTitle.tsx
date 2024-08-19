export default function HeaderTitle({ title }: { title: string }) {
  return (
    <h2 className='mb-6 md:mb-10 border-l-8 border-primary pl-3 text-xl md:text-2xl font-bold'>
      {title}
    </h2>
  );
}
