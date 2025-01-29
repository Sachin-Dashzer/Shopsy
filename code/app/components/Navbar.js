import React from "react";
import Link from "next/link";

// icons
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 left-0 w-full bg-slate-900 text-white">
        <div className="topnav w-100 h-7 border-b-[1px] border-slate-600 px-10 py-1">
          <div className="flex h-full w-full items-end justify-between">
            <p className="text-xs tracking-widest">
              Get Our New Exclusive Offers Now...
            </p>
            <div className="social-icons">
              <ul className="flex gap-5">
                <li>
                  <Link className="text-md" href="#">
                    <FaYoutube />
                  </Link>
                </li>
                <li>
                  <Link className="text-md" href="#">
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link className="text-md" href="#">
                    <FaInstagram />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mainnav h-16 w-full ">
          <div className="flex h-full w-full items-center justify-between px-10 ">

            <div className="headerLogo">
                <h2 className="font-logo text-yellow-500 text-[38px] font-extrabold">SHOPSY</h2>
            </div>


            <div className="navlinks flex gap-20">
                <ul className="flex gap-10">
                    <li className="text-md font-semibold">
                        <Link href="#">Home</Link>
                    </li>
                    <li className="text-md font-semibold">
                        <Link href="#">About</Link>
                    </li>
                    <li className="text-md font-semibold">
                        <Link href="#">Menus</Link>
                    </li>
                    <li className="text-md font-semibold">
                        <Link href="#">Blogs</Link>
                    </li>
                    <li className="text-md font-semibold">
                        <Link href="#">Contact</Link>
                    </li>
                </ul>

                <ul className="flex gap-6">
                    <li>
                        <Link href="#"><FaUser /></Link>
                    </li>
                    <li>
                        <Link href="#"><FaShoppingCart /></Link>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
