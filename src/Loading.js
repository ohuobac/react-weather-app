import React from "react";
import { RotatingLines } from "react-loader-spinner";

import "./App.css";

export default function Loading() {
  return (
    <div className="loading text-center  bg-dark">
      <RotatingLines
        strokeColor="#ffcd6b"
        strokeWidth="5"
        animationDuration="1.75"
        width="96"
        visible={true}
      />
      <br />
      <div className="mt-2 pt-2 fw-bold">Loading...</div>
    </div>
  );
}
