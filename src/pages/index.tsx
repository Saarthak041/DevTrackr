import { signIn, signOut, useSession } from "next-auth/react";
import { motion } from "framer-motion";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-4xl font-bold">DevTrackr</h1>

      {session ? (
        <>
          <div className="flex flex-col items-center gap-4">
            <motion.img
              src={session.user?.image ?? ""}
              alt="User Avatar"
              className="w-24 h-24 rounded-full border shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            />

            <motion.p
              className="text-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Welcome, {session.user?.name || session.user?.email}!
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => signOut()}
              className="px-4 py-2 bg-red-500 text-white rounded shadow"
            >
              Sign out
            </motion.button>
          </div>
        </>
      ) : (
        <>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            You are not signed in.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => signIn("github")}
            className="px-4 py-2 bg-blue-600 text-white rounded shadow"
          >
            Sign in with GitHub
          </motion.button>
        </>
      )}
    </main>
  );
}
