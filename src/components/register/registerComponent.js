'use client'

import { useState } from "react";
import Button from "../button/button";
import Input from "../input/input";
import { useUser } from "@/hooks/api/useUser";
import { useRouter } from "next/navigation"

export default function RegisterComponent (){
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const userApi = useUser();
  const router = useRouter();
    
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(name && email && password) {
       const response = await userApi.registerUser(name, email, password);
       if(response) {
        window.alert('Usuario Criado!');
        router.push('/login')
       }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="min-h-screen flex flex-col justify-center items-center gap-4">
      <h1>Registrar novo usuario</h1>

      <div className="items-center flex flex-col bg-white w-4/5 lg:w-1/4 justify-center rounded-sm text-black gap-4 h-96">
        <Input 
          onChangeFunction={(e) => setName(e.target.value)} 
          type="text" 
          placeholderText="Nome Usuario" 
        />
        <Input 
          onChangeFunction={(e) => setEmail(e.target.value)}
          type="email" 
          placeholderText="User/Email" 
        />
        <Input 
          onChangeFunction={(e) => setPassword(e.target.value)}
          type="password" 
          placeholderText="Password" 
          />  
        <Button placeholderText="Registrar"/>
        <p>Ja possui conta?</p>
        <Button onClickFunction={() => router.push('/login')} placeholderText="Entrar"/>
      </div>
    </form>
  )
}