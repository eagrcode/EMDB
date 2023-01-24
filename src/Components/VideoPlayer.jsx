import YouTube from "react-youtube";

function VideoPlayer({ id }) {
  return <YouTube className="video-player" videoId={id} />;
}

export default VideoPlayer;
