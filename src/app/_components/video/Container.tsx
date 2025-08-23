"use client";

import Player from "@/app/_components/video/Player";
import Search from "@/app/_components/video/Search";
import Transcript from "@/app/_components/video/Transcript";

type Props = {
  videoId: string;
  setVideoId: (videoId: string) => void;
};

const Container = ({ videoId, setVideoId }: Props) => {
  return (
    <div className="flex h-full items-center justify-between">
      <div className="flex flex-col items-center justify-center">
        <Search setVideoId={setVideoId} />
        <Player videoId={videoId} />
      </div>
      <div className="flex items-center justify-center">
        <Transcript videoId={videoId} />
      </div>
    </div>
  );
};

export default Container;
