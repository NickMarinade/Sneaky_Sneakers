import { useState } from "react";

const Card = ({ id, onFavorite, imgUrl, title, price, onPlus, ifFavorite = false }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(ifFavorite);

  const onClickPlus = () => {
    onPlus({ imgUrl, title, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, imgUrl, title, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card">
      <div className="favorite" onClick={onClickFavorite}>
        <img
          src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"}
          alt="Favorite"
        />
      </div>
      <img width={153} height={132} src={imgUrl} alt="Sneakers" />
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
    </div>
  );
};

export default Card;
