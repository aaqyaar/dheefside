import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="bg-black/95 w-full h-screen">{children}</main>
      {/* <Footer /> */}
    </>
  );
}
