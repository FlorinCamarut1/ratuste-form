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
      <div className="flex md:inline justify-between items-center justify-center px-5 py-5 md:py-0 md:px-0">
        <h1 className={`${roboto_mono.className} text-white text-2xl`}>
          IntelligentForms
        </h1>
        <div className="md:hidden">
          <button
            className="py-2 px-2 rounded-full outline-none active:scale-50 text-white"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <XCircleIcon width={30} height={30} />
            ) : (
              <MenuIcon width={30} height={30} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
//overview, features, pricing, contact
