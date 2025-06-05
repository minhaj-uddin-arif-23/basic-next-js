import Link from "next/link";
import React from "react";
import Button from "../utils/Button";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">MyWebsite</div>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/counter" className="hover:text-blue-600">
              Counter
            </Link>
          </li>
          <li>
            <Button />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
