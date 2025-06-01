import { useState } from "react";
import { NavLink } from "react-router";
import logo from "../assets/images/shared/logo.svg";
import openIcon from "../assets/images/shared/icon-hamburger.svg";
import closeIcon from "../assets/images/shared/icon-close.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const navItems = [
    { id: 1, path: "/", text: "Home", number: "00" },
    { id: 2, path: "/destination", text: "Destination", number: "01" },
    { id: 3, path: "/crew", text: "Crew", number: "02" },
    { id: 4, path: "/technology", text: "Technology", number: "03" },
  ];

  return (
    <header className="flex justify-between items-center relative py-8 px-6 md:px-10 lg:px-14">
      {/* Logo */}
      <a href="/" className="z-50">
        <img
          src={logo}
          alt="Space tourism logo"
          className="w-10 h-10 md:w-12 md:h-12"
        />
      </a>

      {/* Horizontal line on desktop */}
      <div className="hidden lg:block flex-grow max-w-[50%] h-px bg-white/25 ml-16 relative z-10"></div>

      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="z-50 px-4 sm:hidden"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        <img
          src={isMenuOpen ? closeIcon : openIcon}
          alt=""
          className="w-6 h-6"
        />
      </button>

      {/* Navigation */}
      <nav className="hidden sm:block">
        <ul className="flex gap-8 lg:gap-12 bg-white/5 backdrop-blur-lg px-12 lg:px-24 py-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 text-white uppercase tracking-wider 
                  hover:border-b-2 hover:border-white/50 pb-2
                  ${isActive ? "border-b-2 border-white" : ""}`
                }
              >
                <span className="font-bold lg:hidden xl:inline">
                  {item.number}
                </span>
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 sm:hidden"
            onClick={toggleMenu}
          ></div>

          <div
            className={`
            fixed top-0 right-0 min-h-screen w-[70%] bg-white/5 backdrop-blur-lg
            p-8 flex flex-col z-50 transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"} sm:hidden
          `}
          >
            <button
              onClick={toggleMenu}
              className="self-end mb-16"
              aria-label="Close menu"
            >
              <img src={closeIcon} alt="" className="w-8 h-8" />
            </button>

            <ul className="flex flex-col gap-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `flex items-center gap-3 text-white uppercase tracking-wider
                      ${isActive ? "border-r-4 border-white" : ""}`
                    }
                  >
                    <span className="font-bold">{item.number}</span>
                    <span className="text-lg">{item.text}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
