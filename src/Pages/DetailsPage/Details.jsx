import "../DetailsPage/details.css";

import { DetailsHero2 } from "../../Components";

import { Videos } from "../../Components";

function Details() {
  return (
    <>
      <DetailsHero2 />
      <section id="trailer-section">
        <h2 className="media-header">Media</h2>
        <Videos />
      </section>
    </>
  );
}

export default Details;
