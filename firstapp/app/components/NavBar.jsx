"use client";
import React from "react";
import Link from "next/link";
import "./navbar.css";
import { useSession } from "next-auth/react";
const NavBar = () => {
  const { data, status } = useSession();
  if (status === "loading") return null;
  console.log(data);
  console.log(data.user);
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Hello World</h1>
      </div>
      <div className="links">
        <Link href="/">Home</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/admin">Admin</Link>
        {status === "unauthenticated" ? (
          <Link href="/api/auth/signin">Login</Link>
        ) : (
          <div>{data.user.name}</div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
