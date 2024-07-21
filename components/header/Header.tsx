'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Button from "../button/Button";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex h-full gap-16">
        {NAV_LINKS.map((link) => (
          <li key={link.key} className="px-4">
            <Link href={link.href} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Login Button (Desktop) */}
      <div className="hidden lg:flexCenter">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      {/* Menu Icon (Mobile) */}
      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 right-0 bottom-0 bg-white bg-opacity-95 py-4 transition-transform transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} lg:hidden`}>
        <div className="flex justify-end px-4">
          <IoCloseSharp
            size={32}
            className="cursor-pointer text-red-500"
            onClick={toggleMenu}
          />
        </div>
        <ul className="flex flex-col items-center gap-8 mt-4">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="py-2">
              <Link href={link.href} className="regular-16 text-gray-700 cursor-pointer transition-all hover:font-bold" onClick={toggleMenu}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
