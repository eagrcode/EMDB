// React imports
import { useState, useEffect } from "react";

// configs
import { imageURL, backdropSizes, posterSizes } from "../configs/tmdbConfig";

// hooks
import { usefetchTrending } from "../hooks/getTrending";

// library imports
import { FaInfoCircle, FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

// component imports
import { LoadingSpinner } from "../Components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// HERO component
function Hero() {
  // state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isBigScreen, setIsBigScreen] = useState(false);

  // config destructure
  const { b300, b780, b1280, bOrig } = backdropSizes;
  const { p92, p154, p185, p342, p500, p780, pOrig } = posterSizes;

  // fetch trending movies
  const { data: trending, isLoading, isError } = usefetchTrending();

  // Start slides
  useEffect(() => {
    const startSlides = setInterval(() => {
      if (currentSlide < trending?.length - 1) {
        setCurrentSlide((prev) => prev + 1);
      } else setCurrentSlide(0);
    }, 10000);
    return () => clearInterval(startSlides);
  }, [trending, currentSlide]);

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

  // Make btn icons bigger on big display
  useEffect(() => {
    function growIcons() {
      if (window.innerWidth >= 1020) {
        setIsBigScreen(!isBigScreen);
      } else {
        setIsBigScreen(false);
      }
    }
    window.addEventListener("resize", growIcons);
    return () => window.removeEventListener("resize", growIcons);
  }, []);

  // Loading screen
  if (isLoading) {
    return (
      <header id="hero-section">
        <div className="hero-container">
          <LoadingSpinner />
        </div>
      </header>
    );
  }

  // Error screen
  if (isError) {
    return (
      <header id="hero-section">
        <div className="hero-container">Where's the fucking data?!</div>
      </header>
    );
  }

  // Success screen
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
          <SwiperSlide>
            <div
              key={item?.id}
              className="hero-container"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), hsl(240, 100%, 5%)), url("${imageURL}${b1280}${item?.backdrop_path}")`,
              }}
            >
              {/* <button className="hero-nav-btn">
            <IoChevronBack className="icon" size={50} onClick={toPrevSlide} />
          </button> */}

              <div className="hero-overlay-container">
                <div id="hero-card">
                  <img src={`${imageURL}${p342}${item?.poster_path}`} />
                </div>
                <div className="hero-text-container">
                  <div>
                    <h1>{item?.title}</h1>
                  </div>
                  <div className="btn-container">
                    <button className="hero-btn">
                      Trailer <FaPlayCircle size={isBigScreen ? 25 : 18} />
                    </button>
                    <Link className="details-link" to={`/details/movie/${item?.id}`}>
                      <button className="hero-btn">
                        Info <FaInfoCircle size={isBigScreen ? 25 : 18} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <button className="hero-nav-btn">
            <IoChevronForward
              className="icon"
              size={50}
              onClick={toNextSlide}
            />
          </button> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
}

export default Hero;
