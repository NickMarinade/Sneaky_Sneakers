import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context";

const Header = (props) => {
  const { cartItems } = useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return (
    <header>
      <Link to="/">
        <div className="headerLeft">
          <img width={50} height={50} src="/img/logo.png" alt="Logo" />
          <div className="headerInfo">
            <h2>Sneaky Sneakers</h2>
            <p>Find your sneaky ones</p>
          </div>
        </div>
      </Link>
      <div>
        <ul className="headerRight">
          <li>
            <img
              onClick={props.onClickCart}
              className="cartImg"
              width={18}
              height={18}
              src="/img/cart.svg"
              alt="Cart"
            />{" "}
            <span>{totalPrice}&#8364;</span>
          </li>
          <li>
            <Link to="/favorites">
              <img
                className="cartImg"
                width={18}
                height={18}
                src="/img/heart.svg"
                alt="Favorites"
              />
            </Link>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="User" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
