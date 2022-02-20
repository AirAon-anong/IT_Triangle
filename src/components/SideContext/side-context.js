import React, { createContext, useState } from "react";

const SideContext = createContext({
  side: [],
  badside: [],
  setSide: () => {},
  setBadeSide: () => {},
});

export function SideContextProvider(props) {
  const [side, setSide] = useState([0, 0, 0]);
  const [badSide, setBadSide] = useState([0, 0, 0]);

  function setSideHandler(sideArr) {
    setSide(sideArr);
  }

  function setBadSideHandler(badSideArr) {
    setBadSide(badSideArr);
  }

  const context = {
    side: side,
    badside: badSide,
    setSide: setSideHandler,
    setBadSide: setBadSideHandler,
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
