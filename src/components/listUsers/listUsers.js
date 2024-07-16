'use client'

import AuthContext from "@/contexts/authContext"
import { useUser } from "@/hooks/api/useUser";
import { useContext, useEffect, useState } from "react"

export default function ListUsers(){
  const user = useContext(AuthContext);
  const api = useUser();
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      const data = await api.getAllUsers(user.token);
      if(data) setUsers(data);
    }

    getUsers();
  }, [api])

  const handleDelete = async (id) => {
    const deleteUser = await api.deleteUser(user.token, id);
    window.alert('Usuário deletado!')
  }

  return(
    <div className="bg-white min-h-screen w-4/5 gap-2 items-center">
      <ul className="w-full p-4 flex flex-col gap-2">
      {
        users && users.map((item) => {
          return (
            <li className="bg-gray-300 h-10 items-center grid grid-cols-3 gap-4 pr-5 pl-5 grid-flow-col text-black " key={item.id}>
              <span>{item.id}</span>
              <span>{item.name}</span>
              <span>{item.email}</span>
              <span className="bg-red-500 cursor-pointer text-white p-1 rounded" onClick={() => handleDelete(item.id)}>Delete</span>
            </li>
          )
        })
      }
      </ul>
      testes
    </div>
  )
}