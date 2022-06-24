import * as React from "react";
import "./Sidebar.css";

export default function Sidebar(props) {
  return (
    <section className="sidebar">
      <p>Sidebar</p>
      <button className="toggle-button" onClick={props.handleOnToggle}></button>
    </section>
  );
}
