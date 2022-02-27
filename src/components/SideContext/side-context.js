import React, { createContext, useState } from "react";

const SideContext = createContext({
  side: [],
  badFields: [],
  isValid: true,
  output: "",
  setSide: () => {},
  setBadFields: () => {},
});

export function SideContextProvider(props) {
  const [side, setSide] = useState([0, 0, 0]);
  const [badFields, setBadFields] = useState([]);

  function setSideHandler(sideArr) {
    setSide(sideArr);
  }

  function setBadFieldsHandler(badSideArr) {
    setBadFields(badSideArr);
  }

  const context = {
    side: side,
    badFields: badFields,
    setSide: setSideHandler,
    setBadFields: setBadFieldsHandler,
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
