import React from "react";
import { Footer, Header } from ".";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white">
      <Header />
      <main className="w-full h-full">{children}</main>
      <Footer />
    </div>
  );
}
