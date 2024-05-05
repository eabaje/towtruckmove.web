import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { makeRequest } from "../helpers/axios";
import axiosInstance from "../helpers/axiosInstance-2";
import { signin } from "./actions/auth/auth.action";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : {}
  );
  //(onSuccess)=>(onError) =>
  const login = async (form) => {
    signin(form)((res) => {
      setCurrentUser(res.data.data);
    })((err) => {
      toast.error(err);
    });

    console.log("res", res);
  };

  useEffect(() => {
    typeof window !== "undefined" ||
      localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);
  console.log("currentUser", currentUser);
  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
