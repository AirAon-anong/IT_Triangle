import React, { createContext, useState } from "react";

const SideContext = createContext({
  side: [],
  badFields: [],
  isValid: [],
  output: "",
  setSide: () => {},
  setBadFields: () => {},
  setIsValid: () => {},
});

export function SideContextProvider(props) {
  const [side, setSide] = useState([0, 0, 0]);
  const [badFields, setBadFields] = useState([]);
  const [isValid, setIsValid] = useState([true, true, true]);

  function setSideHandler(sideArr) {
    setSide(sideArr);
  }

  function setBadFieldsHandler(badSideArr) {
    setBadFields(badSideArr);
  }

  function setIsValidHandler(isValidBool) {
    setIsValid(isValidBool);
  }

  const context = {
    side: side,
    badFields: badFields,
    isValid: isValid,
    setSide: setSideHandler,
    setBadFields: setBadFieldsHandler,
    setIsValid: setIsValidHandler,
  };

  return (
    <div>
      {/* <p>this is context</p> */}
      <SideContext.Provider value={context}>
        {props.children}
      </SideContext.Provider>
    </div>
  );
}

export default SideContext;
