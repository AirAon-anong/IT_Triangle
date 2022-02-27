import { React, useContext, useState } from "react";
import SideContext from "../SideContext/side-context";
import "./InputFiled.css";

export default function InputFiled(props) {
  const [side, setSide] = useState("");
  const sideCtx = useContext(SideContext);
  var tmpBadFields = sideCtx.badFields;

  console.log(tmpBadFields);

  function onChangeHandler(e) {
    // console.log(`${props.id} on change :${e.currentTarget.value}`);
    // console.log(`set ${props.id} : ${sideCtx.side}`);
    var tmpArr = sideCtx.side;
    tmpArr[props.id] = e.currentTarget.value;
    sideCtx.setSide(tmpArr);
    setSide(e.currentTarget.value);
  }

  // function onInputHandler(e) {
  //   console.log(`${props.name} on input :${e.currentTarget.value}`);
  //   setSide(e.currentTarget.value);
  // }

  return (
    <form className="inputField">
      <label>
        Side {props.id + 1}
        <input
          type="text"
          value={side}
          onChange={onChangeHandler}
          // onInput={onInputHandler}
        />
      </label>
      
    </form>
  );
}
