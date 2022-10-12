import Link from 'next/link';
import { SiFirebase } from 'react-icons/si';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-10">
      <Link href="/">
        <span className="text-4xl text-orange-600 cursor-pointer">
          {' '}
          <SiFirebase />
          Firebase
        </span>
      </Link>
      <Link href="/auth/login">
        <a className="py-2 px-4 text-lg bg-orange-500 text-white rounded-lg font-medium ml-8 hover:bg-orange-600 hover:shadow-md hover:shadow-gray-400 ease-in duration-100">
          Join now
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
