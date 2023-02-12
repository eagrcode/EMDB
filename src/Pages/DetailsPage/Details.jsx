import "../DetailsPage/details-page.css";

import { useParams } from "react-router";
import { useItemDetails } from "../../hooks/getDetails";

import { DetailsHero2, Videos, Reviews, SecondaryInfo, Similar } from "../../components";

function Details({ type }) {
  const { id } = useParams();

  const { data: info, isLoading, isError } = useItemDetails(type, id);

  return (
    <>
      <DetailsHero2 info={info} isLoading={isLoading} isError={isError} />
      <Videos videos={info?.videos?.results} isLoading={isLoading} isError={isError} />
      <Reviews reviews={info?.reviews?.results} isLoading={isLoading} isError={isError} />
      <SecondaryInfo info={info} isLoading={isLoading} isError={isError} />
      <Similar
        mediaType={type}
        similar={info?.similar?.results}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  );
}

export default Details;
