import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
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
    const fetchData = async () => {
      try {
        const itemsResponse = await axios.get("https://645b967399b618d5f31f8c71.mockapi.io/items");
        setItems(itemsResponse.data);
  
        const cartResponse = await axios.get("https://645b967399b618d5f31f8c71.mockapi.io/cart");
        setCartItems(cartResponse.data);
  
        const favoritesResponse = await axios.get("https://645e3b308d08100293fa31ac.mockapi.io/favorites");
        setFavorites(favoritesResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);

  const onAddToCart = async (sneakers) => {
    try {
      await axios.post("https://645b967399b618d5f31f8c71.mockapi.io/cart", sneakers);
      setCartItems((prev) => [...prev, sneakers]);
  
      const response = await axios.get("https://645b967399b618d5f31f8c71.mockapi.io/cart");
      setCartItems(response.data);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const onAddToFavorites = async (sneakers) => {
    try {
      if (favorites.find((favSneakers) => favSneakers.id === sneakers.id)) {
        await axios.delete(`https://645e3b308d08100293fa31ac.mockapi.io/favorites/${sneakers.id}`);
        setFavorites((prev) => prev.filter((item) => item.id !== sneakers.id));
      } else {
        const { data } = await axios.post('https://645e3b308d08100293fa31ac.mockapi.io/favorites', sneakers);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      console.error("Error adding/removing favorite:", error);
    }
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

      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorites={onAddToFavorites}
              onAddToCart={onAddToCart}
            />
          }
        />

        <Route
          path="/favorites"
          exact
          element={
            <Favorites
              items={favorites}
              onAddToFavorites={onAddToFavorites} 
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
