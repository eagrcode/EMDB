import "../DetailsPage/details.css";

import { DetailsHero2 } from "../../Components";

import { Videos, Reviews, SecondaryInfo } from "../../Components";

function Details() {
  return (
    <>
      <DetailsHero2 />
      <Videos />
      <Reviews />
      <SecondaryInfo />
    </>
  );
}

export default Details;
