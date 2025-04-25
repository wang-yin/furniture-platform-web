"use client";
import Image from "next/image";
import LOGO from "@/public/images/logo.png";
import { IoSearch } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="bg-white w-full flex items-center justify-between px-2 md:px-10">
        <div>
          <a href="/.">
            <Image src={LOGO} alt="logo" className="w-40" priority></Image>
          </a>
        </div>

        <div className="hidden lg:block">
          <ul className="flex lg:gap-15 xl:gap-30">
            <li>
              <a
                href="#"
                className="relative inline-flex items-center gap-1 after:inline-block after:ml-1 after:align-middle after:content-[''] after:border-t-[0.3em] after:border-r-[0.3em] after:border-l-[0.3em] after:border-b-0 after:border-solid after:border-transparent after:border-t-black"
              >
                新品
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative inline-flex items-center gap-1 after:inline-block after:ml-1 after:align-middle after:content-[''] after:border-t-[0.3em] after:border-r-[0.3em] after:border-l-[0.3em] after:border-b-0 after:border-solid after:border-transparent after:border-t-black"
              >
                沙發
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative inline-flex items-center gap-1 after:inline-block after:ml-1 after:align-middle after:content-[''] after:border-t-[0.3em] after:border-r-[0.3em] after:border-l-[0.3em] after:border-b-0 after:border-solid after:border-transparent after:border-t-black"
              >
                桌子
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative inline-flex items-center gap-1 after:inline-block after:ml-1 after:align-middle after:content-[''] after:border-t-[0.3em] after:border-r-[0.3em] after:border-l-[0.3em] after:border-b-0 after:border-solid after:border-transparent after:border-t-black"
              >
                椅子
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-5">
          <div className="group flex items-center rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <div className="px-1 py-1 rounded-full bg-white lg:bg-gray-100 lg:hover:bg-gray-300">
              <button className="flex items-center cursor-pointer group-hover:-translate-y-0.5">
                <IoSearch size={25} />
              </button>
            </div>
            <input
              type="search"
              className="w-30 outline-0 hidden lg:block lg:hover:bg-gray-200"
              placeholder="搜尋"
            ></input>
            <div className="hidden lg:block lg:ml-2"></div>
          </div>

          <div className="flex hover:bg-gray-200 hover:-translate-y-0.5 transition rounded-full w-8 h-8 items-center justify-center">
            <a href="#">
              <BsCart3 size={20} />
            </a>
          </div>

          <div className="group flex items-center cursor-pointer hover:bg-gray-200 hover:shadow-sm transition duration-200 ease-in-out rounded px-3 py-2">
            <FaUser
              className="text-base align-middle transform transition duration-200 group-hover:-translate-y-0.5"
              size={20}
            />
            <span className="text-sm leading-none hidden lg:block ml-1">
              會員登入
            </span>
          </div>

          <div className="lg:hidden" onClick={() => setIsOpen(true)}>
            <MdOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
