import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-hhDark text-white py-10">
      <div className="container grid gap-4 grid-cols-1 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="logo-square" />
            <b>HUSTLEHUB</b>
          </div>
          <p className="opacity-85 text-sm">© 2025 HustleHub Studios. All rights reserved.</p>
        </div>
        <div>
          <h3 className="mb-2 font-semibold">Navigate</h3>
          <p className="opacity-85 text-sm">
            <Link to="/#services">Services</Link> · <Link to="/portfolio">Work</Link> · <Link to="/pricing">Pricing</Link> · <Link to="/contact">Contact</Link>
          </p>
        </div>
        <div>
          <h3 className="mb-2 font-semibold">Contact</h3>
          <p className="opacity-85 text-sm">contact@hustlehub.com<br/>LinkedIn · Instagram · X</p>
        </div>
      </div>
    </footer>
  );
}
