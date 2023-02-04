// libraries
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import YouTube from "react-youtube";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

function Videos({ videos, isLoading, isError }) {
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
    <section id="trailer-section">
      <h2 className="media-header">Media</h2>
      <div className="video-row">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          className="swiper"
        >
          {videosRow}
        </Swiper>
      </div>
    </section>
  );
}

export default Videos;
