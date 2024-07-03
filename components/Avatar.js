// next Image
import Image from 'next/image';

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none absolute bottom-0'>
      <Image 
       src={'/image2.png'}
       width={600}
       height={400}
       alt=''
       className='translate-z-0 w-[100%] h-[80%]'
      />
    </div>
  )
};

export default Avatar;
