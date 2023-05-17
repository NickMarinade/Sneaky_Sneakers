import { useContext, useState } from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../context";

function Card({ id, onFavorite, imgUrl, title, price, onPlus, ifFavorite = false, ifLoading = false }) {

  const { isItemAdded } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(ifFavorite);
  const obj = { id, parentId: id, imgUrl, title, price }

  const onClickPlus = () => {
    onPlus(obj);
  };

  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card">
      {
        ifLoading ? <ContentLoader
        speed={2}
        width={160}
        height={250}
        viewBox="0 0 155 265"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <rect x="0" y="0" rx="10" ry="10" width="155" height="155" />
        <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
        <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
        <rect x="0" y="234" rx="5" ry="5" width="80" height="25" />
        <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
      </ContentLoader> : <>
      <div className="favorite" onClick={onClickFavorite}>
        {onFavorite && <img
          src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"}
          alt="Favorite"
        />}
      </div>
      <img width="100%" height={150} src={imgUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="cardBottom">
        <div className="cardPrice">
          <span>Price:</span>
          <b>{price}&#8364;</b>
        </div>
        {onPlus && <img
          className="plus"
          onClick={onClickPlus}
          src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="Add_To_Cart"
        />}
      </div>
      </>
      }
      
    </div>
  );
};

export default Card;
