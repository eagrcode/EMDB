import { useVideos } from "../getVideos";
import { useParams } from "react-router";

import { VideoPlayer } from "../Components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import YouTube from "react-youtube";

function Videos() {
  const { id } = useParams();

  const { data: videos, isLoading, isError } = useVideos(id);

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  const opts = {
    height: "100%",
    width: "100%",
  };

  const videosRow = videos?.map(
    (video) =>
      video.type === "Trailer" && (
        <SwiperSlide width="100%" key={video.id}>
          <YouTube videoId={video.key} opts={opts} className="video-player" />
        </SwiperSlide>
      )
  );

  return (
    <div className="video-row">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="swiper"
        loop="true"
      >
        {videosRow}
      </Swiper>
    </div>
  );
}

export default Videos;
