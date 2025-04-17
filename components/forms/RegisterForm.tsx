import LoginRegisterButtons from "../ui/LoginRegisterButtons";

export default function RegisterForm() {
  return (
    <form className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="fullname">姓名</label>
        <input
          type="text"
          id="fullname"
          className="outline text-base py-1 px-1.5 rounded-sm text-gray-500 sm:w-70 sm:text-lg sm:py-2 sm:px-3 sm:rounded-md lg:w-80 cursor-pointer"
          placeholder="請輸入名稱..."
        ></input>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="username">帳號</label>
        <input
          type="text"
          id="username"
          className="outline text-base py-1 px-1.5 rounded-sm text-gray-500 sm:w-70 sm:text-lg sm:py-2 sm:px-3 sm:rounded-md lg:w-80 cursor-pointer"
          placeholder="請輸入姓名..."
        ></input>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="Password">密碼</label>
        <input
          type="password"
          id="Password"
          className="outline text-base py-1 px-1.5 rounded-sm text-gray-500 sm:w-70 sm:text-lg sm:py-2 sm:px-3 sm:rounded-md lg:w-80 cursor-pointer"
          placeholder="請輸入密碼..."
        ></input>
      </div>
      <div className="flex items-center mt-6 gap-6">
        <LoginRegisterButtons />
      </div>
    </form>
  );
}
