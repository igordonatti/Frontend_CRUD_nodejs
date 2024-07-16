'use client'

import { useContext, useState } from "react"
import { useRouter } from "next/navigation"

import Button from "../button/button"
import Input from "../input/input"
import AuthContext from "@/contexts/authContext"
import { useUser } from "@/hooks/api/useUser"

export default function LoginComponent(){
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const auth = useContext(AuthContext);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(user && pwd) { 
      const isLogged = await auth.signIn(user, pwd);

      if(isLogged) {
        router.push('/users');
      } else {
        setError(true);
      }
    }
  }

  return(
    <form onSubmit={handleSubmit} className="items-center flex flex-col bg-white w-4/5 lg:w-1/4 justify-center rounded-sm text-black gap-4 h-64">
      {
        error && <div className="bg-red-300">
          Usuário ou senha incorretos.
        </div>
      }
      <Input 
        type="email" 
        placeholderText="User/Email" 
        onChangeFunction={(e) => setUser(e.target.value)}
      />
      <Input 
        type="password" 
        placeholderText="Password" 
        onChangeFunction={(e) => setPwd(e.target.value)}
      />

      <Button placeholderText="Entrar" />

      <Button onClickFunction={() => router.push('/register')} placeholderText="Cadastrar novo usuario"/>
    </form>
  )
}