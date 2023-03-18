import React from "react";

const Cell = ({ id, cell, setCells, go }) => {
  const clickHandler = e => {
    const taken =
      e.target.firstChild.classList.contains("circle") ||
      e.target.firstChild.classList.contains("cross");

    if (!taken) {
      if (go === "circle ") {
      }
    }
  };

  return <div className="square" id={id} onClick={clickHandler}></div>;
};

export default Cell;
