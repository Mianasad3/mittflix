import { useEffect, useState } from "react";
import TitleList from "../components/TitleList";

function Main({ dispatch, watchlist }) {
  const [shows, setShows] = useState([]);
  const fetchShows = async () => {
    try {
      const res = await Promise.all([
        fetch(
          "https://api.themoviedb.org/3/discover/tv?&sort_by=popularity.desc&with_watch_providers=8&watch_region=CA&api_key=0b941991fb739be72fed42ae5e2a4891"
        ),
        fetch(
          "https://api.themoviedb.org/3/discover/tv?=&sort_by=popularity.desc&with_watch_providers=230&watch_region=CA&api_key=0b941991fb739be72fed42ae5e2a4891"
        ),
        fetch(
          "https://api.themoviedb.org/3/discover/tv?=&sort_by=popularity.desc&with_watch_providers=337&watch_region=CA&api_key=0b941991fb739be72fed42ae5e2a4891"
        ),
        fetch(
          "https://api.themoviedb.org/3/discover/tv?=&sort_by=popularity.desc&with_watch_providers=350&watch_region=CA&api_key=0b941991fb739be72fed42ae5e2a4891"
        ),
      ]);
      const data = await Promise.all(res.map((r) => r.json()));

      // console.log(data.flat());
      // console.log(data);
      setShows((prevShows) => {
        return [...data];
      });
    } catch {
      throw Error("Promise failed");
    }
  };
  useEffect(() => {
    fetchShows();
  }, []);

  return (
    <>
      <TitleList
        ottName={"Netflix"}
        movies={shows[0]}
        dispatch={dispatch}
        watchlist={watchlist}
      />
      <TitleList
        ottName={"Nrave"}
        movies={shows[1]}
        dispatch={dispatch}
        watchlist={watchlist}
      />

      <TitleList
        ottName={"Disney"}
        movies={shows[2]}
        dispatch={dispatch}
        watchlist={watchlist}
      />

      <TitleList
        ottName={"Apple Plus"}
        movies={shows[3]}
        dispatch={dispatch}
        watchlist={watchlist}
      />
    </>
  );
}

export default Main;
