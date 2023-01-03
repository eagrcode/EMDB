import { useEffect, useState } from "react";

function MovieDot({ id, isShowing }) {
  const [slideID, setSlideID] = useState(id);

  console.log(id);
  console.log(slideID);

  return (
    <button
      className={`movie-dot ${isShowing && slideID === id ? "active" : ""}`}
    ></button>
  );
}

export default MovieDot;
