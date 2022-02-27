import { React, useContext, useState } from "react";
import SideContext from "../SideContext/side-context";
import "./OutputForm.css";

export default function OutputForm(props) {
  const [Output, setOutput] = useState("");
  const sideCtx = useContext(SideContext);

  function validate_input(a, b, c) {
    // return true;
    if (a + b > c && a + c > b && b + c > a) {
      return true;
    }
    return false;
  }

  function calculate_resault() {
    var sideArr = sideCtx.side;
    var a = parseInt(sideArr[0]);
    var b = parseInt(sideArr[1]);
    var c = parseInt(sideArr[2]);
    var output = "";

    if (validate_input(a, b, c)) {
      var s = (a + b + c) / 2;
      var local_area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
      var arr = [a, b, c].sort();
      console.log(a, b, c, s, local_area);
      console.log(arr);
      if (a == b && b == c) {
        output = "Equilateral triangle";
      } else if (arr[2] * arr[2] == arr[1] * arr[1] + arr[0] * arr[0]) {
        output = "Right triangle";
      } else if (arr[0] == arr[1]) {
        output = "Isosceles triangle";
      } else {
        output = "Scalene triangle";
      }
    } else {
      props.setIsValid(false);
      local_area = -1;
      output = "ERROR";
    }
    setOutput(output);
  }

  return (
    <div>
      <p className="result">Result</p>
      {/* <OutputFiled>{Re}</OutputFiled> */}
      <div className="OutputBlock">
        <div class="button" onClick={calculate_resault}>
          Enter
        </div>
        <div className="output">{Output}</div>
      </div>
    </div>
  );
}
