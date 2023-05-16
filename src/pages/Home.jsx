import Card from "../components/Card";

function Home({items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorites, onAddToCart, isLoading}) {

  const renderItems = () => {

    const filteredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));
    return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
              <Card
                key={index}
                onPlus={(obj) => onAddToCart(obj)}
                onFavorite={(obj) => onAddToFavorites(obj)}
                ifLoading={isLoading}
                {...item}
              />
            ))
  }

  
    return (
        <div className="content">
        <div className="contentHeader">
          <h1>
            {searchValue
              ? `Search results for: ${searchValue}`
              : "All Sneakers"}
          </h1>
          <div className="search-block">
            <img src="verou-4-react-advanced-NickMarinade/img/search.svg" alt="Search" />
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="sneakers">
          {renderItems()}
        </div>
      </div>
    )
}

export default Home;