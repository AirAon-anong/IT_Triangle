import { useState } from "react";
import InputForm from "../InputForm/InputForm";
import OutputForm from "../OutputForm/OutputForm";
import "./UserInterface.css";

function UserInterface() {
  return (
    <div>
      <div className="Background">
        <p className="title">Enter the length of sides</p>
        <div>
          <InputForm></InputForm>
          <OutputForm></OutputForm>
        </div>
      </div>
    </div>
  );
}
export default UserInterface;
