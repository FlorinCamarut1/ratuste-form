import React from "react";
import Link from "next/link";
import { useState } from "react";
import { MenuIcon, XCircleIcon } from "@heroicons/react/solid";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="sticky top-0">
      <nav className=" w-full  bg-rata-bg  top-0 left-0 right-0 z-10 ">
        {/* ------mobile menu----------------- */}
        <div className="justify-between px-5  md:items-center md:flex md:px-4">
          <div className="flex py-5  md:block items-center justify-between ">
            <div className="font-bold text-xl cursor-pointer ">
              <Link href="/">
                <h2>LOGO</h2>
              </Link>
            </div>
            {/* button mobile-nav */}
            <div className="md:hidden ">
              <button
                className=" p-1 text-white rounded-full hover:shadow-md active:scale-50 "
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <XCircleIcon className="h-9 " />
                ) : (
                  <MenuIcon className="h-9 " />
                )}
              </button>
            </div>
          </div>
          <div>
            <div
              className={` md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className=" h-screen md:h-auto text-white items-center justify-center md:flex">
                <li className="pb-4 text-xl text-white py-2 md:px-6 text-center cursor-pointer active:scale-50 hover:underline ">
                  <Link href="#overview" onClick={() => setNavbar(!navbar)}>
                    Overview
                  </Link>
                </li>
                <li className="pb-4 text-xl text-white py-2 md:px-6 text-center cursor-pointer active:scale-50 hover:underline">
                  <Link href="#features" onClick={() => setNavbar(!navbar)}>
                    Features
                  </Link>
                </li>
                <li className="pb-4 text-xl text-white py-2 md:px-6 text-center cursor-pointer active:scale-50 hover:underline">
                  <Link href="#pricing" onClick={() => setNavbar(!navbar)}>
                    Pricing
                  </Link>
                </li>
                <li className="pb-4 text-xl text-white py-2 md:px-6 text-center cursor-pointer active:scale-50 hover:underline">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* End mobile menu */}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
//overview, features, pricing, contact
