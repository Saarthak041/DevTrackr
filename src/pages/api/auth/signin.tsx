// pages/auth/signin.tsx
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to DevTrackr</h1>
      <button
        onClick={() => signIn("github")}
        className="px-6 py-2 bg-black text-white rounded shadow hover:bg-gray-800"
      >
        Sign in with GitHub
      </button>
    </main>
  );
}
