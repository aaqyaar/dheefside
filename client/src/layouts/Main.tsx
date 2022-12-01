import React from "react";
import Header from "./Header";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white">
      <Header />
      <main className="w-full h-screen">{children}</main>
    </div>
  );
}
