import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
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
                key={item.title}
                title={item.title}
                price={item.price}
                imgUrl={item.imgUrl}
                onPlus={(sneakers) => onAddToCart(sneakers)}
                onFavorite={() => console.log("added to favorite")}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
