import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="bg-slate-900 w-full h-screen text-white">
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
}
