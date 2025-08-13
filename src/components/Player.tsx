"use client";

interface PlayerProps {
  link: string;
  setLink: (link: string) => void;
}

export default function Player({ link, setLink }: PlayerProps) {
  return (
    <div className="w-1/3 p-4 flex flex-col">
      <h2 className="text-2xl font-bold mb-4">YouTube Player</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Enter YouTube Link"
          className="flex-grow p-2 rounded-l-md bg-gray-800 border border-gray-700 focus:outline-none"
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-r-md">
          Load
        </button>
      </div>
      <div className="aspect-video bg-black flex-grow rounded-md">
        {/* YouTube player will be embedded here */}
      </div>
    </div>
  );
}
