import { create } from "zustand";
import { AuthState } from "@/types/auth";

export const useAuthStore = create<AuthState>((set) => {
  return {
    isLoggedIn: false,
    setLoggedIn: (value) => set({ isLoggedIn: value }),
  };
});
