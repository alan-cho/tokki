"use client";

import ReactPlayer from "react-player";

const Player = ({ videoId }: { videoId: string }) => {
  return (
    <div className="relative h-full w-full">
      {videoId && (
        <ReactPlayer
          src={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="50%"
          height="50%"
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      )}
    </div>
  );
};

export default Player;
