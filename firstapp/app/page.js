import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/login">Login</Link>
      <h1>This is front page</h1>
    </>
  );
}
