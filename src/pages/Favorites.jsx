import Card from "../components/Card";

function Favorites({items, onAddToFavorites}) {
    return (
        <div className="content">
        <div className="contentHeader">
          <h1>My Favorites</h1>

        </div>

        <div className="sneakers">
        {items
            .map((item) => (
              <Card
                key={item.id}
                ifFavorite={true}
                onFavorite={onAddToFavorites}
                {...item}
              />
            ))}
        </div>
      </div>
    )
}

export default Favorites;