import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="mb-6">
      <Link href="https://github.com/emrebican">
        <div className="flex items-center justify-center gap-2 cursor-pointer">
          <Image src="/favicon.ico" height={25} width={25} />
          <span>emrebicangithub</span>
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
