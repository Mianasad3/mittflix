import { Link } from "react-router-dom";

function Movie({ data, dispatch, watchlist }) {
  function addMovie() {
    if (watchlist[data.id]) {
      dispatch({ type: "REMOVE_FROM_LIST", payload: data });
      console.log("removed movie");
      return;
    }
    console.log("added movie ");

    dispatch({ type: "ADD_TO_LIST", payload: data });
  }

  return (
    <div className="movie">
      <Link to={`/details/${data.id}`}>
        <img
          src={
            data?.poster_path
              ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
              : require("../assets/image-not-available.jpg")
          }
          alt="Movie poster"
        />
        <div className="overlay">
          <div className="title">{data.original_name}</div>
          <div className="rating">{data.vote_average}/10</div>
          <div className="plot">{data.overview}</div>
        </div>
      </Link>
      <div
        data-toggled={watchlist && !!watchlist[data.id]}
        className="listToggle"
      >
        <div>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check" onClick={addMovie}></i>
        </div>
      </div>
    </div>
  );
}

export default Movie;
