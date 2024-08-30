"use client";
import React from "react";
import Link from "next/link";
import "./navbar.css";
import { useSession } from "next-auth/react";
const NavBar = () => {
  const { data, status } = useSession();
  if (status === "loading") return null;
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
          <>
            <Link href={data.user.image}>{data.user.name}</Link>
            <Link href="api/auth/signout">Sign Out</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
