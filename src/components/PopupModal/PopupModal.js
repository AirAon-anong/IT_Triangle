import React from "react";
import "./PopupModal.css";

export default function PopupModal(props) {
  function clickHandler() {
    props.setIsValid(true);
  }

  return (
    <div className="backdrop">
      <div className="popup">
        <p>Your input in not valid , please reenter.</p>
        <button onClick={clickHandler}>OK</button>
      </div>
    </div>
  );
}
