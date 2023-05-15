import { useState } from "react";
import ContentLoader from "react-content-loader";

function Card({ id, onFavorite, imgUrl, title, price, onPlus, ifFavorite = false, ifAdded = false, ifLoading = false }) {
  const [isAdded, setIsAdded] = useState(ifAdded);
  const [isFavorite, setIsFavorite] = useState(ifFavorite);

  const onClickPlus = () => {
    onPlus({ id, imgUrl, title, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, imgUrl, title, price });
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
        <img
          src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"}
          alt="Favorite"
        />
      </div>
      <img width="100%" height={150} src={imgUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="cardBottom">
        <div className="cardPrice">
          <span>Price:</span>
          <b>{price}&#8364;</b>
        </div>
        <img
          className="plus"
          onClick={onClickPlus}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="Plus"
        />
      </div>
      </>
      }
      
    </div>
  );
};

export default Card;
