import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import { auth } from '../utils/firebase-config';

const CreateUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

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

  if (loading) return <p>Loading...</p>;

  if (user) return <p>Registered user: {user.email}</p>;

  return (
    <div>
      <form className="flex flex-col gap-2">
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
          className="text-white text-lg bg-slate-700 rounded-sm py-2 border-2 hover:border-2 hover: border-slate-700 hover:bg-transparent hover:text-slate-700 hover:font-semibold"
          onClick={() => createUserWithEmailAndPassword(email, password)}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
