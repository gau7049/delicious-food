import { useContext } from "react";
import { createContext } from "react";

export const LoginContext = createContext({
  isLoggedIn: false,
})

export const LoginProvider = LoginContext.Provider

export default function useLogin(){
  return useContext(LoginContext)
}