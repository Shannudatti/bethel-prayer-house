import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Sermons", path: "/sermons" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "Prayer Request", path: "/prayer-request" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md text-white z-50 border-b border-yellow-400/10">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-bold text-yellow-400"
        >
          Bethel Prayer House
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-lg">

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition duration-300 hover:text-yellow-400 ${
                location.pathname === link.path
                  ? "text-yellow-400"
                  : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black px-6 py-6 flex flex-col gap-6 text-lg border-t border-yellow-400/10">

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`transition duration-300 hover:text-yellow-400 ${
                location.pathname === link.path
                  ? "text-yellow-400"
                  : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

        </div>
      )}
    </nav>
  );
}

export default Navbar;