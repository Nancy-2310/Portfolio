// links
import Link from "next/link";

// icons
import { RiLinkedinBoxFill, RiGithubFill, RiInstagramFill, RiTelegramFill } from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-9 text-lg ">
      <Link href={'https://www.linkedin.com/in/nancy-gautam-6a74ab262/'} className="hover:text-accent transition-all duration-300">
        <RiLinkedinBoxFill size={32}  />
      </Link>
      <Link href={'https://github.com/Nancy-2310'} className="hover:text-accent transition-all duration-300">
        <RiGithubFill size={32} />
      </Link>
      <Link href={'https://www.instagram.com/nancygautamm/'} className="hover:text-accent transition-all duration-300">
        <RiInstagramFill size={32}  />
      </Link>
      <Link href={'https://web.telegram.org/a/#2014540327'} className="hover:text-accent transition-all duration-300">
        <RiTelegramFill size={32}  />
      </Link>
      
    </div>
  )
};

export default Socials;
