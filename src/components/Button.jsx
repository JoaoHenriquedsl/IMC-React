import React from "react";
import "./Button.css";
function Button({ id, value, action }) {
  return <button id={id} onClick={action}>{value}</button>;
}

export default Button;
