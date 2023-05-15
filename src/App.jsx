import Header from "./components/Header";
import Drawer from "./components/Drawer";
import {  useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import AppContext from "./context";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";




function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
    setIsLoading(true);
    
    const cartResponse = await axios.get("https://645b967399b618d5f31f8c71.mockapi.io/cart");
    const favoritesResponse = await axios.get("https://645e3b308d08100293fa31ac.mockapi.io/favorites");
    const itemsResponse = await axios.get("https://645b967399b618d5f31f8c71.mockapi.io/items");
    
    setIsLoading(false);

    setCartItems(cartResponse.data);
    setFavorites(favoritesResponse.data);
    setItems(itemsResponse.data);

    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {

    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      await axios.delete(`https://645b967399b618d5f31f8c71.mockapi.io/cart/${obj.id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
    } else {
      const { data } = await axios.post("https://645b967399b618d5f31f8c71.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, data]);
    }
  };

  const onAddToFavorites = async (obj) => {
    try {
      if (favorites.find((favSneakers) => Number(favSneakers.id) === Number(obj.id))) {
        await axios.delete(`https://645e3b308d08100293fa31ac.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post('https://645e3b308d08100293fa31ac.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      console.error("Error adding/removing favorite:", error);
    }
  };

  const onRemoveItem = async (id) => {
    await axios.delete(`https://645b967399b618d5f31f8c71.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  }

  return (
    <AppContext.Provider value={ {items, cartItems, favorites, isItemAdded, onAddToFavorites, setCartOpened, setCartItems} }>
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
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorites={onAddToFavorites}
              onAddToCart={onAddToCart}
              isLoading={isLoading}
            />
          }
        />

        <Route
          path="/favorites"
          exact
          element={
            <Favorites />
          }
        />
      </Routes>
    </div>
    </AppContext.Provider>
  );
}

export default App;
