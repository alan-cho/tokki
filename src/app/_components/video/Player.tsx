"use client";

import ReactPlayer from "react-player";

const Player = ({ url }: { url: string }) => {
  return (
    <div className="relative h-full w-full">
      {url && (
        <ReactPlayer
          src={url}
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
