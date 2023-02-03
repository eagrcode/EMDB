function CastRow({ data, path }) {
  const castRow = data?.map((item, index) => (
    <div className="cast-item" key={index}>
      <img src={item.profile_path ? `${path}${item.profile_path}` : ""} />
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
