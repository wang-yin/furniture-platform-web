import Image from "next/image";
import Plant from "@/public/images/plant.jpeg";
import Plant2 from "@/public/images/plant2.jpeg";
import Material from "@/public/images/material.jpeg";
import Material2 from "@/public/images/material2.jpeg";

export default function StyleSelection() {
  return (
    <div className="">
      <div className="flex flex-col">
        <div className="flex">
          <div className="flex-1">
            <Image src={Material} alt="decorate" priority></Image>
          </div>
          <div className="bg-Coffee flex flex-col flex-1 items-center justify-center">
            <div className="rounded-full overflow-hidden w-15 h-15 md:w-30 md:h-30 lg:w-50 lg:h-50">
              <Image src={Plant} alt="Plant" priority></Image>
            </div>
            <h3 className="text-white text-sm mt-2 md:text-base md:mt-5 lg:mt-10 lg:text-xl">
              精選設計家具
            </h3>
            <p className="text-white text-xs px-5 text-center md:text-sm md:px-20 lg:text-lg lg:px-30">
              用心挑選每一件家具，讓美感與實用兼具，打造專屬於你的理想空間
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="bg-Coffee flex flex-col flex-1 items-center justify-center">
            <div className="rounded-full overflow-hidden w-15 h-15 md:w-30 md:h-30 lg:w-50 lg:h-50">
              <Image src={Plant2} alt="Plant" priority></Image>
            </div>
            <h3 className="text-white text-sm mt-2 md:text-base md:mt-5 lg:mt-10 lg:text-xl">
              居家燈飾美學
            </h3>
            <p className="text-white text-xs px-5 text-center md:text-sm md:px-20 lg:text-lg lg:px-30">
              溫暖光影點亮每個角落，為生活增添質感與氛圍
            </p>
          </div>
          <div className="flex-1">
            <Image src={Material2} alt="decorate" priority></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
