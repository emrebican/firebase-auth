import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-10">
      <Link href="/">Logo</Link>
      <Link href="/auth/login">
        <a className="py-2 px-4 text-lg bg-teal-400 text-white rounded-lg font-medium ml-8">
          Join now
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
