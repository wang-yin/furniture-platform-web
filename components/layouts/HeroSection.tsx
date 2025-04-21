import Image from "next/image";
import Chair from "@/public/images/chair.jpeg";
import LOGO from "@/public/images/logo.png";

export default function HeroSection() {
  return (
    <div className="flex">
      <div className="flex-1">
        <Image src={Chair} alt="Chair" priority></Image>
      </div>
      <div className="bg-Coffee flex flex-1 items-center justify-center flex-col px-5">
        <div className="bg-white rounded-full w-8 h-8 flex items-center md:w-15 md:h-15 lg:w-25 lg:h-25 xl:w-50 xl:h-50">
          <Image src={LOGO} alt="logo" priority></Image>
        </div>
        <p className="text-white mt-2 text-center px-3 md:text-2xl md:px-15 md:mt-5 lg:px-30 xl:text-4xl xl:px-40">
          帶來自然與舒適的居家時光
        </p>
        <a href="#">
          <button className="px-5 py-1 border-2 border-white text-white md:mt-2 lg:mt-8 xl:text-2xl cursor-pointer">
            進入選品
          </button>
        </a>
      </div>
    </div>
  );
}
