"use client";

import { useState } from "react";

const Search = ({ setVideoId }: { setVideoId: (videoId: string) => void }) => {
  const [input, setInput] = useState("");
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter YouTube URL"
      />
      <button onClick={() => setVideoId(input)}>Search</button>
    </div>
  );
};

export default Search;
