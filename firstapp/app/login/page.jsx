"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        Back to Home
      </button>
    </div>
  );
};

export default Page;
