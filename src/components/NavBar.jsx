import { useState } from "react"
import { NavLink } from "react-router-dom"
import "./NavBar.css"
import logo from "../assets/logo.png"
import arrow from "../assets/line.svg"

const NavBar = () => {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="flex max-w-[1200px] mx-auto py-3 px-4 justify-between items-center 
                    rounded-3xl border border-[#197686] bg-[#05252c40] backdrop-blur-[2px]">
      <img 
      src={logo} 
      alt="Logo" />

      <ul className="sm:flex items-center gap-4 text-[#B3B3B3] cursor-pointer hidden">
        <li>
            <NavLink to={'/'}>
            Events
            </NavLink>
        </li>
        <li>
            <NavLink to={'/tickets'}>
            My Tickets
            </NavLink>
        </li>
        <li>
            <NavLink to={'/about'}>
            About
            </NavLink>
        </li>
      </ul>

      <button className="group bg-white text-black inline-flex items-center py-3 px-4 gap-2 
                        sm:py-4 sm:px-6 sm:gap-2 rounded-xl cursor-pointer
                        duration-200 hover:bg-[#24A0B5] hover:text-[#D9D9D9]">
        MY TICKETS 
        <img
        className="transition-transform duration-200 rotate-0 group-hover:rotate-[-60deg]"
        src={arrow} 
         alt="Arrow" />
      </button>
    </nav>
  )
}

export default NavBar
