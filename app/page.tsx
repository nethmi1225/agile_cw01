"use client"; // Required for hooks

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Automatically navigate to login after the component mounts
    router.push("/login");
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* ... your existing code ... */}
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-xl">Redirecting to Login...</h1>
      </main>
    </div>
  );
}