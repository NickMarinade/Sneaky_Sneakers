import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const sneakers = [
  {title: 'Jordan Stay Loyal 2', price: 60, imgUrl: '/img/sneakers/Jordan_Stay_Loyal2.png'},
  {title: 'Kyrie Infinity Rattan', price: 120, imgUrl: '/img/sneakers/Kyrie_Infinity_Rattan.jpg'}
]

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />

      <div className="content">
        <div className="contentHeader">
          <h1>All Sneakers</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="sneakers">
          {sneakers.map((sneaker) => 
          <Card
          title = {sneaker.title}
          price = {sneaker.price}
          imageUrl = {sneaker.imgUrl}
          onPlus = {() => console.log('added to basket')} 
          onFavorite = {() => console.log('added to favoritte')} 
        />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
