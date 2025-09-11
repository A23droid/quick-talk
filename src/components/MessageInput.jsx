import React from "react";

export default function MessageInput(props) {
    return (
  <div className="relative">
    <input
      type="text"
      className={`w-full p-3 sm:p-4 rounded-2xl font-medium shadow-sm hover:shadow-md transition-all duration-300 text-sm sm:text-base focus:outline-none focus:ring-2 ${
        props.theme === "light"
          ? "bg-white/90 border border-gray-300/50 text-gray-800 placeholder-gray-400 focus:ring-blue-400/50 focus:border-blue-400"
          : "bg-gray-800/90 border border-gray-600/50 text-gray-100 placeholder-gray-500 focus:ring-blue-500/50 focus:border-blue-500"
      }`}
      placeholder="Type your message..."
      value={props.text}
      onChange={(e) => props.setText(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter" && props.text.trim()) {
          props.handleSend();
        }
      }}
    />

    {/* for long messages */}
    {props.text.length > 200 && (
      <div
        className={`absolute -bottom-6 right-2 text-xs ${
          props.theme === "light" ? "text-slate-400" : "text-gray-500"
        }`}
      >
        {props.text.length} / 500
      </div>
    )}
  </div>
);

}