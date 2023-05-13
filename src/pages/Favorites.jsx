
function Favorites({items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorites, onAddToCart}) {
    return (
        <div className="content">
        <div className="contentHeader">
          <h1>
            {searchValue
              ? `Search results for: ${searchValue}`
              : "All Sneakers"}
          </h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="sneakers">
          Here are favorites
        </div>
      </div>
    )
}

export default Favorites;