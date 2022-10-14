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
import Link from 'next/link';
import { useEffect } from 'react';

import { AiOutlineGoogle, AiFillGithub } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

import CreateUser from '../../components/CreateUser';
import Button from '../../components/Button';

const Signin = () => {
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
        <Button
          text="Sign in with Google"
          icon={<AiOutlineGoogle />}
          click={googleLogin}
          bg="bg-red-600"
          hover="hover:bg-red-700"
        />
        <Button
          text="Sign in with Facebook"
          icon={<FaFacebookF />}
          click={facebookLogin}
          bg="bg-blue-800"
          hover="hover:bg-blue-900"
        />
        <Button
          text="Sign in with Github"
          icon={<AiFillGithub />}
          click={githubLogin}
          bg="bg-gray-800"
          hover="hover:bg-gray-900"
        />
      </div>
      <Link href="/auth/login">already have account?</Link>
    </div>
  );
};

export default Signin;
