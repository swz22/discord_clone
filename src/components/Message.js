import React from "react";
import "./Message.css";
import { Avatar } from "@material-ui/core";

function Message() {
  return (
    <div className="message">
      <Avatar />
      <div className="message_info">
        <h4>
          swz22
          <span className="message_timestamp">Timestamp placeholder</span>
        </h4>
        <p> Sample message placeholder </p>
      </div>
    </div>
  );
}

export default Message;
