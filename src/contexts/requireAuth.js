'use client'

import { useContext } from "react"
import AuthContext from "./authContext"
import Login from "@/app/login/page";

export const RequireAuth = ({ children }) => {
  const auth = useContext(AuthContext);

  if(!auth.user) {
    return <Login />
  }

  return children;
}