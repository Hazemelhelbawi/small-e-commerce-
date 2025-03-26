import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function Footer() {
  return (
    <>
      <div className=" md:flex md:flex-row flex flex-col items-center md:justify-between p-4 w-full mx-auto border-t-2 ">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img className=" object-cover" src="/FASCO.png" alt="Logo" />
        </a>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto `}
          id="Footer-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-lg  text-black bg-eBlue-baby rounded md:bg-transparent  md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/shop"
                className="block py-2 px-3 text-lg  text-eBlue-dark rounded  md:p-0 "
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="block py-2 px-3 text-lg  text-eBlue-dark rounded  md:p-0 "
              >
                Products
              </a>
            </li>
            <li className="flex items-center gap-x-1">
              <a
                href="/pages"
                className="block py-2 px-3 text-lg  text-eBlue-dark rounded  md:p-0 "
              >
                Pages
              </a>
              <span>
                <MdKeyboardArrowDown />
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <span>Copyright © 2022 FASCO . All Rights Reseved.</span>
      </div>
    </>
  );
}

export default Footer;
