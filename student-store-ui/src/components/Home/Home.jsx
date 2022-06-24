import * as React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Logo from "../Navbar/Logo/Logo";
import Hero from "../Home/Hero/Hero";

export default function Home() {
  return (
    <div className="home">
      {/* <Logo /> */}
      <Navbar />
      <Hero />
      <Sidebar />
      <p>Home</p>
    </div>
  );
}
