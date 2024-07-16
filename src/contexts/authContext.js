'use client'

import { api } from "@/hooks/api/provider";
import { useAuth } from "@/hooks/api/useAuth";

const { createContext, useState, useEffect } = require("react");

const AuthContext = createContext({
  user: null,
  signIn: (email, pwd) => Promise,
  signOut: () => {},
  token: null ,
  setToken: (token) => {}
})

export const AuthContextProvider = ({ children }) => {
  const apiAuth = useAuth();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const validateToken = async () => {
      const storageToken = localStorage.getItem('token');
      const storageUser = localStorage.getItem('user');

      if(storageToken) {
        const data = await apiAuth.validateToken(storageToken);
        if(data && storageUser) {
          setUser(storageUser);
          setToken(storageToken);
        }
      }
    }

    validateToken();
  })

  const signIn = async (email, pwd) => {
    const data = await apiAuth.signIn(email, pwd);

    if(data) {
      if(data) {
        setUser(data);
        setToken(data.token);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        return true;
      }
    }
    return false;
  }

  const signOut = async () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, token, setToken }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContext;