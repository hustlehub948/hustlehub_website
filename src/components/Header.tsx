import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-hhBorder">
      <nav className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="HustleHub" className="w-9 h-9 rounded-2xl" />
          <b>HUSTLEHUB</b>
        </Link>
        <ul className="hidden md:flex items-center gap-10 text-[15px] text-hhDark/80">
          <li><a href="#about" className="hover:text-hhDark">About</a></li>
          <li><a href="#works" className="hover:text-hhDark">Works</a></li>
          <li><a href="#services" className="hover:text-hhDark">Services</a></li>
          <li><a href="#contact" className="hover:text-hhDark">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
