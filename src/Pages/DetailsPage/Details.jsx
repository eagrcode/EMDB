import "../DetailsPage/details.css";

import DetailsHero from "../../Components/DetailsHero";

import { Videos } from "../../Components";

function Details() {
  return (
    <>
      <DetailsHero />
      <section id="trailer-section">
        <h2 className="media-header">Media</h2>
        <Videos />
      </section>
    </>
  );
}

export default Details;
