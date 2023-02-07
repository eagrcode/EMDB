function SecondaryInfo({ info, isLoading, isError }) {
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
          <p>{info.budget ? `$${info.budget}` : "n/a"}</p>
        </div>
        <div>
          <h3>Revenue</h3>
          <p>{info.revenue ? `$${info.revenue}` : "n/a"}</p>
        </div>
        <div>
          <h3>Homepage</h3>
          <a href={info.homepage} target="_blank">
            {info.homepage}
          </a>
        </div>
      </div>
    </section>
  );
}

export default SecondaryInfo;
