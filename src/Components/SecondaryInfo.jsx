import { useParams } from "react-router";
import { useItemDetails } from "../getDetails";

function SecondaryInfo() {
  const { id } = useParams();

  const { data: info, isLoading, isError } = useItemDetails(id);

  if (isLoading) {
    return;
  }

  if (isError) {
    return;
  }

  return (
    <section id="secondary-info-section">
      <div className="secondary-info-container">
        <div>
          <h3>Status</h3>
          <p>{info.status}</p>
        </div>
        <div>
          <h3>Original Language</h3>
          <p>{info.original_language}</p>
        </div>
        <div>
          <h3>Budget</h3>
          <p>${info.budget}</p>
        </div>
        <div>
          <h3>Revenue</h3>
          <p>${info.revenue}</p>
        </div>
        <div>
          <h3>Homepage</h3>
          <a href={info.homepage}>{info.homepage}</a>
        </div>
      </div>
    </section>
  );
}

export default SecondaryInfo;
