import Card from "../components/Card";

function Home({items, cartItems, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorites, onAddToCart, isLoading}) {

  const renderItems = () => {

    if (!items) {
      return console.log('items undefined'); // or any other fallback you want to show when items is undefined
    }


    const filteredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));
    return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
              <Card
                key={index}
                onPlus={(obj) => onAddToCart(obj)}
                onFavorite={(obj) => onAddToFavorites(obj)}
                ifAdded={cartItems.some(obj => Number(obj.id) === Number(item.id))}
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
            <img src="/img/search.svg" alt="Search" />
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