import React from "react";
import Link from "next/link";
import { useState } from "react";
import { MenuIcon, XCircleIcon } from "@heroicons/react/solid";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="sticky top-0 z-50">
      <nav className=" w-full  bg-rata-bg  top-0 left-0 right-0  ">
        {/* ------mobile menu----------------- */}
        <div className="justify-between px-5  md:items-center md:flex md:px-20 ">
          <div className="flex py-5  md:block items-center justify-between ">
            <div className="font-bold text-3xl cursor-pointer text-white ">
              <Link href="/">
                <h2>IntelligentForms</h2>
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
                navbar ? "p-12 md:p-0 block " : "hidden"
              }`}
            >
              <div className=" h-screen md:h-auto  text-white items-center justify-center md:flex ">
                <button className="block m-auto  md:m-0  pb-4 text-xl text-white py-2 md:px-6  cursor-pointer active:scale-50 hover:underline ">
                  <Link href="/" onClick={() => setNavbar(false)}>
                    Home
                  </Link>
                </button>
                <button className="block m-auto md:m-0 pb-4 text-xl text-white py-2 md:px-6  cursor-pointer active:scale-50 hover:underline">
                  <Link href="#features" onClick={() => setNavbar(false)}>
                    Features
                  </Link>
                </button>
                <button className="block m-auto md:m-0 pb-4 text-xl text-white py-2 md:px-6  cursor-pointer active:scale-50 hover:underline ">
                  <Link href="#subscription" onClick={() => setNavbar(false)}>
                    Subscription
                  </Link>
                </button>
                <button className="block m-auto  md:m-0 pb-4 text-xl text-white py-2 md:px-6  cursor-pointer active:scale-50 hover:underline">
                  <Link href="#contact" onClick={() => setNavbar(false)}>
                    Contact
                  </Link>
                </button>
                <button className="block m-auto  md:m-0 pb-4 text-xl text-white py-2 md:px-6  cursor-pointer active:scale-50 hover:underline">
                  <Link href="/" onClick={() => setNavbar(false)}>
                    Sign In
                  </Link>
                </button>
                <button className="block m-auto md:m-0  pb-4 text-xl text-white py-2 md:px-6  cursor-pointer active:scale-50 hover:underline">
                  <Link href="/" onClick={() => setNavbar(false)}>
                    Register
                  </Link>
                </button>
              </div>
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
