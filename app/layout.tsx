"use client";
import Link from "next/link";
import "../styles/globals.css";
import React, { ReactNode, useState } from "react";

type LayoutProps = { children: ReactNode };

export default function Layout({ children }: LayoutProps) {
  const [showImages, setShowImages] = useState(true);

  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>

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
