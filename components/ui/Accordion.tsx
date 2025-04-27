import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

export default function Accordion() {
  const [openStyle, setOpenStyle] = useState<boolean>(false);
  const [openMaterial, setOpenMaterial] = useState<boolean>(false);

  return (
    <>
      <div className="border-t-1 mt-8 py-4 hover:underline cursor-pointer">
        <button
          type="button"
          className="flex w-full hover:underline cursor-pointer"
          onClick={() => setOpenStyle((prev) => !prev)}
        >
          <span className="font-bold">產品風格</span>
          <FaAngleDown
            className={`ml-auto transition-transform duration-300 ease-in-out ${openStyle ? "rotate-180" : "rotate-0"}`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          openStyle ? "opacity-100 max-h-40" : "opacity-0 max-h-0"
        }`}
      >
        <p className="text-gray-500 leading-7 mb-4">極簡北歐、現代工業風</p>
      </div>

      <div
        className="border-t-1 py-4 hover:underline cursor-pointer"
        onClick={() => setOpenMaterial((prev) => !prev)}
      >
        <button type="button" className="flex w-full cursor-pointer">
          <span className="font-bold">產品材質</span>
          <FaAngleDown
            className={`ml-auto transition-transform duration-300 ease-in-out ${openMaterial ? "rotate-180" : "rotate-0"}`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          openMaterial ? "opacity-100 max-h-40" : "opacity-0 max-h-0"
        }`}
      >
        <p className="text-gray-500 leading-7 mb-4">高密度實木板搭配實木桌腳</p>
      </div>
    </>
  );
}
