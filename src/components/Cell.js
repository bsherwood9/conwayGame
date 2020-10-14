import React, { useEffect, useState } from "react";

const Cell = () => {
  let [isAlive, setIsAlive] = useState(false);
  // let [wasAlive, setWasAlive] = useState(false);

  let stylingStuff = {
    border: "1px solid black",
    color: "red",
    height: "50px",
    width: "50px"
  };
  if (isAlive) {
    stylingStuff = {
      height: "50px",
      width: "50px",
      border: "1px solid black",
      background: "black",
      color: "white"
    };
  }

  return <div onClick={() => setIsAlive(!isAlive)} style={stylingStuff}></div>;
};

export default Cell;