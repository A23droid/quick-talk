import React, { useEffect, useRef } from "react";
import { useState } from "react";
import ClearChatButton from "./ClearChatButton";
import MessageInput from "./MessageInput";
import SendButton from "./SendButton"

export default function ChatWindow(props) {
    const [text, setText] = useState("");
    const [isMe, setIsMe] = useState(true);
    const chatEndRef = useRef(null);

    useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [props.messages]);

    const emoticons = {
                        ":)": "🙂",
                        ":(": "🙁",
                        ":D": "😃",
                        ";)": "😉",
                    };

    function replaceEmoticons(text) {
    for (const [emoticon, emoji] of Object.entries(emoticons)) {
        // replace only if emoticon is at start/end OR surrounded by spaces
        const regex = new RegExp(`(^|\\s)${escapeRegex(emoticon)}(?=\\s|$)`, "g");
        text = text.replace(regex, `$1${emoji}`);
    }
    return text;
    }

    function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }


    const handleSend = () => {
        // Append
        const newMessage = {
            sender: isMe ? "me" : "other",
            message: text,
            time: (new Date().toTimeString().split(' ')[0]).slice(0, 5) // HH:MM:SS
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
              {replaceEmoticons(msg.message)}
              {msg.time && (
                <div className="text-xs mt-1 opacity-70">{msg.time}</div>
              )}
            </div>
          </div>
        ))}
        <div ref={chatEndRef}/>
      </div>

      {/* Input area goes outside the map */}
        <div className="border-t bg-white p-4 flex items-center space-x-3">
        {/* Sender toggle */}
        <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">
            {isMe ? "Me" : "Other"}
            </span>
            <button
            onClick={() => setIsMe(!isMe)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                isMe ? "bg-blue-500" : "bg-gray-300"
            }`}
            >
            <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                isMe ? "translate-x-6" : "translate-x-0"
                }`}
            />
            </button>
        </div>
        <MessageInput text={text} setText={setText} />
        <SendButton handleSend={handleSend} />
        <ClearChatButton setMessages={props.setMessages} />
        </div>
    </div>
  </>
);

}