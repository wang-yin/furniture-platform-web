import Image from "next/image";
import Product1 from "@/public/images/product1.png";
import Product2 from "@/public/images/product2.png";
import Product3 from "@/public/images/product3.png";
import Product4 from "@/public/images/product4.png";
import Product5 from "@/public/images/product5.png";
import Product6 from "@/public/images/product6.png";

export default function Product() {
  return (
    <div className="w-full grid grid-cols-3 grid-rows-2 px-2 py-3 gap-y-7 gap-x-3 lg:py-10 lg:gap-y-15 lg:gap-x-8 xl:gap-x-15 xl:gap-y-20">
      <div className="flex flex-col items-center justify-center cursor-pointer hover:-translate-y-1">
        <div>
          <Image src={Product1} alt="Product" priority></Image>
        </div>
        <div className="px-1 md:px-3 lg:px-5">
          <p className="font-bold text-sm">長方形餐桌</p>
          <p className="font-bold text-sm">$123</p>
          <div>
            <p>極簡俐落設計，適合現代居家或辦公空間，展現低調質感。</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center cursor-pointer hover:-translate-y-1">
        <div>
          <Image src={Product2} alt="Product2" priority></Image>
        </div>
        <div className="px-1 md:px-3 lg:px-5">
          <p className="font-bold text-sm">圓形木質餐桌</p>
          <p className="font-bold text-sm">$123</p>

          <div>
            <p>溫潤木質，適合小空間用餐與聚會。</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center cursor-pointer hover:-translate-y-1">
        <div>
          <Image src={Product3} alt="Product3" priority></Image>
        </div>
        <div className="px-1 md:px-3 lg:px-5">
          <p className="font-bold text-sm">現代三人沙發</p>
          <p className="font-bold text-sm">$123</p>

          <div>
            <p>柔軟舒適坐墊，輕鬆營造溫馨客廳。</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center cursor-pointer hover:-translate-y-1">
        <div>
          <Image src={Product4} alt="Product4" priority></Image>
        </div>
        <div className="px-1 md:px-3 lg:px-5">
          <p className="font-bold text-sm">北歐風格餐椅</p>
          <p className="font-bold text-sm">$123</p>

          <div>
            <p>人體工學設計，支撐性佳，久坐不累。</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center cursor-pointer hover:-translate-y-1">
        <div>
          <Image src={Product5} alt="Product5" priority></Image>
        </div>
        <div className="px-1 md:px-3 lg:px-5">
          <p className="font-bold text-sm">原木長桌</p>
          <p className="font-bold text-sm">$123</p>

          <div>
            <p>大面積桌面，適合家庭聚餐或辦公。</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center cursor-pointer hover:-translate-y-1">
        <div>
          <Image src={Product6} alt="Product6" priority></Image>
        </div>
        <div className="px-1 md:px-3 lg:px-5">
          <p className="font-bold text-sm">雙人溫馨沙發</p>
          <p className="font-bold text-sm">$123</p>

          <div>
            <p>簡約外型，適合小家庭或個人空間。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
