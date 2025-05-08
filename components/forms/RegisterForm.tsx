"use client";

import LoginRegisterButtons from "../ui/LoginRegisterButtons";
import { useAuthForm } from "@/hooks/useAuthForm";

export default function RegisterForm() {
  const { formData, handleChange, handleSubmit } = useAuthForm("register");

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="fullname">姓名</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="outline text-base py-1 px-1.5 rounded-sm text-gray-500 sm:w-70 sm:text-lg sm:py-2 sm:px-3 sm:rounded-md lg:w-80 cursor-pointer"
          placeholder="請輸入名稱..."
        ></input>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="username">帳號</label>
        <input
          type="text"
          id="userID"
          value={formData.userID}
          onChange={handleChange}
          className="outline text-base py-1 px-1.5 rounded-sm text-gray-500 sm:w-70 sm:text-lg sm:py-2 sm:px-3 sm:rounded-md lg:w-80 cursor-pointer"
          placeholder="請輸入姓名..."
        ></input>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="Password">密碼</label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          className="outline text-base py-1 px-1.5 rounded-sm text-gray-500 sm:w-70 sm:text-lg sm:py-2 sm:px-3 sm:rounded-md lg:w-80 cursor-pointer"
          placeholder="請輸入密碼..."
        ></input>
      </div>
      <div className="flex items-center mt-6 gap-6">
        <LoginRegisterButtons type="register" />
      </div>
    </form>
  );
}
