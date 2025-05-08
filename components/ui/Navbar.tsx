"use client";
import Image from "next/image";
import LOGO from "@/public/images/logo.png";
import { IoSearch } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { MdLogout } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    useAuthStore.getState().setLoggedIn(false);
    router.push("/");
  };

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const setLoggedIn = useAuthStore((state) => state.setLoggedIn);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <>
      <div className="bg-white w-full flex items-center justify-between px-2 md:px-10">
        <div>
          <Link href="/.">
            <Image src={LOGO} alt="logo" className="w-40" priority></Image>
          </Link>
        </div>

        <div className="hidden lg:block">
          <ul className="flex lg:gap-15 xl:gap-30">
            <li>
              <Link
                href="/product"
                className="relative inline-flex items-center gap-1 after:inline-block after:ml-1 after:align-middle after:content-[''] after:border-t-[0.3em] after:border-r-[0.3em] after:border-l-[0.3em] after:border-b-0 after:border-solid after:border-transparent after:border-t-black"
              >
                新品
              </Link>
            </li>
            <li>
              <Link
                href="/product/sofa"
                className="relative inline-flex items-center gap-1 after:inline-block after:ml-1 after:align-middle after:content-[''] after:border-t-[0.3em] after:border-r-[0.3em] after:border-l-[0.3em] after:border-b-0 after:border-solid after:border-transparent after:border-t-black"
              >
                沙發
              </Link>
            </li>
            <li>
              <Link
                href="/product/table"
                className="relative inline-flex items-center gap-1 after:inline-block after:ml-1 after:align-middle after:content-[''] after:border-t-[0.3em] after:border-r-[0.3em] after:border-l-[0.3em] after:border-b-0 after:border-solid after:border-transparent after:border-t-black"
              >
                桌子
              </Link>
            </li>
            <li>
              <Link
                href="/product/chair"
                className="relative inline-flex items-center gap-1 after:inline-block after:ml-1 after:align-middle after:content-[''] after:border-t-[0.3em] after:border-r-[0.3em] after:border-l-[0.3em] after:border-b-0 after:border-solid after:border-transparent after:border-t-black"
              >
                椅子
              </Link>
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
            <Link href="/cart">
              <BsCart3 size={20} />
            </Link>
          </div>

          {isLoggedIn ? (
            <Link
              href="/"
              onClick={handleLogout}
              className="hidden group lg:flex items-center cursor-pointer hover:bg-gray-200 hover:shadow-sm transition duration-200 ease-in-out rounded px-3 py-2"
            >
              <MdLogout
                className="text-base align-middle transform transition duration-200 group-hover:-translate-y-0.5"
                size={20}
              />
              <span className="text-sm leading-none hidden lg:block ml-1">
                會員登出
              </span>
            </Link>
          ) : (
            <Link
              href="/login"
              className="hidden group lg:flex items-center cursor-pointer hover:bg-gray-200 hover:shadow-sm transition duration-200 ease-in-out rounded px-3 py-2"
            >
              <FaUser
                className="text-base align-middle transform transition duration-200 group-hover:-translate-y-0.5"
                size={20}
              />
              <span className="text-sm leading-none hidden lg:block ml-1">
                會員登入
              </span>
            </Link>
          )}

          <div className="lg:hidden" onClick={() => setIsOpen(true)}>
            <MdOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
