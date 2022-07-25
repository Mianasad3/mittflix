import Movie from "./Movie";

function TitleList({ ottName, movies, dispatch, watchlist }) {
  if (movies?.results) {
    movies = movies.results;
  }
  return (
    <div className="titleList">
      <div className="title">
        <h1>{ottName}</h1>
        <div className="titles-wrapper">
          {movies &&
            movies?.map((movie) => {
              return (
                <Movie
                  data={movie}
                  key={movie.id}
                  dispatch={dispatch}
                  watchlist={watchlist}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default TitleList;
