
import { CiTwitter } from "react-icons/ci"
import { FaInstagram } from "react-icons/fa"
import { CiLinkedin } from "react-icons/ci"
import { FaFacebookSquare } from "react-icons/fa"
import { NavLink } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-black text-white pt-8 mt-[100px] pb-12">
      <div className="border-b border-gray-600">
        <div className="container mx-auto px-12 pb-16 md:ml-[100px]">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h1 className="font-bold text-3xl text-white mb-4">
                <i>
                  <b className="text-pink-500 text-3xl">L</b>uxora
                </i>
              </h1>
              <p className="text-xs opacity-65 leading-relaxed max-w-xs">
                Luxora is a demo e-commerce platform showcasing a variety of product categories. All product categories
                and listings are mock data used for educational and development purposes.
              </p>
            </div>

            {/* Quick Links Section */}
            <div className="lg:col-span-1">
              <h2 className="font-bold text-lg mb-6">Quick Links</h2>
              <ul className="space-y-3">
                <li>
                  <NavLink
                    to="/"
                    className="opacity-65 text-sm hover:opacity-85 hover:underline transition-all duration-200"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="opacity-65 text-sm hover:opacity-85 hover:underline transition-all duration-200"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/product"
                    className="opacity-65 text-sm hover:opacity-85 hover:underline transition-all duration-200"
                  >
                    Book List
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="opacity-65 text-sm hover:opacity-85 hover:underline transition-all duration-200"
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <a
                    href="#"
                    className="opacity-65 text-sm hover:opacity-85 hover:underline transition-all duration-200"
                  >
                    Privacy Policy / Terms & conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="lg:col-span-1">
              <h2 className="font-bold text-lg mb-6">Contact Us</h2>
              <div className="space-y-3">
                <p className="opacity-65 hover:opacity-85 text-sm transition-opacity duration-200">
                  Email: madhumita011das@gmail.com
                </p>
                <p className="opacity-65 hover:opacity-85 text-sm transition-opacity duration-200">
                  Call: +91 8653424874
                </p>
                <p className="opacity-65 hover:opacity-85 text-sm transition-opacity duration-200">
                  Address: Tamluk, West Bengal
                </p>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="lg:col-span-1">
              <h2 className="font-bold text-lg mb-6">Follow Us</h2>
              <div className="flex flex-row gap-4">
                <a
                  href="https://twitter.com"
                  className="opacity-65 hover:opacity-85 transition-opacity duration-200"
                  aria-label="Follow us on Twitter"
                >
                  <CiTwitter className="text-2xl" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="opacity-65 hover:opacity-85 transition-opacity duration-200"
                  aria-label="Follow us on Instagram"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a
                  href="https://www.linkedin.com/feed/"
                  className="opacity-65 hover:opacity-85 transition-opacity duration-200"
                  aria-label="Follow us on LinkedIn"
                >
                  <CiLinkedin className="text-xl" />
                </a>
                <a
                  href="https://www.facebook.com/"
                  className="opacity-65 hover:opacity-85 transition-opacity duration-200"
                  aria-label="Follow us on Facebook"
                >
                  <FaFacebookSquare className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-500 mt-8 px-6">
        © {new Date().getFullYear()} Luxora. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
