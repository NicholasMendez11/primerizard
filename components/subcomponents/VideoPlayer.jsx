import React from "react";
import Plyr from "plyr-react";
function VideoPlayer({ source, provider }) {
  const videoSrc = {
    type: "video",
    sources: [
      {
        src: source,
        provider: provider,
        size: 1080,
      },
    ],
  };
  return <Plyr source={videoSrc} />;
}

export default VideoPlayer;
