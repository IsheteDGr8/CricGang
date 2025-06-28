import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-center gap-8 text-lg font-bold">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/login">Login</Link>
        <Link href="/players">Players</Link>
    </nav>
  );
};

export default Navbar;