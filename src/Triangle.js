import "./Triangle.css";
import { useState } from "react";
import UserInterface from "./UserInterface";
import React from "react";

function Triangle() {
  return (
    <React.Fragment>
      <div className="Triangle-app">
        <UserInterface />
      </div>
    </React.Fragment>
  );
}
export default Triangle;
