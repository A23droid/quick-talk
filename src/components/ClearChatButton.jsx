export default function ClearChatButton(props) {
    const handleClear = () => {
        props.setMessages([]);
    }
  return (
    <button 
      className="group relative bg-gradient-to-r from-red-500 to-rose-600 dark:from-red-600 dark:to-rose-700 hover:from-red-600 hover:to-rose-700 dark:hover:from-red-700 dark:hover:to-rose-800 text-white px-4 sm:px-5 py-3 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 shadow-md overflow-hidden"
      onClick={handleClear}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
      
      {/* Button content */}
      <div className="relative flex items-center space-x-2">
        <svg 
          className="w-4 h-4 transform group-hover:rotate-12 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
          />
        </svg>
        <span className="hidden sm:inline">Clear</span>
      </div>
    </button>
  );
}