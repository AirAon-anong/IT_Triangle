import React from "react";

export default function OutputFiled(props) {
  var rectangleSize = props.children;
  var op = <div>Resault</div>;
  if (rectangleSize != -1) {
    op = <div>rectangle area : {rectangleSize}</div>;
  }
  return op;
}
