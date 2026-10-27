import React, { useState } from "react";

function Header({ goTo }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Search box is intentionally kept simple for the C1 interface.
    setSearch(search.trim());
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <button className="brand" onClick={() => goTo("home")} aria-label="Go to home">
          DEV@Deakin
        </button>

        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            aria-label="Search"
          />
        </form>

        <div className="header-actions">
          <button className="header-link" onClick={() => goTo("newpost")}>
            Post
          </button>
          <button className="header-link" onClick={() => goTo("login")}>
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
