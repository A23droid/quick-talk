import React, { useEffect, useRef } from "react";
import { useState } from "react";
import ClearChatButton from "./ClearChatButton";
import MessageInput from "./MessageInput";
import SendButton from "./SendButton"

export default function ChatWindow(props) {
    const [text, setText] = useState("");
    
    const chatEndRef = useRef(null);

    useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [props.messages]);

    const handleSend = () => {
        // Append
        const newMessage = {
            message: text,
            time: new Date().toLocaleString("en-IN")
        }
        props.setMessages([...props.messages, newMessage]);
        setText("");
        // console.log(props.messages)
    }

  return (
  <>
    <div className="flex flex-col w-full max-w-2xl mx-auto h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {props.messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`p-3 rounded-lg max-w-xs ${
                msg.sender === "me"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {msg.message}
              {msg.time && (
                <div className="text-xs mt-1 opacity-70">{msg.time}</div>
              )}
            </div>
          </div>
        ))}
        <div ref={chatEndRef}/>
      </div>

      {/* Input area goes outside the map */}
      <div className="border-t bg-white p-4 flex items-center space-x-2">
        <MessageInput text={text} setText={setText} />
        <SendButton handleSend={handleSend} />
        <ClearChatButton setMessages={props.setMessages} />
      </div>
    </div>
  </>
);

}