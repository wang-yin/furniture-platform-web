export default function LoginRegisterButtons() {
  return (
    <>
      <button className="bg-blue-400 text-white flex-1 text-base py-1 rounded-full shadow-md sm:shadow-lg sm:py-2 sm:text-xl cursor-pointer">
        登入
      </button>
      <p className="text-gray-500">or</p>
      <button className="flex-1 bg-white text-blue-400 text-base py-1 rounded-full shadow-md sm:shadow-lg sm:py-2 sm:text-xl cursor-pointer">
        註冊
      </button>
    </>
  );
}
