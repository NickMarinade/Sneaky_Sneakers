import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios
      .get("https://645b967399b618d5f31f8c71.mockapi.io/items")
      .then((response) => {
        setItems(response.data);
      });

    axios
      .get("https://645b967399b618d5f31f8c71.mockapi.io/cart")
      .then((response) => {
        setCartItems(response.data);
      });
  }, []);

  const onAddToCart = (sneakers) => {
    axios
      .post("https://645b967399b618d5f31f8c71.mockapi.io/cart", sneakers)
      .then(() => {
        setCartItems((prev) => [...prev, sneakers]);
      })
      .then(() => {
        // Fetch the updated cart items after adding an item
        axios
          .get("https://645b967399b618d5f31f8c71.mockapi.io/cart")
          .then((response) => {
            setCartItems(response.data);
          });
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error);
      });
  };

  const onAddToFavorites = (sneakers) => {
    axios
      .post("https://645e3b308d08100293fa31ac.mockapi.io/favorites", sneakers)
      .then(() => {
        setFavorites((prev) => [...prev, sneakers]);
      })
      .then(() => {
        // Fetch the updated cart items after adding an item
        axios
          .get("https://645e3b308d08100293fa31ac.mockapi.io/favorites")
          .then((response) => {
            setFavorites(response.data);
          });
      })
      .catch((error) => {
        console.error("Error adding item to favorites:", error);
      });
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://645b967399b618d5f31f8c71.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      {/* <Routes>
      <Route path="/favorites" exact element={<div>test routing</div>}  />
      </Routes> */}

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
    </div>
  );
}

export default App;
