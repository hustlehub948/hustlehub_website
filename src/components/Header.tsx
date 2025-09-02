import { useState } from "react";
import { Link } from "react-router-dom";
import useActiveSection from "../hooks/useScrollToHash";

const SECTIONS = ["about", "works", "services", "contact"];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const active = useActiveSection(SECTIONS, { offset: 84 });

  const base =
    "relative text-[15px] font-medium text-gray-600 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-hhPurple after:transition-all after:duration-300";
  const activeCls = "text-hhPurple after:w-full";
  const hoverCls = "hover:text-hhPurple hover:after:w-full";

  return (
    <header className="sticky top-0 z-50 bg-white/30 backdrop-blur-md border-b border-hhBorder">
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

        {/* Desktop Nav */}
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

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 border border-gray-300 bg-gray-100 rounded-lg relative"
        >
          <span
            className={`block h-[2px] w-6 bg-hhDark rounded transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-hhDark rounded my-[6px] transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-hhDark rounded transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </nav>

    {/* Mobile Side Drawer */}
<div
  className={`fixed top-0 right-0 h-screen w-64 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 z-50 shadow-2xl border-l border-gray-200 transform transition-transform duration-300 ease-in-out
  ${isOpen ? "translate-x-0" : "translate-x-full"}`}
>
  <nav className="flex flex-col items-start gap-6 mt-20 px-6">
    {SECTIONS.map((id) => (
      <a
        key={id}
        href={`#${id}`}
        aria-current={active === id ? "page" : undefined}
        className={`text-lg font-semibold ${
          active === id ? "text-hhPurple" : "text-hhDark"
        } hover:text-hhPurple transition`}
        onClick={() => setIsOpen(false)}
      >
        {id[0].toUpperCase() + id.slice(1)}
      </a>
    ))}
  </nav>
</div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}
