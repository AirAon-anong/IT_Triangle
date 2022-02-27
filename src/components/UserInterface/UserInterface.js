import { useState } from "react";
import InputForm from "../InputForm/InputForm";
import OutputForm from "../OutputForm/OutputForm";
import PopupModal from "../PopupModal/PopupModal";
import "./UserInterface.css";

function UserInterface() {
  const [IsValid, setIsValid] = useState(true);

  return (
    <div>
      <div className="All">
        <div className="Background">
          <p className="title">Enter the length of sides</p>
          <div>
            <InputForm></InputForm>
            <OutputForm setIsValid={setIsValid}></OutputForm>
          </div>
        </div>
      </div>
      {!IsValid ? (
        <PopupModal setIsValid={setIsValid}></PopupModal>
      ) : (
        <div></div>
      )}
    </div>
  );
}
export default UserInterface;
