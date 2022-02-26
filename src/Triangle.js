import { React } from "react";
import UserInterface from "./components/UserInterface/UserInterface";
import PopupModal from "./components/PopupModal/PopupModal";
import BackDrop from "./components/PopupModal/BackDrop";
import "./Triangle.css";
import { useState } from "react";

export default function Triangle() {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  return (
    <div>
      <div className="All">
        <UserInterface></UserInterface>
      </div>
      {modalIsOpen ? <PopupModal></PopupModal> : <div></div>}
      {modalIsOpen ? <BackDrop></BackDrop> : <div></div>}
    </div>
  );
}
