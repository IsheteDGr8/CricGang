import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex justify-left gap-8 text-lg">
        <Link href="/about/about-us/ishaan">Ishaan</Link>
        <Link href="/about/about-us/shivek">Shivek</Link>
        <Link href="/about/about-us/subodh">Subodh</Link>
        <Link href="/about/about-us">Back to About-Us</Link>
    </footer>
  );
};

export default Footer;
