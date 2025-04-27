import { MobileMenuProps } from "@/types/menu";
import { MdNavigateNext } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { GrContact } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import Link from "next/link";

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  return (
    <>
      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <div
            className="fixed inset-0 bg-black opacity-30 z-40"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* 側邊欄 */}
          <div
            className={`fixed top-0 right-0 h-full w-64 px-5 py-5 bg-white z-50 transform transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end">
              <button
                className="text-2xl cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>
            <div className="space-y-4 mt-10">
              <Link
                href="/product"
                className="flex justify-between items-center w-full text-3xl cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <h3 className="text-2xl font-bold">新品</h3>
                <MdNavigateNext />
              </Link>
              <Link
                href="/product/sofa"
                className="flex justify-between items-center w-full text-3xl cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <h3 className="text-2xl font-bold">沙發</h3>
                <MdNavigateNext />
              </Link>
              <Link
                href="/product/table"
                className="flex justify-between items-center w-full text-3xl cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <h3 className="text-2xl font-bold">桌子</h3>
                <MdNavigateNext />
              </Link>
              <Link
                href="/product/chair"
                className="flex justify-between items-center w-full text-3xl cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <h3 className="text-2xl font-bold">椅子</h3>
                <MdNavigateNext />
              </Link>
            </div>

            <div className="mt-20">
              <h1 className="text-2xl font-medium text-gray-500">
                成為會員，體驗優質產品並掌握相關動態。
              </h1>
              <div className="flex gap-3 mt-8">
                <Link
                  href="/register"
                  className="rounded-full py-1 flex-1 bg-black text-white cursor-pointer flex justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  註冊
                </Link>
                <Link
                  href="/login"
                  className="rounded-full py-1 flex-1 outline cursor-pointer flex justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  登入
                </Link>
              </div>

              <div className="mt-30 flex flex-col gap-6">
                <Link
                  href="/cart"
                  className="flex gap-3 text-2xl font-medium cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <BsCart3 />
                  <span>購物車</span>
                </Link>
                <Link
                  href="/about"
                  className="flex gap-3 text-2xl font-medium cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <GrContact />
                  <span>關於我</span>
                </Link>
                <Link
                  href="/"
                  className="flex gap-3 text-2xl font-medium cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <BsFillTelephoneFill />
                  <span>聯絡我</span>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
