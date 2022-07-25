import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import TitleList from "../components/TitleList";

function Search({ watchlist, dispatch }) {
  const [query] = useSearchParams();
  const [shows, setShows] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/tv?query=${query.get(
          "query"
        )}&watch_region=CA&api_key=0b941991fb739be72fed42ae5e2a4891`
      );
      const result = await response.json();
      console.log(result);
      setShows((prevShows) => {
        return { ...result };
      });
    }
    getMovies();
  }, [query]);
  // return <h1>Search {query.get("query")}</h1>;
  return (
    <TitleList
      ottName={"Results"}
      movies={shows}
      watchlist={watchlist}
      dispatch={dispatch}
    />
  );
}

export default Search;
