import React from "react";
import Link from "next/link";
import { useState } from "react";
import { MenuIcon, XCircleIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { Roboto_Mono } from "next/font/google";
const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
});

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav>
      <div className="md:flex  justify-between items-center justify-center px-5 py-4 md:py-3 md:pl-9 md:pr-0 xl:pl-10 ">
        <h1
          className={`${roboto_mono.className} text-white text-3xl pr-4 md:p-0 xl:text-4xl`}
        >
          IntelligentForms
        </h1>
        <div className="md:hidden -m-3">
          <button
            className="py-2 px-2 rounded-full outline-none active:scale-50 text-white "
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <XCircleIcon width={40} height={40} />
            ) : (
              <MenuIcon width={40} height={40} />
            )}
          </button>
        </div>
        {/* nav cu meniu */}
        <div
          className={` md:inline  space-x-7 text-lg text-white bg-bg-nav py-5 px-5 md:rounded-l-3xl ${
            roboto_mono.className
          } xl:text-xl ${navbar ? "block h-screen" : "hidden"}`}
        >
          <button>
            <Link href="#footer" />
            Home
          </button>
          <button>
            <Link href="#footer" />
            Features
          </button>
          <button>
            <Link href="#footer" />
            Subscription
          </button>
          <button>
            <Link href="#footer" />
            Contact
          </button>
          <button>
            <Link href="#footer" />
            Sign In
          </button>
          <button>
            <Link href="#footer" />
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
//overview, features, pricing, contact
