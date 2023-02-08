// configs
import { imageURL, backdropSizes, posterSizes } from "../configs/tmdbConfig";

// hooks
import { usefetchTrending } from "../hooks/getTrending";

// library imports
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import MoonLoader from "react-spinners/MoonLoader";

// swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Hero() {
  // config destructure
  const { b300, b780, b1280, bOrig } = backdropSizes;
  const { p92, p154, p185, p342, p500, p780, pOrig } = posterSizes;

  // fetch trending movies
  const { data: trending, isLoading, isError } = usefetchTrending();

  // Start slides
  // useEffect(() => {
  //   const startSlides = setInterval(() => {
  //     if (currentSlide < trending?.length - 1) {
  //       setCurrentSlide((prev) => prev + 1);
  //     } else setCurrentSlide(0);
  //   }, 10000);
  //   return () => clearInterval(startSlides);
  // }, [trending, currentSlide]);

  // To previous slide
  // const toPrevSlide = () => {
  //   if (currentSlide - 1 < 0) {
  //     setCurrentSlide(trending?.length - 1);
  //   } else {
  //     setCurrentSlide((prev) => prev - 1);
  //   }
  // };

  // To next slide
  // const toNextSlide = () => {
  //   if (currentSlide < trending?.length - 1) {
  //     setCurrentSlide((prev) => prev + 1);
  //   } else {
  //     setCurrentSlide(0);
  //   }
  // };

  // const override = {
  //   display: "block",
  //   margin: "0 auto",
  // };

  if (isLoading) {
    return (
      <header id="hero-section">
        <div className="hero-container loading">
          <MoonLoader
            color="hsl(195, 40%, 90%)"
            loading={isLoading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </header>
    );
  }

  if (isError) {
    return (
      <header id="hero-section">
        <div className="hero-container">Sorry, could not find what you're looking for!</div>
      </header>
    );
  }

  return (
    <header id="hero-section">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        className="swiper"
      >
        {trending.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="hero-container"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), hsl(235, 30%, 15%)), url("${imageURL}${b1280}${item?.backdrop_path}")`,
              }}
            >
              <div className="hero-overlay-container">
                <div id="hero-card">
                  <img src={`${imageURL}${p342}${item?.poster_path}`} />
                </div>
                <div className="hero-text-container">
                  <div>
                    <h1>{item?.title}</h1>
                  </div>
                  <div className="btn-container">
                    <Link className="details-link" to={`/details/movie/${item?.id}`}>
                      <button className="hero-btn">
                        Info <FaInfoCircle className="info-icon" size={20} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
}

export default Hero;
