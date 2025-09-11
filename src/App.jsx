import { useState } from 'react'
import ChatWindow from './components/ChatWindow';
import './App.css'

export default function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <ChatWindow />
    </div>
  );
}
