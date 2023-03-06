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
      <div className="flex  justify-between items-center justify-center px-5 py-4 md:py-3 md:pl-9 md:pr-0 ">
        <h1
          className={`${roboto_mono.className} text-white text-3xl pr-4 md:p-0`}
        >
          IntelligentForms
        </h1>
        <div className="md:hidden">
          <button
            className="py-3 px-3 rounded-full outline-none active:scale-50 text-white"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <XCircleIcon width={30} height={30} />
            ) : (
              <MenuIcon width={30} height={30} />
            )}
          </button>
        </div>
        {/* nav cu meniu */}
        <div
          className={`hidden md:inline  space-x-7 text-lg text-white bg-bg-nav py-5 px-5 rounded-l-3xl ${roboto_mono.className} mt-1`}
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
