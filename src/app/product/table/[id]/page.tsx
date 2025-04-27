"use client";

import Image from "next/image";
import product1 from "@/public/images/product1.png";
import product2 from "@/public/images/product1-1.png";

import { MdNavigateNext } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

import { useState } from "react";
import Sidebar from "@/components/ui/Sidebar";

export default function Cart() {
  const [openSection, setOpenSection] = useState<"info" | "size" | null>(null);
  const [quantity, setQuantity] = useState<number>(0);

  return (
    <>
      <div className="md:flex md:px-10 md:py-20 max-w-7xl mx-auto lg:gap-3">
        <div className="md:flex md:flex-col md:flex-1/2 md:max-h-[32.8rem]">
          <div className="relative bg-blue-400 md:flex md:items-center md:rounded-2xl md:overflow-hidden md:h-5/6">
            <Image src={product1} alt="product"></Image>

            <div className="absolute top-1/2 flex justify-between w-full px-4">
              <div className="rounded-full bg-white w-8 h-8 flex items-center justify-center cursor-pointer">
                <GrFormPrevious size={30} />
              </div>
              <div className="rounded-full bg-white w-8 h-8 flex items-center justify-center cursor-pointer">
                <MdOutlineNavigateNext size={30} />
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:mt-5 md:justify-between">
            <Image
              src={product2}
              alt="product"
              className="w-25 h-25 bg-amber-500 rounded-lg"
            ></Image>
            <Image
              src={product2}
              alt="product"
              className="w-25 h-25 bg-amber-500 rounded-lg"
            ></Image>
            <Image
              src={product2}
              alt="product"
              className="w-25 h-25 bg-amber-500 rounded-lg"
            ></Image>
          </div>
        </div>
        <div className="px-5 mt-5 md:flex-1/2">
          <div>
            <h1 className="text-2xl font-bold">現代極簡實木桌</h1>
            <p className="mt-2 text-gray-500 leading-7">
              這款桌子以簡約設計為核心，搭配俐落線條與深色木質質感，無論是作為餐桌、書桌或會議桌都能完美融入各種空間。四隻圓錐形桌腳設計，提供穩固支撐，展現北歐風格的經典魅力。
            </p>
            <div>
              <div
                className="border-t-1 mt-8 py-8 hover:underline cursor-pointer"
                onClick={() => setOpenSection("info")}
              >
                <button type="button" className="flex w-full cursor-pointer">
                  <span className="text-lg font-bold">產品資訊</span>
                  <MdNavigateNext className="ml-auto" size={30} />
                </button>
              </div>
              <div
                className="border-t-1 py-8 hover:underline cursor-pointer"
                onClick={() => setOpenSection("size")}
              >
                <button type="button" className="flex w-full cursor-pointer">
                  <span className="text-lg font-bold">尺寸</span>
                  <MdNavigateNext className="ml-auto" size={30} />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 flex md:mt-3 lg:my-5">
            <p className="text-2xl font-bold">$123</p>

            {/* 折扣 */}
            <div className="bg-black py-0.5 px-2 rounded-md ml-6 flex items-center">
              <p className="text-white font-bold text-sm">50%</p>
            </div>

            {/* 原價格 */}
            <div className="flex items-end ml-auto">
              <p className="text-gray-500 font-bold line-through text-lg">
                $246
              </p>
            </div>
          </div>

          <div className="md:flex md:gap-2 lg:gap-5">
            <div className="w-full flex justify-between bg-Light-grayish-blue mt-10 py-2 px-10 rounded-lg md:flex-1/2 md:mt-5 lg:py-4">
              <button
                className="cursor-pointer"
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 0))}
              >
                <FaMinus />
              </button>
              <span className="font-bold w-8 text-center">{quantity}</span>
              <button
                className="cursor-pointer"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                <FaPlus />
              </button>
            </div>
            <button className="bg-blue-700 text-white flex items-center justify-center py-2 rounded-lg w-full mt-5 cursor-pointer font-bold md:py-0 md:flex-1/2">
              <IoCartOutline className="mr-1" size={18} />
              加入購物車
            </button>
          </div>
        </div>
      </div>
      <Sidebar openSection={openSection} setOpenSection={setOpenSection} />
    </>
  );
}
