import Image from "next/image";
import Vase from "@/public/images/vase.jpeg";
import Lamp from "@/public/images/lamp.jpeg";
import Bed from "@/public/images/bed.jpeg";

export default function FeaturedCollection() {
  return (
    <div className="flex w-full gap-2 mt-5 px-3 pb-5 md:px-8 md:pb-10 lg:gap-5 lg:pb-20">
      <div className="w-1/2 relative items-center justify-center">
        <div className="absolute z-10 bottom-2 pr-10">
          <h3 className="text-sm lg:text-lg">舒適寢具專區</h3>
          <p className="text-xs lg:text-base">
            柔軟親膚的寢具，給你每一天的好眠體驗
          </p>
          <button className="border-white text-white border-2 cursor-pointer">
            查看更多
          </button>
        </div>
        <Image
          src={Bed}
          alt="Bed"
          priority
          fill
          className="object-cover"
        ></Image>
      </div>

      <div className="w-1/2 flex flex-col gap-2 lg:gap-5 h-60 md:h-80 lg:h-100">
        <div className="flex-1 relative">
          <div className="absolute z-10 bottom-2 pr-10">
            <h3 className="text-sm lg:text-lg">居家燈飾美學</h3>
            <p className="text-xs lg:text-base">
              溫暖光影點亮每個角落，為生活增添質感與氛圍
            </p>
            <button className="border-white text-white border-2 cursor-pointer">
              查看更多
            </button>
          </div>
          <Image
            src={Lamp}
            alt="Lamp"
            priority
            fill
            className="object-cover"
          ></Image>
        </div>

        <div className="flex-1 relative h-60 md:h-80 lg:h-100">
          <div className="absolute z-10 top-2 pr-10">
            <h3 className="text-sm lg:text-lg">手作花器擺飾</h3>
            <p className="text-xs lg:text-base">
              簡約花器與裝飾，讓自然美學融入日常生活
            </p>
            <button className="border-white text-white border-2 cursor-pointer">
              查看更多
            </button>
          </div>
          <Image
            src={Vase}
            alt="Vase"
            priority
            fill
            className="object-cover"
          ></Image>
        </div>
      </div>
    </div>
  );
}
