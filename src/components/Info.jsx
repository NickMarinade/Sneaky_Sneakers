import { useContext } from "react";
import AppContext from "../context";

const Info = ({ title, image, description }) => {
    const { setCartOpened } = useContext(AppContext);

  return (
    <div className="cartEmpty">
      <img
        width={120}
        src={image}
        alt="Empty-Cart"
      />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => setCartOpened(false) } className="greenButton">
        Back <img src="verou-4-react-advanced-NickMarinade/img/arrow.svg" alt="Arrow" />
      </button>
    </div>
  );
};

export default Info;
