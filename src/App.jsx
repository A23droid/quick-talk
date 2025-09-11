import { useState, useEffect, useRef } from 'react'
import ChatWindow from './components/ChatWindow';
import './App.css'

export default function App() {
  const [messages, setMessages] = useState(() => {
    const stored = localStorage.getItem("messages");
    return stored ? JSON.parse(stored) : []
  });

  // DONE: Auto-scroll
  // TODO: Responsiveness [END]
  // DONE: localStorage
  // TODO: Theme Toggler [END]
  // DONE: Sender/Reciever
  // DONE: ;) => 😉 + Enter = Send
  // DONE: Date & Time => HH: MM (like WA)
    
    // set items
    useEffect(() => {
      localStorage.setItem("messages", JSON.stringify(messages));
    }, [messages])
  return (
    <div className="flex h-screen bg-gray-100">
      <ChatWindow 
      setMessages = {setMessages} 
      messages = {messages}
      />
    </div>
  );
}
