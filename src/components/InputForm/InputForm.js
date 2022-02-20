import { useState } from "react";

function InputForm() {
  const [side1, setSide1] = useState("");
  const [side2, setSide2] = useState("");
  const [side3, setSide3] = useState("");
  return (
    <div>
      <form>
        <label>
          Side 1
          <input
            type="double"
            value={side1}
            onChange={(e) => setSide1(e.target.value)}
          />
        </label>
      </form>
      <form>
        <label>
          Side 2
          <input
            type="double"
            value={side2}
            onChange={(e) => setSide2(e.target.value)}
          />
        </label>
      </form>
      <form>
        <label>
          Side 3
          <input
            type="double"
            value={side3}
            onChange={(e) => setSide3(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
}
export default InputForm;