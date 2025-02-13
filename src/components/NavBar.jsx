import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../assets/logo.png";
import arrow from "../assets/Line.svg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".mobile-menu") && !event.target.closest(".menu-button")) {
        setIsMenuOpen(false);
      }
    };

    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  return (
    <nav className="flex max-w-[1200px] mx-auto py-3 px-4 justify-between items-center font-[JejuMyeongjo] 
                    rounded-3xl border border-[#197686] bg-[#05252c66] backdrop-blur-[2px] relative">
      <img src={logo} alt="Logo" />

      <ul className="sm:flex items-center gap-4 text-[#B3B3B3] cursor-pointer hidden text-lg font-normal">
        <li>
          <NavLink to={'/'}>Events</NavLink>
        </li>
        <li>
          <NavLink to={'/tickets'}>My Tickets</NavLink>
        </li>
        <li>
          <NavLink to={'/about'}>About</NavLink>
        </li>
      </ul>

      <button
        onClick={toggleMenu}
        className="group bg-white text-black inline-flex items-center py-3 px-4 gap-2 
                  sm:py-4 sm:px-6 sm:gap-2 rounded-xl cursor-pointer menu-button
                  duration-200 hover:bg-[#24A0B5] hover:text-[#D9D9D9]">
        MY TICKETS
        <img
          className={`transition-transform duration-300 group-hover:-rotate-45`}
          src={arrow}
          alt="Arrow"
        />
      </button>

      {/* Added a Mobile side menu  */}
      <div
        className={`fixed -inset-y-4 -right-5 bg-[#041E23] h-56 w-64 shadow-xl
                    transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
                    transition-transform duration-300 ease-in-out mobile-menu sm:hidden`}>
        <div className="p-6 space-y-6">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white text-xl cursor-pointer focus:outline-none"
          >
            ✕
          </button>

          <ul className="flex flex-col gap-6  text-white text-lg">
            <li className="p-2 hover:bg-cyan-950">
              <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Events</NavLink>
            </li>
            <li className="p-2 hover:bg-cyan-950">
              <NavLink to="/tickets" onClick={() => setIsMenuOpen(false)}>My Tickets</NavLink>
            </li>
            <li className="p-2 hover:bg-cyan-950">
              <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
