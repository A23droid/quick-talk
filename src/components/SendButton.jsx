export default function SendButton(props) {
    
  return (
    <button 
    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
    onClick={props.handleSend}
    >
      Send
    </button>
  );
}