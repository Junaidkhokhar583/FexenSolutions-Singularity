import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="px-16 py-4 z-50 fixed w-full bg-black border-b border-gray-900">
        <nav className="flex w-full md:justify-around justify-between items-center">
          <a href="#">
            <img src="/logo.png" alt="logo.png" />
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex md:gap-x-6">
            <li className="hover:text-[#26ef99] transition-colors duration-300 cursor-pointer">
              <a href="#">Team</a>
            </li>
            <li className="hover:text-[#26ef99] transition-colors duration-300 cursor-pointer">
              <a href="#">Ecosystem</a>
            </li>
            <li className="hover:text-[#26ef99] transition-colors duration-300 cursor-pointer">
              <a href="#">White-paper</a>
            </li>
          </ul>

          {/* Desktop Dashboard */}
          <span className="hidden md:flex gap-x-3 rounded-lg bg-[#343234] p-2 cursor-pointer 
                           transition-all duration-300 hover:text-[#26ef99] hover:shadow-lg">
            <img src="/dashboard.png" alt="profile.png" width={18} height={18} />
            <a href="#">
              <button>Dashboard</button>
            </a>
          </span>

          {/* Mobile Toggle */}
          <button
            className="md:hidden transition-transform duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div
              className={`transition-transform duration-300 ${
                menuOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </div>
          </button>
        </nav>

        {/* Mobile Menu with Animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen
              ? "max-h-96 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4"
          }`}
        >
          <ul className="grid gap-y-2 py-4">
            <li className="hover:text-[#26ef99] rounded-md border border-gray-700 shadow-md p-2 
                           transition-all duration-300 hover:translate-x-1">
              <a href="#">Team</a>
            </li>
            <li className="hover:text-[#26ef99] rounded-md border border-gray-700 shadow-md p-2 
                           transition-all duration-300 hover:translate-x-1">
              <a href="#">Ecosystem</a>
            </li>
            <li className="hover:text-[#26ef99] rounded-md border border-gray-700 shadow-md p-2 
                           transition-all duration-300 hover:translate-x-1">
              <a href="#">White-paper</a>
            </li>

            <span className="flex justify-center gap-x-2 mt-4 rounded-md shadow-md 
                             border border-gray-700 bg-[#343234] p-2 cursor-pointer
                             transition-all duration-300 hover:text-[#26ef99] hover:shadow-lg">
              <img src="/dashboard.png" alt="user.png" width={12} height={12} />
              <a href="#">
                <button>View Dashboard</button>
              </a>
            </span>
          </ul>
        </div>
      </div>
    </>
  );
}