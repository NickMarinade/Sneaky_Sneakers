import { useContext } from "react";
import Card from "../components/Card";
import AppContext from "../context";

function Favorites({ onAddToFavorites }) {
  const { favorites } = useContext(AppContext);

    return (
        <div className="content">
        <div className="contentHeader">
          <h1>My Favorites</h1>

        </div>

        <div className="sneakers">
        {favorites
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