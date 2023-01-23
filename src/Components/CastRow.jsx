function CastRow({ data, path }) {
  const castRow = data?.map((item) => (
    <div className="cast-item" key={item.id}>
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
