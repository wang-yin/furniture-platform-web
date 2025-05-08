import { useRouter } from "next/navigation";

interface Props {
  type: "login" | "register";
}

export default function LoginRegisterButtons({ type }: Props) {
  const router = useRouter();

  return (
    <>
      <button
        type="submit"
        className="bg-blue-400 text-white flex-1 text-base py-1 rounded-full shadow-md sm:shadow-lg sm:py-2 sm:text-xl cursor-pointer hover:-translate-y-0.5 transition"
      >
        {type === "login" ? "登入" : "註冊"}
      </button>
      <p className="text-gray-500">or</p>
      <button
        type="button"
        onClick={() => router.push(type === "login" ? "/register" : "/login")}
        className="flex-1 bg-white text-blue-400 text-base py-1 rounded-full shadow-md sm:shadow-lg sm:py-2 sm:text-xl cursor-pointer hover:-translate-y-0.5 transition"
      >
        {type === "login" ? "註冊" : "登入"}
      </button>
    </>
  );
}
