import { useContext, useState } from "react";
import Info from "./Info";
import AppContext from '../context';

const Drawer = ({ onClose, onRemove, items = [] }) => {
  const { setCartItems } = useContext(AppContext);
  const [isOrderComplete, setIsOrderComplete] = useState(false);

  const onClickOrder = () => {
    setIsOrderComplete(true);
    setCartItems([]);
  }

  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Cart{" "}
          <img
            onClick={onClose}
            className="removeBtn"
            src="/img/btn-remove.svg"
            alt="Close"
          />
        </h2>

        {items.length > 0 ? (
          <>
            <div className="items">
              {items.map((obj) => (
                <div key={obj.id} className="cartItem">
                  <img
                    width={90}
                    height={90}
                    src={obj.imgUrl}
                    alt="Sneakers"
                  />
                  <div className="cartItemPrice">
                    <p>{obj.title}</p>
                    <b>{obj.price}&#8364;</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>

            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Summary:</span>
                  <div></div>
                  <b>80&#8364;</b>
                </li>
                <li>
                  <span>BTW 21% : </span>
                  <div></div>
                  <b>17&#8364;</b>
                </li>
              </ul>
              <button onClick={onClickOrder} className="greenButton">
                Proceed with order <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </>
        ) : (
          <>
            <Info 
            title={isOrderComplete ? "Order completed!" : "Cart is empty"} 
            description={isOrderComplete? "We going to pass the order for delivery as soon as possible!" : "You have not added nothing yet"} 
            image={isOrderComplete ? "/img/complete-order.jpg" : "/img/empty-cart.jpg"}/>
          </>
        )}
      </div>
    </div>
  );
};

export default Drawer;
