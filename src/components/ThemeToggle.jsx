export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className={`group relative w-16 h-8 flex items-center rounded-full p-1 transition-all duration-500 shadow-md hover:shadow-lg transform hover:scale-105 ${
    theme === 'light'
        ? 'bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-500 hover:to-cyan-500'
        : 'bg-gray-700/80 hover:bg-gray-600/80'
    }`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Animated background glow */}
      <div className={`absolute inset-0 rounded-full blur-md opacity-50 ${
        theme === 'light' 
          ? 'bg-blue-400' 
          : 'bg-blue-700'
      }`}></div>
      
      {/* Toggle circle */}
      <div
        className={`relative bg-white w-6 h-6 rounded-full shadow-lg flex items-center justify-center transform transition-all duration-500 ${
          theme === 'light' ? 'translate-x-0' : 'translate-x-8'
        } group-hover:scale-110`}
      >
        {/* Sun/Moon icon with rotation animation */}
        <div className={`text-sm transition-all duration-500 ${
          theme === 'light' 
            ? 'text-yellow-500 rotate-0' 
            : 'text-indigo-600 rotate-360'
        }`}>
          {theme === 'light' ? (
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </div>
      </div>
      
      {/* Floating particles effect */}
      <div className={`absolute inset-0 rounded-full ${theme === 'light' ? 'animate-pulse' : ''}`}>
        {theme === 'light' && (
          <>
            <div className="absolute top-1 left-3 w-1 h-1 bg-yellow-200 rounded-full animate-ping"></div>
            <div className="absolute bottom-1 right-3 w-1 h-1 bg-yellow-200 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
          </>
        )}
      </div>
    </button>
  );
}