import Image from "next/image";
import BG from "@/public/images/login.jpg";
import LoginForm from "@/components/forms/LoginForm";

export default function Login() {
  return (
    <div className="w-full h-screen relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-7 py-7 rounded-2xl sm:px-10 sm:py-5 lg:px-15 lg:py-10">
        <h1 className="mb-5 font-[family-name:var(--font-vujahday-script)] text-3xl underline decoration-1 sm:mb-10 sm:text-4xl">
          LOGIN
        </h1>
        <LoginForm />
      </div>
      <Image
        src={BG}
        alt="Login Background"
        className="h-full w-full object-cover"
        priority
      ></Image>
    </div>
  );
}
