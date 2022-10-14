import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../utils/firebase-config';

import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';

const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const route = useRouter();

  if (error)
    return (
      <div className="flex flex-col justify-center items-center">
        <p>Error: {error.message.substring(9, error.message.indexOf('('))}</p>
        <button
          onClick={() => window.location.reload()}
          className="text-white text-lg bg-slate-700 rounded-sm py-2 mt-2 w-32 border-2 hover:border-2 hover: border-slate-700 hover:bg-transparent hover:text-slate-700 hover:font-semibold"
        >
          Try again
        </button>
      </div>
    );

  if (loading)
    return <p className="text-2xl text-gray-800 text-center">Loading...</p>;
  if (user) route.push('/dashboard');

  return (
    <form className="flex flex-col gap-2 justify-center items-center">
      <p className="text-lg text-gray-800 mb-4">
        Please Login if you have an account or{' '}
        <span className="text-gray-800 font-semibold">
          <Link href="/auth/signin">sign in</Link>
        </span>
      </p>
      <input
        type="email"
        placeholder="email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border-2 border-stone-400 rounded-sm px-2 py-1"
      />
      <input
        type="password"
        placeholder="password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border-2 border-stone-400 rounded-sm px-2 py-1"
      />
      <button
        className="text-white text-lg bg-slate-700 rounded-sm py-2 border-2 hover:border-2 hover: border-slate-700 hover:bg-transparent hover:text-slate-700 hover:font-semibold w-56"
        onClick={() => signInWithEmailAndPassword(email, password)}
      >
        Login
      </button>
    </form>
  );
};

export default login;
