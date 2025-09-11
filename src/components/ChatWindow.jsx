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
                    ":-)": "🙂",
                    ":(": "🙁",
                    ":-(": "🙁",
                    ":D": "😃",
                    ":-D": "😃",
                    ";)": "😉",
                    ";-)": "😉",
                    ":P": "😛",
                    ":-P": "😛",
                    ":O": "😮",
                    ":-O": "😮",
                    ":/": "😕",
                    ":-/": "😕",
                    ":|": "😐",
                    ":-|": "😐",
                    ":'(": "😢",
                    ":'-)": "😂",
                    "XD": "😆",
                    "xD": "😆",
                    "B)": "😎",
                    "B-)": "😎",
                    "<3": "❤️",
                    "</3": "💔",
                    "O:)": "😇",
                    "3:)": "😈",
                    ":v": "😏",
                    ":$": "😳",
                    ">:(": "😠"
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
        if (!text) return;
        const newMessage = {
            sender: isMe ? "me" : "other",
            message: text,
            time: (new Date().toTimeString().split(' ')[0]).slice(0, 5) // HH:MM:SS
        }
        props.setMessages([...props.messages, newMessage]);
        setText("");
        // console.log(props.messages)
    }
  //   <div className="flex flex-col w-full h-[90vh] sm:h-[85vh] bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 border border-slate-200/50 dark:border-gray-700/50 rounded-3xl shadow-xl dark:shadow-2xl dark:shadow-black/20 overflow-hidden backdrop-blur-sm">
      
  //     {/* Chat Header */}
  //     <div className="bg-gradient-to-r from-blue-400 to-cyan-400 dark:from-gray-800 dark:to-gray-700 p-4 text-white shadow-md">
  //   <h2 className="text-lg font-semibold text-center tracking-wider">
  //       Chat
  //   </h2>
  //   </div>


  //     {/* Messages Area */}
  //     <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
  //       {props.messages.length === 0 && (
  //         <div className="flex items-center justify-center h-full text-slate-500 dark:text-gray-400">
  //           <div className="text-center">
  //             <div className="text-6xl mb-4">🙊</div>
  //             <p className="text-lg font-medium">No messages yet</p>
  //             <p className="text-sm opacity-70">Start a conversation!</p>
  //           </div>
  //         </div>
  //       )}
        
  //       {props.messages.map((msg, index) => (
  //         <div
  //           key={index}
  //           className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"} animate-[slideUp_0.3s_ease-out]`}
  //         >
  //           <div
  //           className={`group relative p-4 max-w-[85%] sm:max-w-[75%] md:max-w-[70%] rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 ${
  //               msg.sender === "me"
  //               ? "bg-blue-400/80 dark:bg-blue-600/80 text-white rounded-br-md"
  //               : "bg-gray-100 dark:bg-gray-700 border border-gray-200/50 dark:border-gray-600/50 text-gray-900 dark:text-gray-100 rounded-bl-md"
  //           }`}
  //           >
  //             <div className="font-medium text-sm sm:text-base leading-relaxed break-words">
  //               {replaceEmoticons(msg.message)}
  //             </div>
  //             {msg.time && (
  //               <div className={`text-xs mt-2 opacity-75 font-normal ${
  //                 msg.sender === "me" 
  //                   ? "text-indigo-100" 
  //                   : "text-slate-500 dark:text-gray-400"
  //               }`}>
  //                 {msg.time}
  //               </div>
  //             )}
              
  //             {/* Message tail */}
  //             <div
  //               className={`absolute bottom-0 w-3 h-3 ${
  //                   msg.sender === "me"
  //                   ? "right-0 bg-blue-400/80 dark:bg-blue-600/80 rounded-bl-full"
  //                   : "left-0 bg-gray-100 dark:bg-gray-700 border-l border-b border-gray-200/50 dark:border-gray-600/50 rounded-br-full"
  //               }`}
  //               />
  //           </div>
  //         </div>
  //       ))}
  //       <div ref={chatEndRef}/>
  //     </div>

  //     {/* Input Area */}
  //     <div className="bg-slate-50/80 dark:bg-gray-800/80 backdrop-blur-sm border-t border-slate-200/50 dark:border-gray-700/50 p-4 sm:p-6">
        
  //       {/* Sender Toggle */}
  //       <div className="flex items-center justify-center mb-4">
  //         <div className="flex items-center space-x-3 bg-white dark:bg-gray-700 rounded-full px-4 py-2 shadow-md border border-slate-200/50 dark:border-gray-600/50"> 
  // <span
  //   className={`text-sm font-semibold transition-colors duration-300 ${
  //     !isMe
  //       ? "text-blue-500 dark:text-blue-400"
  //       : "text-gray-500 dark:text-gray-400"
  //   }`}
  // >
  //   Other
  // </span>
  // <button
  //   onClick={() => setIsMe(!isMe)}
  //   className={`relative w-14 h-7 flex items-center rounded-full p-1 transition-all duration-300 shadow-inner ${
  //     isMe 
  //       ? "bg-gradient-to-r from-blue-400 to-cyan-500 dark:from-blue-600 dark:to-cyan-600" 
  //       : "bg-slate-300 dark:bg-gray-600"
  //   }`}
  // >
  //   <div
  //     className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-all duration-300 flex items-center justify-center ${
  //       isMe ? "translate-x-7" : "translate-x-0"
  //     }`}
  //   >
  //     <div className={`w-2 h-2 rounded-full ${
  //       isMe ? "bg-blue-500" : "bg-slate-400"
  //     }`} />
  //   </div>
  //   </button>
  //   <span className={`text-sm font-semibold transition-colors duration-300 ${
  //       isMe ? "text-blue-600 dark:text-blue-400" : "text-slate-500 dark:text-gray-400"
  //   }`}>
  //       Me
  //   </span>
  //   </div>

  //       </div>

  //       {/* Message Input Row */}
  //       <div className="flex items-center space-x-3">
  //         <div className="flex-1">
  //           <MessageInput text={text} setText={setText} handleSend={handleSend}/>
  //         </div>
  //         <SendButton handleSend={handleSend} />
  //         <ClearChatButton setMessages={props.setMessages} />
  //       </div>
  //     </div>
  //   </div>
  // );

    return (

  <div
    className={`flex flex-col w-full h-[90vh] sm:h-[85vh] rounded-3xl shadow-xl overflow-hidden backdrop-blur-sm border ${
      props.theme === "light"
        ? "bg-white border-slate-200/50 shadow-gray-200/40"
        : "bg-gray-900 border-gray-700/50 shadow-black/20"
    }`}
  >
    {/* Chat Header */}
    <div
      className={`p-4 text-white shadow-md ${
        props.theme === "light"
          ? "bg-blue-500"
          : "bg-gray-800"
      }`}
    >
      <h2 className="text-lg font-semibold text-center tracking-wider">
        Chat
      </h2>
    </div>

    {/* Messages Area */}
    <div
      className={`flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 scrollbar-thin scrollbar-track-transparent ${
        props.theme === "light"
          ? "scrollbar-thumb-slate-300"
          : "scrollbar-thumb-gray-600"
      }`}
    >
      {props.messages.length === 0 && (
        <div
          className={`flex items-center justify-center h-full ${
            props.theme === "light" ? "text-slate-500" : "text-gray-400"
          }`}
        >
          <div className="text-center">
            <div className="text-6xl mb-4">🙊</div>
            <p className="text-lg font-medium">No messages yet</p>
            <p className="text-sm opacity-70">Start a conversation!</p>
          </div>
        </div>
      )}

      {props.messages.map((msg, index) => (
        <div
          key={index}
          className={`flex ${
            msg.sender === "me" ? "justify-end" : "justify-start"
          } animate-[slideUp_0.3s_ease-out]`}
        >
          <div
            className={`group relative p-3 max-w-[85%] sm:max-w-[75%] md:max-w-[70%] rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 ${
              msg.sender === "me"
                ? props.theme === "light"
                  ? "bg-blue-500 text-white rounded-br-md"
                  : "bg-blue-600 text-white rounded-br-md"
                : props.theme === "light"
                ? "bg-gray-100 border border-gray-200/50 text-gray-900 rounded-bl-md"
                : "bg-gray-700 border border-gray-600/50 text-gray-100 rounded-bl-md"
            }`}
          >
            <div className="font-medium text-sm sm:text-base leading-relaxed break-words">
              {replaceEmoticons(msg.message)}
            </div>
            {msg.time && (
              <div
                className={`text-xs mt-1 opacity-75 font-normal ${
                  msg.sender === "me"
                    ? "text-indigo-100"
                    : props.theme === "light"
                    ? "text-slate-500"
                    : "text-gray-400"
                }`}
              >
                {msg.time}
              </div>
            )}

            {/* Message tail */}
            <div
              className={`absolute bottom-0 w-3 h-3 ${
                msg.sender === "me"
                  ? props.theme === "light"
                    ? "right-0 bg-blue-500 rounded-bl-full"
                    : "right-0 bg-blue-600 rounded-bl-full"
                  : props.theme === "light"
                  ? "left-0 bg-gray-100 border-l border-b border-gray-200/50 rounded-br-full"
                  : "left-0 bg-gray-700 border-l border-b border-gray-600/50 rounded-br-full"
              }`}
            />
          </div>
        </div>
      ))}
      <div ref={chatEndRef} />
    </div>

    {/* Input Area */}
    <div
      className={`backdrop-blur-sm border-t p-4 sm:p-6 ${
        props.theme === "light"
          ? "bg-slate-50/80 border-slate-200/50"
          : "bg-gray-800/80 border-gray-700/50"
      }`}
    >
      {/* Sender Toggle */}
      <div className="flex items-center justify-center mb-4">
        <div
          className={`flex items-center space-x-3 rounded-full px-4 py-2 shadow-md border ${
            props.theme === "light"
              ? "bg-white border-slate-200/50"
              : "bg-gray-700 border-gray-600/50"
          }`}
        >
          <span
            className={`text-sm font-semibold transition-colors duration-300 ${
              !isMe
                ? props.theme === "light"
                  ? "text-blue-500"
                  : "text-blue-400"
                : props.theme === "light"
                ? "text-gray-500"
                : "text-gray-400"
            }`}
          >
            Other
          </span>
          <button
            onClick={() => setIsMe(!isMe)}
            className={`relative w-14 h-7 flex items-center rounded-full p-1 transition-all duration-300 shadow-inner ${
              isMe
                ? props.theme === "light"
                  ? "bg-blue-500"
                  : "bg-blue-600"
                : props.theme === "light"
                ? "bg-slate-300"
                : "bg-gray-600"
            }`}
          >
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-all duration-300 flex items-center justify-center ${
                isMe ? "translate-x-7" : "translate-x-0"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  isMe ? "bg-blue-500" : "bg-slate-400"
                }`}
              />
            </div>
          </button>
          <span
            className={`text-sm font-semibold transition-colors duration-300 ${
              isMe
                ? props.theme === "light"
                  ? "text-blue-600"
                  : "text-blue-400"
                : props.theme === "light"
                ? "text-slate-500"
                : "text-gray-400"
            }`}
          >
            Me
          </span>
        </div>
      </div>

      {/* Message Input Row */}
      <div className="flex items-center space-x-3">
        <div className="flex-1">
          <MessageInput text={text} theme = {props.theme} setText={setText} handleSend={handleSend} />
        </div>
        <SendButton handleSend={handleSend} />
        <ClearChatButton setMessages={props.setMessages} />
      </div>
    </div>
  </div>
);

}