'use client'

import ListUsers from "@/components/listUsers/listUsers";
import AuthContext, { AuthContextProvider } from "@/contexts/authContext";
import { RequireAuth } from "@/contexts/requireAuth";
import { useContext } from "react";

export default function Users(){
  const auth = useContext(AuthContext);

  const handleSignOut = async () => {
    const response = await auth.signOut();
    console.log(response)
  }

  return(
    <AuthContextProvider>
      <RequireAuth>
        <main className="min-h-screen justify-center flex items-center">
          <span className="fixed bottom-0 p-4 bg-red-500 rounded left-4 cursor-pointer" onClick={handleSignOut}>Sair</span>
          <ListUsers />
        </main>
    </RequireAuth>
    </AuthContextProvider>
  )
}