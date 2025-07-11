import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-center gap-8 text-lg font-bold">
        <Link href="/" className="text-white">Home</Link>
        <Link href="/players" className="text-white">Players</Link>
        <Link href="/add" className="text-white">Add Scores</Link>
    </nav>
  );
};

export default Navbar;