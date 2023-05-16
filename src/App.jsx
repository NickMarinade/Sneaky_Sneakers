import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import AppContext from "./context";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        const [ cartResponse, favoritesResponse, itemsResponse ] = await Promise.all([
          axios.get(
            "https://645b967399b618d5f31f8c71.mockapi.io/cart"
          ),
          axios.get(
            "https://645e3b308d08100293fa31ac.mockapi.io/favorites"
          ),
          axios.get(
            "https://645b967399b618d5f31f8c71.mockapi.io/items"
          )
        ]);

        setIsLoading(false);

        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert("Error by data request");
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://645b967399b618d5f31f8c71.mockapi.io/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post('https://645b967399b618d5f31f8c71.mockapi.io/cart', obj);
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          }),
        );
      }
    } catch (error) {
      alert('Error by adding item to cart');
      console.error(error);
    }
  };

  const onAddToFavorites = async (obj) => {
    try {
      if (
        favorites.find(
          (favSneakers) => Number(favSneakers.id) === Number(obj.id)
        )
      ) {
        await axios.delete(
          `https://645e3b308d08100293fa31ac.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          "https://645e3b308d08100293fa31ac.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      console.error("Error adding/removing favorite:", error);
    }
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://645b967399b618d5f31f8c71.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
    } catch (error) {
      alert('Error deleting item from cart');
      console.error(error);
    }
  };

  const onChangeSearchInput = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorites,
        setCartOpened,
        setCartItems,
        onAddToCart,
      }}
    >
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

          <Route path="favorites" exact element={<Favorites />} />

          <Route path="orders" exact element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
