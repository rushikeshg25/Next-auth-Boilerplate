"use client";
import { Navbar } from "@/components/Navbar";
import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();

  return (
    <div className='flex flex-col'>
      <Navbar />
      <div>{JSON.stringify(session)}</div>
    </div>
  );
}
