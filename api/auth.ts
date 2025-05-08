import axiosInstance from "./axiosInstance";
import { RegisterFormData, LoginFormData } from "@/types/auth";

export const registerUser = (data: RegisterFormData) => {
  return axiosInstance.post("/register", data);
};

export const loginUser = (data: LoginFormData) => {
  return axiosInstance.post("/login", data);
};
