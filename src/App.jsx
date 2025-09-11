import { useState } from 'react'
import ChatWindow from './components/ChatWindow';
import './App.css'

export default function App() {
  const [messages, setMessages] = useState([]);
  // TODO: Auto-scroll
  // TODO: Responsiveness
  // TODO: localStorage
  // TODO: Theme Toggler
  // TODO: Sender/Reciever
  // TODO: ;) => 😉
  // TODO: Date & Time (like WA)
  return (
    <div className="flex h-screen bg-gray-100">
      <ChatWindow 
      setMessages = {setMessages} 
      messages = {messages}/>
    </div>
  );
}
