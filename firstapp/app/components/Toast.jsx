"use client";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  const notify = () =>
    toast("Wow, you can click!", {
      position: "top-right",
      autoClose: 3000, 
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        backgroundColor: "#333",
        color: "#fff",
        padding: "10px",
        fontSize: "16px",
      },
    });

  return (
    <div>
      <button
        onClick={notify}
        style={{
          padding: "12px 24px",
          backgroundColor: "#4fa94d",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#3e8e41'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4fa94d'}
      >
        Click Me
      </button>
      <ToastContainer />
    </div>
  );
};

export default Toast;
