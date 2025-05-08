export interface RegisterFormData {
  name: string;
  userID: string;
  password: string;
}

export interface LoginFormData {
  userID: string;
  password: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
}
