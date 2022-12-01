import React from "react";
import Header from "./Header";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <body className="bg-white w-screen h-screen">
      <Header />
      <main>{children}</main>
    </body>
  );
}
