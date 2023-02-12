// components
import { MovieCard } from "./index";

// libraries
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper";

import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function Row({ data, title, imageURL, imageSize, mediaType }) {
  const swiperPrev = useRef(null);
  const swiperNext = useRef(null);

  const movieRow = data?.map((movie) => (
    <SwiperSlide key={movie.id}>
      <MovieCard
        mediaType={mediaType}
        key={movie.id}
        id={movie.id}
        title={movie.title}
        imageURL={imageURL}
        imageSize={imageSize}
        image={movie?.poster_path}
      />
    </SwiperSlide>
  ));

  return (
    <div className="movie-row">
      <h2>{title}</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 1,
          },
          550: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          650: {
            slidesPerView: 5,
            spaceBetween: 5,
          },
          900: {
            slidesPerView: 6,
            spaceBetween: 1,
          },
          1020: {
            slidesPerView: 5,
            spaceBetween: 5,
            slidesPerGroup: 4,
          },
          1440: {
            slidesPerView: 8,
            spaceBetween: 5,
            slidesPerGroup: 4,
          },
        }}
        loop={true}
        navigation={{
          prevEl: swiperPrev.current,
          nextEl: swiperNext.current,
        }}
        pagination={{ type: "progressbar" }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = swiperPrev.current;
          swiper.params.navigation.nextEl = swiperNext.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        id="row-swiper"
      >
        <div className="swiper-navigation">
          <div className="nav-icon" ref={swiperPrev}>
            <IoIosArrowBack style={{ color: "white" }} size={30} />
          </div>

          <div className="nav-icon" ref={swiperNext}>
            <IoIosArrowForward size={30} />
          </div>
        </div>

        {movieRow}
      </Swiper>
    </div>
  );
}

export default Row;
