import Card from "../components/Card";

function Home({items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorites, onAddToCart}) {
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
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => (
              <Card
                key={item.id}
                title={item.title}
                price={item.price}
                imgUrl={item.imgUrl}
                onPlus={(sneakers) => onAddToCart(sneakers)}
                onFavorite={(sneakers) => onAddToFavorites(sneakers)}
              />
            ))}
        </div>
      </div>
    )
}

export default Home;