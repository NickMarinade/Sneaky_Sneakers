import { useState } from "react";

const Card = (props) => {

  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded)
  }

    return (
        <div className="card">
  <div className="favorite" onClick={props.onFavorite}>
    <img src="/img/unliked.svg" alt="Unliked" />
  </div>
  <img
    width={153}
    height={132}
    src={props.imageUrl}
    alt="Sneakers"
  />
  <h5>{props.title}</h5>
  <div className="cardBottom">
    <div className="cardPrice">
      <span>Price:</span>
      <b>{props.price}&#8364;</b>
    </div>
      <img className="plus" onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />
  </div>
</div>
    );
}

export default Card;
