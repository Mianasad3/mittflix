import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details({ watchlist, dispatch }) {
  const [movie, setMovie] = useState(null);
  const params = useParams();

  function addMovie() {
    if (watchlist[movie.id]) {
      dispatch({ type: "REMOVE_FROM_LIST", payload: movie });
      console.log("removed movie");
      return;
    }
    console.log("added movie ");

    dispatch({ type: "ADD_TO_LIST", payload: movie });
  }
  useEffect(() => {
    async function getMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${params.id}?api_key=0b941991fb739be72fed42ae5e2a4891`
      );
      const result = await response.json();
      setMovie(() => {
        return { ...result };
      });
    }
    getMovie();
  }, []);
  return (
    movie && (
      <div className="show-details">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt=""
        />
        <div className="show-details-inner">
          <h1>{movie.original_name}</h1>
          <div className="description">{movie.overview}</div>
          {!watchlist[movie.id] ? (
            <button className="add-to-watchlist" onClick={addMovie}>
              + Add to watch list
            </button>
          ) : (
            <button className="remove-to-watchlist" onClick={addMovie}>
              - Remove from watch list
            </button>
          )}
        </div>
      </div>
    )
  );
}

export default Details;
