import InputForm from "../InputForm/InputForm";
import OutputForm from "../OutputForm/OutputForm";

function UserInterface() {
  return (
    <div>
      <p>Enter the length of sides</p>
      <div>
        <InputForm></InputForm>
        <OutputForm></OutputForm>
      </div>
    </div>
  );
}
export default UserInterface;
