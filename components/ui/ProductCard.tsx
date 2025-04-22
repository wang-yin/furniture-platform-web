import Image from "next/image";
import Product1 from "@/public/images/product1.png";

export default function ProductCard() {
  return (
    <>
      <div className="cursor-pointer rounded-2xl hover:shadow-xl">
        <div>
          <Image src={Product1} alt="Product" priority></Image>
        </div>
        <div className="mt-3 md:px-3 lg:px-8">
          <div className="flex justify-between mb-2">
            <h3 className="md:text-lg lg:text-2xl">桌子</h3>
            <span className="md:text-lg lg:text-2xl">$123</span>
          </div>
          <p className="lg:lg:text-lg">黑色的桌子</p>
        </div>
      </div>
    </>
  );
}
