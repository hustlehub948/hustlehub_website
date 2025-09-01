import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-hhDark text-white py-10">
      <div className="container grid gap-8 grid-cols-1 md:grid-cols-2">
        {/* Logo + Copyright */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/logo.svg" alt="HustleHub Logo" className="h-8 w-auto" />
            <b className="text-lg">HUSTLEHUB</b>
          </div>
          <p className="opacity-85 text-sm">
            © 2025 HustleHub Studios. All rights reserved.
          </p>
        </div>

        {/* Contact + Socials */}
        <div>
          <h3 className="mb-2 font-semibold">Contact</h3>
          <p className="opacity-85 text-sm mb-2">contact@hustlehub.com</p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/hustlehub" target="_blank" rel="noreferrer">
              <Linkedin className="h-5 w-5 hover:text-hhPurple transition" />
            </a>
            <a href="https://www.instagram.com/hustlehub_studios/" target="_blank" rel="noreferrer">
              <Instagram className="h-5 w-5 hover:text-hhPurple transition" />
            </a>
            <a href="https://x.com/Hustle_Hub948" target="_blank" rel="noreferrer">
              {/* X logo as inline SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 1227"
                className="h-5 w-5 fill-current hover:text-hhPurple transition"
              >
                <path d="M714.163 519.284L1160.89 0H1051.72L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.63H109.174L516.841 749.217L857.447 1226.63H1200M163.715 79.563H311.267L1040.46 1147.67H892.902" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
