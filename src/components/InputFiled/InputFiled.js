import { React, useContext, useState } from "react";
import SideContext from "../SideContext/side-context";

export default function InputFiled(props) {
  const [side, setSide] = useState("");
  const sideCtx = useContext(SideContext);

  function onChangeHandler(e) {
    // console.log(`${props.id} on change :${e.currentTarget.value}`);
    console.log(`set ${props.id} : ${sideCtx.side}`);
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
        side {props.id}
        <input
          type="number"
          value={side}
          onChange={onChangeHandler}
          // onInput={onInputHandler}
        />
      </label>
    </form>
  );
}
