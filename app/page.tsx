"use client";

import React, { useState } from "react";
import RandomImages from "./components/RandomImages";

export default function Home() {
  const [showImages, setShowImages] = useState(true);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      
      {/* Toggle Switch */}
      <div style={{ position: "fixed", top: 10, right: 10, zIndex: 1000 }}>
        <label
          style={{
            display: "inline-block",
            width: "50px",
            height: "28px",
            position: "relative",
          }}
        >
          <input
            type="checkbox"
            checked={showImages}
            onChange={() => setShowImages(!showImages)}
            style={{ opacity: 0, width: 0, height: 0 }}
          />
          <span
            style={{
              position: "absolute",
              cursor: "pointer",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: showImages ? "#4ade80" : "#ccc",
              borderRadius: "34px",
              transition: "0.5s",
            }}
          >
            <span
              style={{
                position: "absolute",
                height: "22px",
                width: "22px",
                left: showImages ? "26px" : "4px",
                bottom: "3px",
                backgroundColor: "white",
                borderRadius: "50%",
                transition: "0.5s",
              }}
            ></span>
          </span>
        </label>
      </div>

      {/* Conditionally render RandomImages */}
      {showImages && <RandomImages />}
      
      {/* Other Home page content */}
      <div>
        {/* Your page content goes here */}
      </div>
    </div>
  );
}
