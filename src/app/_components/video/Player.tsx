"use client";

import ReactPlayer from "react-player";

const Player = ({ url }: { url: string }) => {
  return (
    <div>
      {url && <ReactPlayer src={url} controls width="100%" height="100%" />}
    </div>
  );
};

export default Player;
