import Image from "next/image";
import LOGO from "@/public/images/logo.png";

export default function Slogan() {
  return (
    <div className="flex flex-col items-center pt-5">
      <p className="lg:text-xl xl:text-2xl">質感生活，從家開始</p>
      <div className="rounded-lg w-20 flex items-center bg-white my-2 lg:w-30">
        <Image src={LOGO} alt="LOGO" priority></Image>
      </div>
      <p className="lg:text-xl xl:text-2xl">美好空間，由你定義</p>
    </div>
  );
}
