export default function MovieHeader({
  title,
  popularity,
  image,
  date,
  director,
  overview,
}) {
  return (
    <div className="movie-detail-header">
      <p className="lead mb-0">
        <img
          src={director?.image}
          className="rounded-circle mr-3"
          height="50px"
          width="50px"
          alt="avatar"
        />
        {director?.name}
      </p>
      <h1 className="font-weight-bold movie-detail-header-title mb-0">
        {title}
      </h1>
      <p className="movie-detail-header-popularity mb-1">
        Release Date: {date}
      </p>
      <p className="movie-detail-header-popularity mb-3">
        Popularity: {popularity}
      </p>
      <img className="img-fluid rounded" src={image} alt="TODO: provide alt" />
      <p className="movie-overview mt-4">
        <p>{overview}</p>
      </p>
    </div>
  );
}
