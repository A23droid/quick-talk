import React from "react";
import { useState } from "react";

export default function MessageInput(props) {
  return (
    <input
      type="text"
      className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Type a message..."
      value={props.text}
      onChange={(e) => props.setText(e.target.value)}
    />
  );
}