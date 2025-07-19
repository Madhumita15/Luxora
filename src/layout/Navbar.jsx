

import { useState } from "react"
import { MapPin } from "lucide-react" 
import { FaCaretDown } from "react-icons/fa"
import { IoCartOutline } from "react-icons/io5"
import { NavLink } from "react-router-dom" 
import { RxCross1 } from "react-icons/rx"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"
import { getCartContext } from "../context/CartContext"

function Navbar({ location, getLocation, dropdown, setDropdown }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) 

  const{cartData} = getCartContext();
  console.log(cartData.length)

  const handleDropdown = () => {
    setDropdown(!dropdown)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <div className="shadow-md">
        <div className="relative flex items-center justify-between h-[70px] px-4 md:px-8 lg:px-16">
          {/* Left Section: Logo and Location */}
          <div className="flex items-center gap-x-8 lg:ml-[90px]">
            {" "}
            {/* Logo */}
            <div>
              <NavLink to={"/"}>
                <h1 className="text-3xl font-bold">
                  <i>
                    <span className="text-pink-500 text-4xl">L</span>
                    <span className="text-fuchsia-950">uxora</span>
                  </i>
                </h1>
              </NavLink>
            </div>
            {/* Location and Dropdown */}
            <div className="relative flex items-center space-x-1 lg:ml-[30px]">
              <MapPin className="text-pink-700" />
              <span>
                {location ? (
                  <div className="flex flex-col text-center text-sm leading-tight">
                    <span>{location.county}</span>
                    <span>{location.state}</span>
                  </div>
                ) : (
                  "Add address"
                )}
              </span>
              <FaCaretDown className="text-pink-700 text-2xl cursor-pointer" onClick={handleDropdown} />
              {dropdown && (
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 md:left-auto md:right-0 shadow-2xl bg-white rounded-lg w-[250px] p-2 pb-4 z-50">
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center p-5">
                      <h1 className="text-lg">Change Location</h1>
                      <RxCross1 className="text-lg cursor-pointer" onClick={handleDropdown} />
                    </div>
                    <button
                      className="bg-pink-700 w-[150px] h-[40px] text-white rounded-lg hover:bg-pink-600 focus:ring-3 focus:ring-pink-500 text-center mx-auto"
                      onClick={getLocation}
                    >
                      Detect My Location
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Navigation (hidden on mobile) */}
          <nav className="hidden md:flex items-center gap-x-10 lg:mr-20">
            <ul className="flex gap-8 text-lg">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `${isActive ? " border-b-4 transition-all border-pink-700 hover:text-pink-700 font-bold" : ""}`
                }
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  `${isActive ? " border-b-4 transition-all border-pink-700 hover:text-pink-700 font-bold" : ""}`
                }
              >
                <li>About</li>
              </NavLink>
              <NavLink
                to={"/products"}
                className={({ isActive }) =>
                  `${isActive ? " border-b-4 transition-all border-pink-700 hover:text-pink-700 font-bold" : ""}`
                }
              >
                <li>Products</li>
              </NavLink>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  `${isActive ? " border-b-4 transition-all border-pink-700 hover:text-pink-700 font-bold" : ""}`
                }
              >
                <li>Contact</li>
              </NavLink>
            </ul>
            <NavLink to={"/cart"} className="relative">
              <IoCartOutline className="text-2xl" />
              <span className="absolute -top-[15px] -right-2 text-2xl font-bold text-pink-700">{cartData.length}</span>
            </NavLink>
            <div>
              <SignedOut>
                <span className="bg-pink-700 text-white px-3 rounded-md py-2 hover:bg-pink-600 focus:ring-4 focus:ring-pink-500">
                  <SignInButton />
                </span>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </nav>

          {/* Mobile Menu Button (visible on mobile) */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(true)} className="text-fuchsia-950">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-white z-50 flex flex-col items-center py-8">
              <div className="w-full flex justify-end px-4 mb-8">
                <button onClick={closeMobileMenu} className="text-fuchsia-950">
                  <RxCross1 className="text-2xl" />
                </button>
              </div>
              <ul className="flex flex-col gap-6 text-xl mb-8">
                <NavLink
                  to={"/"}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `${isActive ? " border-b-4 transition-all border-pink-700 hover:text-pink-700 font-bold" : ""}`
                  }
                >
                  <li>Home</li>
                </NavLink>
                <NavLink
                  to={"/about"}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `${isActive ? " border-b-4 transition-all border-pink-700 hover:text-pink-700 font-bold" : ""}`
                  }
                >
                  <li>About</li>
                </NavLink>
                <NavLink
                  to={"/products"}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `${isActive ? " border-b-4 transition-all border-pink-700 hover:text-pink-700 font-bold" : ""}`
                  }
                >
                  <li>Products</li>
                </NavLink>
                <NavLink
                  to={"/contact"}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `${isActive ? " border-b-4 transition-all border-pink-700 hover:text-pink-700 font-bold" : ""}`
                  }
                >
                  <li>Contact</li>
                </NavLink>
              </ul>
              <NavLink to={"/cart"} onClick={closeMobileMenu} className="relative mb-8">
                <IoCartOutline className="text-3xl" />
                <span className="absolute -top-2 -right-2 text-3xl font-bold text-pink-700">{cartData.length}</span>
              </NavLink>
              <div>
                <SignedOut>
                  <span className="bg-pink-700 text-white px-4 py-3 rounded-md hover:bg-pink-600 focus:ring-4 focus:ring-pink-500">
                    <SignInButton />
                  </span>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar

