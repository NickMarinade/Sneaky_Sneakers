import { useState } from "react";
import Info from "./Info";
import axios from "axios";
import { useCart } from "../hooks/useCart";

const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

const Drawer = ({ onClose, onRemove, items = [] }) => {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://645e3b308d08100293fa31ac.mockapi.io/orders",
        {
          items: cartItems,
        }
      );
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let index = 0; index < cartItems.length; index++) { //because mockapi cant replace arrays
        const item = cartItems[index];
        await axios.delete('https://645b967399b618d5f31f8c71.mockapi.io/cart/' + item.id)
        await delay();
      }

    } catch (error) {
      alert("Failed to make an order");
    }
    setIsLoading(false);
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Cart{" "}
          <img
            onClick={onClose}
            className="removeBtn"
            src="verou-4-react-advanced-NickMarinade/img/btn-remove.svg"
            alt="Close"
          />
        </h2>

        {items.length > 0 ? (
          <>
            <div className="items">
              {items.map((obj) => (
                <div key={obj.id} className="cartItem">
                  <img width={90} height={90} src={obj.imgUrl} alt="Sneakers" />
                  <div className="cartItemPrice">
                    <p>{obj.title}</p>
                    <b>{obj.price}&#8364;</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="verou-4-react-advanced-NickMarinade/img/btn-remove.svg"
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
                  <b>{totalPrice}&#8364;</b>
                </li>
                <li>
                  <span>BTW 21% : </span>
                  <div></div>
                  <b>{ Math.round((totalPrice) / 100 * 21)}&#8364;</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="greenButton"
              >
                Proceed with order <img src="verou-4-react-advanced-NickMarinade/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </>
        ) : (
          <>
            <Info
              title={isOrderComplete ? "Order completed!" : "Cart is empty"}
              description={
                isOrderComplete
                  ? `Your order #${orderId} is ready to be handled for delivery`
                  : "You have not added nothing yet"
              }
              image={
                isOrderComplete
                  ? "verou-4-react-advanced-NickMarinade/img/complete-order.jpg"
                  : "verou-4-react-advanced-NickMarinade/img/empty-cart.jpg"
              }
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Drawer;
