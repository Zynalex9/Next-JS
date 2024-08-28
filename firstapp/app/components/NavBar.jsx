import React from "react";
import Link from "next/link";
import "./navbar.css"
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Hello World</h1>
      </div>
      <div className="links">
        <Link href="/">Home</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/admin">Admin</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
};

export default NavBar;
