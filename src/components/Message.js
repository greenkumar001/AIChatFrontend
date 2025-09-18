import React from "react";
import "../styles/Message.css";

export default function Message({ role, text }) {
  return (
    <div className={`message ${role}`}>
      <div className="bubble">{text}</div>
    </div>
  );
}
