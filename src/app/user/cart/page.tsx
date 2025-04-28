import Image from "next/image";
import product from "@/public/images/product1.png";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import ShippingMethod from "@/components/forms/ShippingMethod";
import PaymentMethod from "@/components/forms/PaymentMethod";
import DiscountCode from "@/components/forms/DiscountCode";

export default function Cart() {
  return (
    <>
      <div className="px-8 py-10">
        <h1 className="font-bold text-2xl">購物車</h1>
        <div className="lg:flex">
          <table className="mt-5 border-collapse w-full table-fixed ">
            <thead className="border-t border-b ">
              <tr>
                <th className="py-2"></th>
                <th className="hidden py-2 lg:table-cell"></th>
                <th className="py-2">名稱</th>
                <th className="hidden py-2 sm:table-cell">單價</th>
                <th className="py-2">數量</th>
                <th className="py-2">總價</th>
              </tr>
            </thead>
            <tbody className="text-center border-b">
              <tr>
                <td className="py-3 md:text-2xl">
                  <button type="button" className="cursor-pointer">
                    x
                  </button>
                </td>
                <td className="hidden py-3 lg:table-cell">
                  <div>
                    <Image src={product} alt="product" className="w-20"></Image>
                  </div>
                </td>
                <td className="py-3">現代極簡實木桌</td>
                <td className="hidden py-3 sm:table-cell">$123</td>
                <td className="py-3">
                  <div className="flex justify-center">
                    <button className="hidden lg:block cursor-pointer">
                      <FaMinus />
                    </button>
                    <span className="w-15">31</span>
                    <button className="hidden lg:block cursor-pointer">
                      <FaPlus />
                    </button>
                  </div>
                </td>
                <td className="py-3">$369</td>
              </tr>

              <tr>
                <td className="py-3 md:text-2xl">
                  <button type="button" className="cursor-pointer">
                    x
                  </button>
                </td>
                <td className="hidden py-3 lg:table-cell">
                  <div>
                    <Image src={product} alt="product" className="w-20"></Image>
                  </div>
                </td>
                <td className="py-3">現代極簡實木桌</td>
                <td className="hidden py-3 sm:table-cell">$123</td>
                <td className="py-3">
                  <div className="flex justify-center">
                    <button className="hidden lg:block cursor-pointer">
                      <FaMinus />
                    </button>
                    <span className="w-15">31</span>
                    <button className="hidden lg:block cursor-pointer">
                      <FaPlus />
                    </button>
                  </div>
                </td>
                <td className="py-3">$369</td>
              </tr>
            </tbody>
          </table>

          <form className="border-1 p-5 mt-8 rounded-2xl lg:ml-20 lg:w-110 xl:w-130">
            <div className="outline p-3 rounded-lg">
              <ShippingMethod />
            </div>

            <div className="outline mt-4 p-3 rounded-lg">
              <PaymentMethod />
            </div>

            <DiscountCode />

            <div className="outline mt-4 p-3 rounded-lg">
              <h1 className="font-semibold">詳情</h1>
              <div className="mt-2">
                <div className="flex justify-between text-sm">
                  <p>運送方式</p>
                  <span>宅配到家</span>
                </div>

                <div className="flex justify-between text-sm">
                  <p>商品總金額</p>
                  <span>$123</span>
                </div>

                <div className="flex justify-between text-sm">
                  <p>優惠碼折抵</p>
                  <span className="text-red-500">-$23</span>
                </div>

                <div className="flex justify-between text-sm">
                  <p>總金額</p>
                  <span>$100</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-amber-600 text-white mt-4 py-2 rounded-md cursor-pointer">
              結帳
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
