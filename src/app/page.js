import { AuthContextProvider } from "@/contexts/authContext";
import { RequireAuth } from "@/contexts/requireAuth";

export default function Home() {
  return (
    <AuthContextProvider>
      <RequireAuth>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          crud nodejs
        </main>
      </RequireAuth>
    </AuthContextProvider>
  );
}
