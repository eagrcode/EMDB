import YouTube from "react-youtube";

import ScrollContainer from "react-indiana-drag-scroll";

function VideoPlayer({ id }) {
  return <YouTube className="video-player" videoId={id} />;
}

export default VideoPlayer;
