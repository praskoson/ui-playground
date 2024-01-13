"use client";

import { useEffect } from "react";
import { PathMe } from "./path";
import { go, populateWebcam } from "./scripts";

export default function Page() {
  // useEffect(() => {
  //   go();
  //   populateWebcam();
  // }, []);

  return (
    <div className="overflow-hidden bg-white text-gray-950">
      <video className="pointer-events-none absolute" src=""></video>
      <svg
        className="pointer-events-none absolute z-[2]"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
      >
        <path
          fill="none"
          stroke="#ffc600"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M271,74 L1015,344 M271,74 L271,74"
        ></path>
      </svg>
      <div id="app" className="space-x-4 space-y-4">
        <button className="clear">Clear</button>
        <button
          onClick={() => {
            go();
            populateWebcam();
          }}
        >
          Go
        </button>
        <pre className="stats"></pre>
      </div>
    </div>
  );
}
