import React from "react";

function HoverDiv(props) {
  return (
    <div
      id="hoverDiv"
      style={{
        position: "fixed",
        top: props.y - 50,
        left: props.x,
        color: props.col,
        backgroundColor: "white",
        opacity: "90%",
        borderRadius: "10px"
      }}
    >
      <h2>{props.name}</h2>
    </div>
  );
}

export default HoverDiv;
