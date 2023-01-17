import { useVideos } from "../getVideos";
import { useParams } from "react-router";

import { VideoPlayer } from "../Components";
import ScrollContainer from "react-indiana-drag-scroll";

function Videos() {
  const { id } = useParams();

  const { data: videos, isLoading, isError } = useVideos(id);

  if (isLoading) {
    return;
  }

  if (isError) {
    return;
  }

  const videosRow = videos?.map((video) => (
    <VideoPlayer key={video.id} id={video.key} />
  ));

  return (
    <div className="video-row">
      <ScrollContainer vertical={false} className="video-row-inner">
        {videosRow}
      </ScrollContainer>
    </div>
  );
}

export default Videos;
