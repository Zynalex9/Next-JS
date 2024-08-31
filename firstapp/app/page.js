"use client";
import Toast from "./components/Toast";
import { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import HeavyComponent with no server-side rendering
const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  ssr: false, // Ensure this component is only rendered on the client-side
  loading: () => <p>Loading......</p>, // Use 'loading' to specify a fallback UI
});

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Hello World</h1>
      <Toast />
      <button
        onClick={() => setIsVisible(!isVisible)}
        style={{
          marginTop: "50px",
          color: "#fff",
          background: "teal",
          padding: "10px 20px",
        }}
      >
        {isVisible ? "Hide" : "Show"} Heavy Component
      </button>
      {isVisible && <HeavyComponent />}{" "}
      {/* Conditionally render HeavyComponent */}
    </div>
  );
}
