import {  useState } from "react";

const Card = ({ onFavorite, imgUrl, title, price, onPlus }) => {

  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    onPlus({imgUrl, title, price});
    setIsAdded(!isAdded);
  }


    return (
        <div className="card">
  <div className="favorite" onClick={onFavorite}>
    <img src="/img/unliked.svg" alt="Unliked" />
  </div>
  <img
    width={153}
    height={132}
    src={imgUrl}
    alt="Sneakers"
  />
  <h5>{title}</h5>
  <div className="cardBottom">
    <div className="cardPrice">
      <span>Price:</span>
      <b>{price}&#8364;</b>
    </div>
      <img className="plus" onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />
  </div>
</div>
    );
}

export default Card;
