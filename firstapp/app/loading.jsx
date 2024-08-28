"use client";
import { createContext } from "react";
import React from "react";
import { Circles } from "react-loader-spinner";

const loading = () => {
  return (
    <Circles
      height="280"
      width="280"
      color="#4fa94d"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default loading;
