"use client";

import { useState } from "react";
import Container from "@/app/_components/video/Container";

export default function Home() {
  const [videoId, setVideoId] = useState<string>("M7lc1UVf-VE");

  return (
    <main className="flex min-h-screen">
      <Container videoId={videoId} setVideoId={setVideoId} />
    </main>
  );
}
