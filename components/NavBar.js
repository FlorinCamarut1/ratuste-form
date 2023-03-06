import React from "react";
import Link from "next/link";
import { useState } from "react";
import { MenuIcon, XCircleIcon } from "@heroicons/react/solid";
import Image from "next/image";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav>
      <div>
        <h1>ItelligentForms</h1>
        <div>
          <Image />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
//overview, features, pricing, contact
