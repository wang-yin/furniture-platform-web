"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SocialLoginButtons from "../ui/SocialLoginButtons";
import LoginRegisterButtons from "../ui/LoginRegisterButtons";
import { useAuthForm } from "@/hooks/useAuthForm";

export default function LoginForm() {
  const [showSocial, setShowSocial] = useState(false);
  const { formData, handleChange, handleSubmit } = useAuthForm("login");

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="username">帳號</label>
        <input
          type="text"
          id="userID"
          value={formData.userID}
          onChange={handleChange}
          className="outline text-base py-1 px-1.5 rounded-sm text-gray-500 sm:w-70 sm:text-lg sm:py-2 sm:px-3 sm:rounded-md lg:w-80 cursor-pointer"
          placeholder="請輸入名稱..."
        ></input>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password">密碼</label>
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
        <LoginRegisterButtons type="login" />
      </div>
      <div className="flex items-center mt-6">
        <div className="flex-grow border-t border-gray-300"></div>
        <div className="flex flex-col sm:hidden">
          <button
            type="button"
            className="mx-4 cursor-pointer transition-all"
            onClick={() => setShowSocial((prev) => !prev)}
          >
            {showSocial ? "收起其他登入方式 ▲" : "使用其他方式登入 ▼"}
          </button>

          <AnimatePresence>
            {showSocial && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <SocialLoginButtons />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <span className="hidden mx-4 text-gray-500 text-sm whitespace-nowrap sm:block">
          使用其他方式登入
        </span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="hidden mb-6 sm:block">
        <SocialLoginButtons />
      </div>
    </form>
  );
}
