"use client";

import { useState } from "react";

const Search = ({ setUrl }: { setUrl: (url: string) => void }) => {
  const [input, setInput] = useState("");
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter YouTube URL"
      />
      <button onClick={() => setUrl(input)}>Search</button>
    </div>
  );
};

export default Search;
