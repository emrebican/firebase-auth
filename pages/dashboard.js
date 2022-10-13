import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase-config';

import Image from 'next/image';
import { useRouter } from 'next/router';

const dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const route = useRouter();

  if (loading)
    return <h1 className="text-xl text-gray-800 text-center">Loading...</h1>;

  if (!user) route.push('/auth/login');

  if (user)
    return (
      <div className="mx-10">
        <h1 className="text-2xl text-gray-800 text-center">
          Welcome to your dashboard <strong> {user.displayName}</strong>
        </h1>
        <div className="flex flex-col gap-2 text-lg">
          <span>
            Photo:{' '}
            <Image
              src={user.photoURL}
              width={60}
              height={60}
              objectFit="cover"
              className="rounded-full"
            />
          </span>
          <span>
            Email: <strong>{user.email}</strong>
          </span>
          <span>
            Creation Time:{' '}
            <strong>{user.metadata.creationTime.slice(0, 16)}</strong>
          </span>
          <span>
            Last Sign in Time:{' '}
            <strong>{user.metadata.lastSignInTime.slice(0, 16)}</strong>
          </span>
          <button
            onClick={() => auth.signOut()}
            className="mt-20 bg-red-600 text-white text-lg px-8 py-2 rounded-md cursor-pointer hover:shadow-md hover:bg-red-700 w-36"
          >
            Log out
          </button>
        </div>
      </div>
    );
};

export default dashboard;
