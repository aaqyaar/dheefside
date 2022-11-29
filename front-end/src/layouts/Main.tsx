import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
