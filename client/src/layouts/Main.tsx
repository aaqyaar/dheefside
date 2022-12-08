import React from "react";
import { useLocation } from "react-router-dom";
import { Footer, Header, Header2 } from ".";

export default function Main({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isAuth = location.pathname.includes("/auth");
  return (
    <div className="bg-white flex flex-col justify-between">
      {/* <Header /> */}
      <Header2 />
      <main className="w-full h-full">{children}</main>
      {!isAuth ? <Footer /> : null}
    </div>
  );
}
