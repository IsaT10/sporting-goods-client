export default function TeamMemberCard({ ...el }) {
  return (
    <div className='relative justify-self-center'>
      <div className='relative  h-[360px] bg-cover overflow-hidden rounded-md'>
        <img
          className='w-full h-full transform transition duration-300 hover:scale-110 object-cover'
          src={el.image}
          alt=''
        />
        <div className='absolute inset-0 bg-gradient-to-t from-gray-700 via-[#44444431] to-transparent pointer-events-none'></div>
      </div>
      <div className='absolute bottom-5 left-5'>
        <h5 className='font-bold text-white text-xl'>{el.name}</h5>
        <p className='text-stone-300 '>{el.role}</p>
      </div>
    </div>
  );
}
