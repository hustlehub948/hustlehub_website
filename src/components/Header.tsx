import { Link } from "react-router-dom";
import useActiveSection from "../hooks/useScrollToHash";

const SECTIONS = ["about", "works", "services", "contact"];

export default function Header() {
  const active = useActiveSection(SECTIONS, { offset: 84 });

  const base =
    "relative text-[15px] font-medium text-gray-600 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-hhPurple after:transition-all after:duration-300";
  const activeCls = "text-hhPurple after:w-full";
  const hoverCls = "hover:text-hhPurple hover:after:w-full";

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-hhBorder">
      <nav className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.svg"
            alt="HustleHub Logo"
            className="w-9 h-9 rounded-2xl"
          />
          <b className="text-hhDark">HUSTLEHUB</b>
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-10">
          {SECTIONS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "page" : undefined}
                className={`${base} ${hoverCls} ${
                  active === id ? activeCls : ""
                }`}
              >
                {id[0].toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
