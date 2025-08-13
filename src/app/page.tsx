"use client";

import { useState } from "react";
import Player from "@/components/Player";
import Transcription from "@/components/Transcription";
import Chat from "@/components/Chat";

export default function Home() {
  const [link, setLink] = useState("");

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Player link={link} setLink={setLink} />
      <Transcription />
      <Chat />
    </div>
  );
}
