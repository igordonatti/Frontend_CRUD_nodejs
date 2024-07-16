import LoginComponent from "@/components/login/loginComponent";
import { AuthContextProvider } from "@/contexts/authContext";

export default function Login() {
  
  return (
    <AuthContextProvider>
      <main className="min-h-screen flex flex-col justify-center items-center gap-4">
        <h1>Entrar</h1>

        <LoginComponent />
      </main>
    </AuthContextProvider>
  );
}
