// configs
import { imageURL, posterSizes } from "../configs/tmdbConfig";

function CastRow({ data }) {
  // config destructure
  const { p92, p154, p185, p342, p500, p780, pOrig } = posterSizes;

  const castRow = data?.map((item, index) => (
    <div className="cast-item" key={index}>
      <img src={item.profile_path ? `${imageURL}${p92}${item.profile_path}` : ""} />
      <span className="cast-name">{item.name}</span>
    </div>
  ));

  return (
    <>
      <h2>Cast</h2>
      <div className="cast-container">{castRow}</div>
    </>
  );
}

export default CastRow;
