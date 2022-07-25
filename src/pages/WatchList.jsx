import TitleList from "../components/TitleList";

function WatchList({ watchlist, dispatch }) {
  const list = Object.keys(watchlist).map((key) => watchlist[key]);
  console.log(list);
  return (
    <TitleList
      ottName={"My Watch List"}
      movies={list}
      dispatch={dispatch}
      watchlist={watchlist}
    />
  );
}

export default WatchList;
