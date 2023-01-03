import { Row } from "./index";

function MovieRows({ topRated, upcoming, latest }) {
  return (
    <>
      <Row data={topRated} title={"Classics"} />
      <Row data={upcoming} title={"Upcoming"} />
      <Row data={latest} title={"Latest"} />
    </>
  );
}

export default MovieRows;
