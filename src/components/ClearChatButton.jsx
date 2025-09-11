export default function ClearChatButton(props) {
    const handleClear = () => {
        props.setMessages([]);
    }
  return (
    <button 
    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
    onClick={handleClear}
    >
      Clear Chat
    </button>
  );
}