import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
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

  const onAddToCart = (sneakers) => {
    setCartItems(prev => {

      const isSneakersAlreadyAdded = prev.some(item => item.title === sneakers.title);
  
      if (isSneakersAlreadyAdded) {
        return prev.filter(item => item.title !== sneakers.title);
      } else {
        return [...prev, sneakers];
      }
    });
  }

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
          {items.map((item) => 
          <Card
          title = {item.title}
          price = {item.price}
          imgUrl = {item.imgUrl}
          onPlus = {(sneakers) => onAddToCart(sneakers)} 
          onFavorite = {() => console.log('added to favorite')} 
        />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
