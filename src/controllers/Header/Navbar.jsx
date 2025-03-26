import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CiSearch, CiStar } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { productCart } = useSelector((state) => state);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-wrap items-center justify-between p-4 w-full mx-auto">
      {/* Logo */}
      <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img className="object-cover" src="/FASCO.png" alt="Logo" />
      </a>

      <div className="flex md:hidden">
        <button
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          ☰
        </button>
      </div>

      <div
        className={`w-full md:flex md:w-auto ${
          isMenuOpen ? "block" : "hidden"
        }`}
        id="navbar-sticky"
      >
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
          <li>
            <a
              href="/"
              className="block py-2 px-3 text-lg text-eBlue-dark md:p-0"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/shop"
              className="block py-2 px-3 text-lg text-eBlue-dark md:p-0"
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="/products"
              className="block py-2 px-3 text-lg text-eBlue-dark md:p-0"
            >
              Products
            </a>
          </li>
          <li className="flex items-center gap-x-1">
            <a
              href="/pages"
              className="block py-2 px-3 text-lg text-eBlue-dark md:p-0"
            >
              Pages
            </a>
            <MdKeyboardArrowDown />
          </li>
        </ul>

        <div className="flex md:hidden items-center justify-center gap-x-4 mt-4">
          <CiSearch size={20} />
          <GoPerson size={20} />
          <CiStar size={20} />

          <Link to="/cart">
            <div className="relative">
              <LiaShoppingBagSolid size={24} />
              {productCart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {productCart.length}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-between gap-x-4">
        <CiSearch size={20} />
        <GoPerson size={20} />
        <CiStar size={20} />
        <Link to="/cart">
          <div className="relative">
            <LiaShoppingBagSolid size={24} />
            {productCart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {productCart.length}
              </span>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
