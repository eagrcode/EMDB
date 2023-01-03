import { Row } from "./index";

function MovieRows({ topRated }) {
  return (
    <>
      <Row topRated={topRated} title={"Classics"} />
      <Row topRated={topRated} title={"Dunno"} />
      <Row topRated={topRated} title={"Dunno"} />
      <Row topRated={topRated} title={"Dunno"} />
      <Row topRated={topRated} title={"Dunno"} />
      <Row topRated={topRated} title={"Dunno"} />
    </>
  );
}

export default MovieRows;
