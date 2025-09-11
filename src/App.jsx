import { useState, useEffect } from 'react'
import React from 'react';
import ChatWindow from './components/ChatWindow';
import ThemeToggle from './components/ThemeToggle';
import './App.css'

export default function App() {
  const [messages, setMessages] = useState(() => {
    const stored = localStorage.getItem("messages");
    return stored ? JSON.parse(stored) : []
  });
  const [theme, setTheme] = React.useState('light');
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
    
    // set items
    useEffect(() => {
      localStorage.setItem("messages", JSON.stringify(messages));
    }, [messages])

    return (
    <div className={`min-h-screen transition-all duration-700 ease-in-out ${
      theme === 'light' 
        ? 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50' 
        : 'bg-gradient-to-br from-gray-900 via-slate-900 to-black'
    }`}>
      
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-30 animate-pulse ${
          theme === 'light' ? 'bg-purple-300' : 'bg-purple-800'
        }`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-30 animate-pulse ${
          theme === 'light' ? 'bg-blue-300' : 'bg-blue-800'
        }`} style={{animationDelay: '2s'}}></div>
        <div className={`absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${
          theme === 'light' ? 'bg-indigo-200' : 'bg-indigo-900'
        }`} style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative flex min-h-screen items-center justify-center p-4 sm:p-6">
        <div className="flex flex-col w-full max-w-4xl mx-auto">
          
          {/* Header with theme toggle */}
          <div className="flex items-center justify-between mb-6">
            <div className={`text-2xl sm:text-3xl font-bold ${
              theme === 'light' 
                ? 'text-transparent bg-clip-text bg-blue-500' 
                : 'text-transparent bg-clip-text bg-blue-600'
            }`}>
              Quick Talk
            </div>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          {/* Main chat window */}
          <ChatWindow 
          messages={messages} 
          setMessages={setMessages}
          theme = {theme}
          />
          
          {/* Footer */}
          <div className={`text-center mt-4 text-sm ${
            theme === 'light' ? 'text-slate-500' : 'text-gray-400'
          }`}>
            ©A23droid
          </div>
        </div>
      </div>
    </div>
  );
}
