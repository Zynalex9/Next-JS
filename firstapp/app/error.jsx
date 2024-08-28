"use client";
import React from "react";

const error = ({ error, reset }) => {
  console.log(error);
  return (
    <div>
      <h1>Some error occured, Please try again later</h1>
      <button onClick={() => reset()}></button>
    </div>
  );
};

export default error;
