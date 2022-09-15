import React from "react";
import "./btn.scss";

const Btn = ({ text, bg, width }) => {
  return (
    <button style={{ backgroundColor: bg, width: width }} className="Btn">
      {text}
    </button>
  );
};

export default Btn;
