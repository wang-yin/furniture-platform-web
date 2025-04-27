import Image from "next/image";
import LOGO from "@/public/images/logo.png";
import Link from "next/link";

export default function Slogan() {
  return (
    <div className="bg-Coffee flex justify-around items-center py-2 px-2">
      <div className="bg-white rounded-full w-15 h-15 flex items-center lg:w-20 lg:h-20">
        <Link href="/">
          <Image src={LOGO} alt="logo"></Image>
        </Link>
      </div>
      <div>
        <Link href="/about">
          <h3 className="text-white cursor-pointer">關於我們</h3>
        </Link>
      </div>
      <div>
        <a href="#">
          <h3 className="text-white cursor-pointer">聯絡我們</h3>
        </a>
      </div>
      <div>
        <a href="#">
          <h3 className="text-white cursor-pointer">聯絡我們</h3>
        </a>
      </div>
    </div>
  );
}
