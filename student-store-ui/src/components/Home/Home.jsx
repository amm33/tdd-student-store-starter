import * as React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Logo from "../Navbar/Logo/Logo";

export default function Home() {
  return (
    <div className="home">
      <Logo />
      <Navbar />
      <Sidebar />
      <p>Home</p>
    </div>
  );
}
