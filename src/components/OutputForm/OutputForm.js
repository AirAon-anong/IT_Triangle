import { Children, React, useContext, useState } from "react";
import SideContext from "../SideContext/side-context";
import "./OutputForm.css";

export default function OutputForm(props) {
  const [Output, setOutput] = useState("");
  const sideCtx = useContext(SideContext);

  function checkIfInvalid(str) {
    if (str.length <= 0) {
      return true;
    }
    if (str == "0") {
      return true;
    }
    for (let i = 0; i < str.length; i++) {
      if (str[i] != "." && (str[i] < "0" || str[i] > "9")) {
        return true;
      }
    }
    return false;
  }

  function validate_input(a, b, c) {
    var sideArr = sideCtx.side;
    var tmpBadArr = [];
    for (let i = 0; i < 3; i++) {
      if (checkIfInvalid(sideArr[i])) {
        tmpBadArr.push(i);
      }
    }

    sideCtx.setBadFields(tmpBadArr);
    console.log("TMP", tmpBadArr);
    // console.log("CTX", sideCtx.badFields);
    if (tmpBadArr.length > 0) {
      return false;
    }

    var a = parseFloat(sideArr[0]);
    var b = parseFloat(sideArr[1]);
    var c = parseFloat(sideArr[2]);
    if (a + b > c && a + c > b && b + c > a) {
      return true;
    }
    return false;
  }

  function calculate_resault() {
    var output = "";
    if (validate_input(a, b, c)) {
      var sideArr = sideCtx.side;
      // console.log(sideArr);
      var a = parseFloat(sideArr[0]);
      var b = parseFloat(sideArr[1]);
      var c = parseFloat(sideArr[2]);
      var s = (a + b + c) / 2;
      var local_area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
      var arr = [a, b, c].sort();
      // console.log(a, b, c, s, local_area);
      // console.log(arr);
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
      // console.log(sideCtx.badFields);
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
