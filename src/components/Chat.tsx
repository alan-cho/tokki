"use client";

export default function Chat() {
  return (
    <div className="w-1/3 p-4 flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Chatbot</h2>
      <div className="flex-grow bg-gray-800 rounded-md mb-4">
        {/* Chat messages will appear here */}
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="Ask something..."
          className="flex-grow p-2 rounded-l-md bg-gray-700 border border-gray-600 focus:outline-none"
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-r-md">
          Send
        </button>
      </div>
    </div>
  );
}
