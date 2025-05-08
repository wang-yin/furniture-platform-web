import { loginUser, registerUser } from "@/api/auth";
import { RegisterFormData, LoginFormData } from "@/types/auth";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAuthStore } from "@/store/authStore";

type AuthType = "login" | "register";

export function useAuthForm(type: "register"): {
  formData: RegisterFormData;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export function useAuthForm(type: "login"): {
  formData: LoginFormData;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export function useAuthForm(type: AuthType) {
  const router = useRouter();

  const [formData, setFormData] = useState<RegisterFormData | LoginFormData>(
    type === "register"
      ? { name: "", userID: "", password: "" }
      : { userID: "", password: "" }
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (!["userID", "password", "name"].includes(id)) return;
    setFormData((prev: any) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (type === "register") {
        const res = await registerUser(formData as RegisterFormData);
        console.log("註冊成功：", res.data);
        router.push("/login");
      } else {
        const res = await loginUser(formData as LoginFormData);
        console.log("登入成功：", res.data);
        localStorage.setItem("token", res.data.token); //登入成功後將token存入localStorage
        useAuthStore.getState().setLoggedIn(true);
        router.push("/");
      }
    } catch (error: any) {
      console.error(`${type} 失敗：`, error.response?.data || error.message);
    }
  };

  if (type === "register") {
    return {
      formData: formData as RegisterFormData,
      handleChange,
      handleSubmit,
    } as {
      formData: RegisterFormData;
      handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
      handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    };
  } else {
    return {
      formData: formData as LoginFormData,
      handleChange,
      handleSubmit,
    } as {
      formData: LoginFormData;
      handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
      handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    };
  }
}
