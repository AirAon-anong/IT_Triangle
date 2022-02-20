import { React, useState } from "react";

export default function InputFiled(props) {
  const [side1, setSide1] = useState("");

  return (
    <div className="inputField">
      {props.name}
        <input
          type="double"
          value={side1}
          onChange={(e) => setSide1(e.target.value)}
        />
    </div>
  );
}
