export default function MovieCard(props) {
  const { movie } = props;
  console.log(props);
  return (
    <div className="card" key={movie.id}>
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt=""
      />
      <div className="card--content">
        <h3 className="card--title">{movie.title}</h3>
        <p>
          <small>Release Date: {movie.release_date}</small>
        </p>
        <p>
          <small>Release Date: {movie.vote_average}</small>
        </p>
        <p className="card--desc">{movie.overview}</p>
      </div>
    </div>
  );
}
