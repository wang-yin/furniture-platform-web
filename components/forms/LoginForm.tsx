"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SocialLoginButtons from "../ui/SocialLoginButtons";

export default function LoginForm() {
  const [showSocial, setShowSocial] = useState(false);

  return (
    <form className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="outline text-base py-1 px-1.5 rounded-sm text-gray-500 sm:w-70 sm:text-lg sm:py-2 sm:px-3 sm:rounded-md lg:w-80"
          placeholder="請輸入名稱..."
        ></input>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          id="Password"
          className="outline text-base py-1 px-1.5 rounded-sm text-gray-500 sm:w-70 sm:text-lg sm:py-2 sm:px-3 sm:rounded-md lg:w-80"
          placeholder="請輸入密碼..."
        ></input>
      </div>

      <div className="flex items-center sm:mt-6">
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

        <span className="hidden sm:block mx-4 text-gray-500 text-sm whitespace-nowrap">
          使用其他方式登入
        </span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="hidden sm:block mb-6">
        <SocialLoginButtons />
      </div>
      <button className="outline text-base py-1 rounded-sm sm:py-2 sm:text-xl sm:rounded-md">
        Login
      </button>
    </form>
  );
}
