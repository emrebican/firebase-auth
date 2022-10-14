import Link from 'next/link';
import Image from 'next/image';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase-config';

import { SiFirebase } from 'react-icons/si';

const Navbar = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="flex justify-between items-center py-10">
      <Link href="/">
        <span className="text-4xl text-orange-600 cursor-pointer">
          {' '}
          <SiFirebase />
          Firebase
        </span>
      </Link>
      {loading ? (
        <button className="py-2 px-4 text-lg bg-orange-500 text-white rounded-lg font-medium ml-8 hover:bg-orange-600 hover:shadow-md hover:shadow-gray-400 ease-in duration-100">
          Loading...
        </button>
      ) : !user ? (
        <Link href="/auth/login">
          <a className="py-2 px-4 text-lg bg-orange-500 text-white rounded-lg font-medium ml-8 hover:bg-orange-600 hover:shadow-md hover:shadow-gray-400 ease-in duration-100">
            Join now
          </a>
        </Link>
      ) : (
        <Link href="/dashboard">
          <div className="flex items-center gap-4 cursor-pointer">
            <h2 className="text-lg text-gray-700">
              {user.displayName ? user.displayName : user.email}
            </h2>
            <Image
              src={
                user.photoURL
                  ? user.photoURL
                  : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
              }
              width={50}
              height={50}
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
