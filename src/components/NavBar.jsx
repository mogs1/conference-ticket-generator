import logo from "../assets/logo.png"
import arrow from "../assets/line.svg"

const NavBar = () => {
  return (
    <nav className="flex max-w-[1200px] mx-auto py-3 px-4 justify-between items-center rounded-3xl border-[#197686] bg-[#05252c50] backdrop-blur-[2px]">
      <img src={logo} alt="Logo" />

      <ul className="flex items-center gap-4 text-[#B3B3B3] cursor-pointer">
        <li>Events</li>
        <li>My Tickets</li>
        <li>About Project</li>
      </ul>

      <button className="bg-white text-black flex items-center py-4 px-6 gap-2 rounded-xl border-yellow-900 cursor-pointer">
        MY TICKETS <img src={arrow} alt="Arrow" />
      </button>
    </nav>
  )
}

export default NavBar
