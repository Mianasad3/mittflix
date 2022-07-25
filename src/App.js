import WatchList from "./pages/WatchList";
import Details from "./pages/Details";
import Search from "./pages/Search";
import Main from "./pages/Main";

import watchlistReducer from "./watchlistReducer";

import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { useEffect, useReducer } from "react";

function App() {
  const [watchlist, wathlistDispatch] = useReducer(
    watchlistReducer,
    JSON.parse(localStorage.getItem("watchlist")) || {}
  );

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Main dispatch={wathlistDispatch} watchlist={watchlist} />}
        />
        <Route
          path="/my-watch-list"
          element={
            <WatchList dispatch={wathlistDispatch} watchlist={watchlist} />
          }
        />
        <Route
          path="/details/:id"
          element={
            <Details dispatch={wathlistDispatch} watchlist={watchlist} />
          }
        />
        <Route
          path="/search"
          element={<Search dispatch={wathlistDispatch} watchlist={watchlist} />}
        />
      </Routes>
    </>
  );
}

export default App;
