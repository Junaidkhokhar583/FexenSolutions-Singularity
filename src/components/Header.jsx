import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="px-16 py-4 z-50 fixed w-[stretch] bg-black border-b-2 border-s border-gray-900">
        <nav className="flex w-full md:justify-around justify-between items-center">
          <a href="#">
            <img src="/logo.png" alt="logo.png"></img>
          </a>

          <ul className="hidden md:flex md:gap-x-6">
            <a href="#">
              <li className="hover:text-secondary">Team</li>
            </a>
            <a href="#">
              <li className="hover:text-secondary">Ecosystem</li>
            </a>
            <a href="#">
              <li className="hover:text-secondary"> White-paper</li>
            </a>
          </ul>

         <span className="hidden md:flex gap-x-3 rounded-lg shadow hover:text-secondary bg-[#343234] p-2 cursor-pointer"> 
            <img className="w-6 h-6 image-rendering-auto" src="/user2.png" alt="profile.png"></img>
            <a href="#">
            <button className="">
              Dashboard
            </button>
          </a>
          </span>
          <a href="#">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden transition-transform duration-300 ${menuOpen? "rotate-180": "rotate-0"}`}
            >
              {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </a>
        </nav>

<div className={`md:hidden transition-all duration-500 ease-in-out ${menuOpen?"translate-y-4": "translate-y-0"}`}>

        {menuOpen && (   
          <ul className="md:hidden grid gap-y-2 py-4 z-50">
            <a href="#">
              <li className="hover:text-secondary rounded-md border border-s border-gray-700 shadow-md p-2">
                Team
              </li>
            </a>
            <a href="#">
              <li className="hover:text-secondary rounded-md border border-s border-gray-700 shadow-md p-2">
                Ecosystem
              </li>
            </a>
            <a href="#">
              <li className="hover:text-secondary rounded-md border border-s border-gray-700 shadow-md p-2">
                {" "}
                White-paper
              </li>
            </a>
            <span className="justify-center rounded-md shadow-md hover:text-secondary border border-gray-700 border-bs bg-[#343234] p-2 cursor-pointer flex gap-x-1 mt-4">
                <img src="/dashboard.png" alt="user.png" width={12} height={12}></img>
            <a href="#">
              <button className="">
                View Dashboard
              </button>
            </a>
            </span>
          </ul>
        )}

</div>

      </div>
    </>
  );
}
