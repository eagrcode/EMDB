import { Row } from "./index";

function MovieRows({ topRated, upcoming, latest }) {
  console.log(topRated);
  console.log(upcoming);
  console.log(latest);
  return (
    <>
      <Row data={topRated} title={"Classics"} />
      <Row data={upcoming} title={"Upcoming"} />
      <Row data={latest} title={"Latest"} />
    </>
  );
}

export default MovieRows;
