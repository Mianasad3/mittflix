import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

function Header() {
  const [input, setInput] = useState("");

  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    if (!input || !input.trim()) return;
    const params = { query: input };
    navigate({ pathname: "/search", search: `?${createSearchParams(params)}` });
  }
  return (
    <header className="header">
      <a href="/">
        <img
          src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
          alt="netflix-font"
          border="0"
        />
      </a>
      <div id="navigation" className="navigation">
        <nav>
          <ul>
            <li>
              <a href="/my-watch-list">Watch List</a>
            </li>
          </ul>
        </nav>
      </div>
      <form id="search" className="search" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a title..."
          onInput={(e) => setInput(e.target.value)}
          value={input}
        />
        <div className="searchResults"></div>
      </form>
    </header>
  );
}

export default Header;
