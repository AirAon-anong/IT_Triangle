import { React, useContext, useState } from "react";
import OutputFiled from "../OutputFiled/OutputFiled";
import SideContext from "../SideContext/side-context";

export default function OutputForm() {
  const [Re, setRe] = useState(-1);
  const sideCtx = useContext(SideContext);

  function inputValidator() {
    var sideArr = sideCtx.side.sort();
    var a = parseInt(sideArr[2]);
    var b = parseInt(sideArr[1]);
    var c = parseInt(sideArr[0]);

    if (a + b > c && a + c > b && b + c > a) clickHandler(a, b, c);
  }

  function clickHandler(a, b, c) {
    // var s = (parseInt(a) + parseInt(b) + parseInt(c)) / 2;
    var s = (a + b + c) / 2;

    // console.log(a, b, c, s);
    // console.log(parseInt(a + b));
    var re = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    // console.log(`RESALUT ${re}`);
    // alert(`resault : ${re}`);
    setRe(re);
  }

  return (
    <div>
      <OutputFiled>{Re}</OutputFiled>
      <button onClick={inputValidator}>Enter</button>
    </div>
  );
}
