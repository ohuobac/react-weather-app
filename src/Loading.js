import React from "react";
import { RotatingLines } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="mt-5 pt-5 mb-5 pb-5 text-center">
      <RotatingLines
        strokeColor="#ffcd6b"
        strokeWidth="5"
        animationDuration="1.75"
        width="96"
        visible={true}
      />
      <br />
      <div>Loading...</div>
    </div>
  );
}
