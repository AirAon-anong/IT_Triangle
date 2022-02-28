import { React, useContext, useState } from "react";
import SideContext from "../SideContext/side-context";
import "./InputFiled.css";

export default function InputFiled(props) {
  const [side, setSide] = useState("");
  const sideCtx = useContext(SideContext);
  var tmpBadFields = sideCtx.badFields;
  var tmpIsValid = sideCtx.isValid;

  tmpIsValid[props.id] = true;

  // console.log(`side ${props.id + 1}`);
  // console.log(tmpBadFields);
  // console.log(tmpIsValid);

  for (let i = 0; i < tmpBadFields.length; i++) {
    // console.log(tmpBadFields[i]);
    if (props.id === tmpBadFields[i]) {
      tmpIsValid[tmpBadFields[i]] = false;
      // console.log(tmpBadFields[i]);
    }
  }
  sideCtx.setIsValid(tmpIsValid);
  // console.log(tmpIsValid);
  // console.log("----------------------");

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
    <form>
      <label>
        Side {props.id + 1}
        <input
          type="text"
          value={side}
          onChange={onChangeHandler}
          // onInput={onInputHandler}
          className={sideCtx.isValid[props.id] ? "valid" : "invalid"}
        />
      </label>
    </form>
  );
}
