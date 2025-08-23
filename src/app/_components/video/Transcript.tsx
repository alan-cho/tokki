"use client";

import { YoutubeTranscript, TranscriptResponse } from "youtube-transcript";
import { useEffect, useState } from "react";

type Props = {
  videoId: string;
};

const Transcript = ({ videoId }: Props) => {
  const [transcript, setTranscript] = useState<TranscriptResponse[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (videoId) {
      setError(null);
      YoutubeTranscript.fetchTranscript(videoId)
        .then((data) => {
          setTranscript(data);
        })
        .catch(() => {
          setError("Could not retrieve transcript for this video.");
          setTranscript([]);
        });
    }
  }, [videoId]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="h-96 overflow-y-auto">
      {transcript.map((item, index) => (
        <p key={index} className="mb-2">
          {item.text}
        </p>
      ))}
    </div>
  );
};

export default Transcript;
