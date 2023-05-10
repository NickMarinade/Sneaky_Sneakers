import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([{"title":"Jordan Stay Loyal 2 Black/Red","price":60,"imgUrl":"/img/sneakers/Jordan_Stay_Loyal2.png"},{"title":"Kyrie Infinity Rattan","price":120,"imgUrl":"/img/sneakers/Kyrie_Infinity_Rattan.jpg"}]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios.get('https://645b967399b618d5f31f8c71.mockapi.io/items')
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); 

  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}/>}
      <Header onClickCart={() => setCartOpened(true)}/>

      <div className="content">
        <div className="contentHeader">
          <h1>All Sneakers</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="sneakers"> 
          {items.map((sneaker) => 
          <Card
          title = {sneaker.title}
          price = {sneaker.price}
          imageUrl = {sneaker.imgUrl}
          onPlus = {() => console.log('added to basket')} 
          onFavorite = {() => console.log('added to favorite')} 
        />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
