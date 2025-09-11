import ClearChatButton from "./ClearChatButton";
import MessageInput from "./MessageInput";

export default function ChatWindow() {
  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="flex justify-start">
          <div className="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-xs">
            Sample received message
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
            Sample sent message
          </div>
        </div>
      </div>
      <div className="border-t bg-white p-4 flex items-center space-x-2">
        <MessageInput />
        <ClearChatButton />
      </div>
    </div>
  );
}