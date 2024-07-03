//next image
import Image from 'next/image';

//next link
import Link from 'next/link';

// components
import Socials from '../components/Socials';

const Header = () => {
  return <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
        {/* {logo} */}
        {/* <Link href={'/'}>
        <Image
        width= {400}
        height= {300}
        src= {'/logo.svg'} 
        alt= ''
        priority = {true}
      /> */}
        {/* </Link> */}
        <h1 className="text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out font-poppins">
        Nancy Gautam
      </h1>

        {/* {  Socials } */}
        <Socials />
      </div>
    </div>
  </header>;
};

export default Header;
