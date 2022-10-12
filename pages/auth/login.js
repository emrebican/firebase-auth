import { AiOutlineGoogle } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

const login = () => {
  return (
    <div className="sm:w-1/2 shadow-xl mt-32 p-10 text-gray-700 rounded-md  mx-auto flex flex-col items-center align-center gap-4 bg-white">
      <h2 className="text-xl">Join us Today</h2>
      <h3 className="text-xl">Sign in with one of the providers</h3>

      <div className="flex flex-col items-center gap-4 mt-10">
        <button className="flex items-center gap-2 bg-red-600 text-white p-2 rounded-md hover:shadow-xl shadow-black hover:bg-red-700 text-lg px-4 w-full">
          <AiOutlineGoogle /> Sign in with Google
        </button>
        <button className="flex items-center gap-2 bg-blue-800 text-white p-2 rounded-md hover:shadow-xl shadow-black hover:bg-blue-900 text-lg px-4 w-full">
          <FaFacebookF />
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default login;
