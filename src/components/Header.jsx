import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";


const Header = (props) => {
  const { totalPrice } = useCart();

  return (
    <header>
      <Link to="/">
        <div className="headerLeft">
          <img width={50} height={50} src="verou-4-react-advanced-NickMarinade/img/logo.png" alt="Logo" />
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
              src="verou-4-react-advanced-NickMarinade/img/cart.svg"
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
                src="verou-4-react-advanced-NickMarinade/img/heart.svg"
                alt="Favorites"
              />
            </Link>
          </li>
          <li>
          <Link to="/orders">
              <img
                className="cartImg"
                width={18}
                height={18}
                src="verou-4-react-advanced-NickMarinade/img/user.svg"
                alt="User"
              />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
