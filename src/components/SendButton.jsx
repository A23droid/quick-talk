export default function SendButton(props) {
  return (
    <button 
      className="group relative bg-blue-800 dark:bg-blue-500 hover:bg-blue-600 dark:hover:bg-blue-500 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 shadow-md overflow-hidden"
      onClick={props.handleSend}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
      
      {/* Button content */}
      <div className="relative flex items-center space-x-2">
        <span>Send</span>
        <svg 
          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" 
          />
        </svg>
      </div>
    </button>
  );
}