"use client";

import { useState } from "react";
import Player from "@/app/_components/video/Player";
import Search from "@/app/_components/video/Search";

const Container = () => {
  const [url, setUrl] = useState<string>("");

  return (
    <div className="flex h-full flex-col">
      <Search setUrl={setUrl} />
      <Player url={url} />
    </div>
  );
};

export default Container;
