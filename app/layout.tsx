"use client";
import Link from "next/link";
import "../styles/globals.css";
import React, { ReactNode, useState } from "react";
import RandomImages from "./components/RandomImages";

type LayoutProps = { children: ReactNode };

export default function Layout({ children }: LayoutProps) {
  const [showImages, setShowImages] = useState(true);

  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
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
              />
            </span>
          </label>
        </div>

        {/* Background Images */}
        {showImages && <RandomImages />}

        {/* Toolbar */}
        <header
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            padding: "1rem 2rem",
            color: "#111",
          }}
        >
          {/* Left links */}
          <nav style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/blog" style={{ textDecoration: "none", color: "#111", fontSize: "1.5rem" }}>
              Blog
            </Link>
            <Link href="/links" style={{ textDecoration: "none", color: "#111", fontSize: "1.5rem" }}>
              Links
            </Link>
            <Link href="/about" style={{ textDecoration: "none", color: "#111", fontSize: "1.5rem" }}>
              About
            </Link>
          </nav>

          {/* Center name */}
          <Link
            href="/"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              fontWeight: "900",
              fontSize: "3rem",
              textDecoration: "none",
            }}
          >
            Paul Lin
          </Link>

          {/* Right placeholder */}
          <div style={{ width: "120px" }}></div>
        </header>

        {/* Page content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
