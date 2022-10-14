import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  updateProfile
} from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../utils/firebase-config';

import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { AiOutlineGoogle, AiFillGithub } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

import CreateUser from '../../components/CreateUser';

const login = () => {
  // Sign in with Google
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [user, loading] = useAuthState(auth);
  const route = useRouter();

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      route.push('/dashboard');
    } catch (error) {
      console.log(error.message);
    }
  };

  // Sign in with Facebook
  const facebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const credantial = await FacebookAuthProvider.credentialFromResult(
        result
      );
      const token = credantial.accessToken;
      let photoUrl = result.user.photoURL + '?height=500&access_token=' + token;
      await updateProfile(auth.currentUser, { photoURL: photoUrl });

      route.push('/dashboard');
    } catch (error) {
      console.log(error.message);
    }
  };

  // Sign in with Github
  const githubLogin = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);

      route.push('/dashboard');
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (user) route.push('/dashboard');
  }, [user]);

  return (
    <div className="md:w-1/2 shadow-xl p-10 text-gray-700 rounded-md  mx-auto flex flex-col items-center align-center gap-4 bg-white">
      <h2 className="text-xl">Join us Today</h2>
      <h3 className="text-xl text-center mb-2">
        Sign in with one of the providers
      </h3>
      <CreateUser />
      <p className="text-gray-700 text-sm font-bold">- OR -</p>
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={googleLogin}
          className="flex items-center gap-2 bg-red-600 text-white p-2 rounded-sm hover:shadow-xl shadow-black hover:bg-red-700 text-lg px-4 w-full"
        >
          <AiOutlineGoogle /> Sign in with Google
        </button>
        <button
          onClick={facebookLogin}
          className="flex items-center gap-2 bg-blue-800 text-white p-2 rounded-sm hover:shadow-xl shadow-black hover:bg-blue-900 text-lg px-4 w-full"
        >
          <FaFacebookF />
          Sign in with Facebook
        </button>
        <button
          onClick={githubLogin}
          className="flex items-center gap-2 bg-gray-800 text-white p-2 rounded-sm hover:shadow-xl shadow-black hover:bg-gray-900 text-lg px-4 w-full"
        >
          <AiFillGithub />
          Sign in with Github
        </button>
      </div>
    </div>
  );
};

export default login;
