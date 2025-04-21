import Image from "next/image";
import Table from "@/public/images/table.jpeg";
import Sofa from "@/public/images/sofa.jpeg";
import Chair1 from "@/public/images/chair1.jpeg";

export default function CategorySection() {
  return (
    <div className="bg-Wheat flex justify-around px-5 py-5">
      <div className=" flex flex-col items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden md:w-30 md:h-30 lg:w-50 lg:h-50">
          <Image src={Table} alt="Table" priority></Image>
        </div>
        <p className="my-2">自然木紋桌款</p>
        <button className="outline rounded-full px-3 py-1 cursor-pointer hover:bg-white">
          探索更多
        </button>
      </div>
      <div className=" flex flex-col items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden md:w-30 md:h-30 lg:w-50 lg:h-50">
          <Image src={Sofa} alt="Sofa" priority></Image>
        </div>
        <p className="my-2">舒適慵懶沙發</p>
        <button className="outline rounded-full px-3 py-1 cursor-pointer hover:bg-white">
          探索更多
        </button>
      </div>
      <div className=" flex flex-col items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden md:w-30 md:h-30 lg:w-50 lg:h-50">
          <Image src={Chair1} alt="Chair" priority></Image>
        </div>
        <p className="my-2">風格單椅專區</p>
        <button className="outline rounded-full px-3 py-1 cursor-pointer hover:bg-white">
          探索更多
        </button>
      </div>
    </div>
  );
}
