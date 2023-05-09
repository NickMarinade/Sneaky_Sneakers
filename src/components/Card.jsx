const Card = () => {
    return (
        <div className="card">
  <div className="favorite">
    <img src="/img/unliked.svg" alt="Unliked" />
  </div>
  <img
    width={153}
    height={132}
    src="/img/sneakers/Jordan_Stay_Loyal2.png"
    alt="Sneakers"
  />
  <h5>Jordan Stay Loyal 2 'Black/White/Red'</h5>
  <div className="cardBottom">
    <div className="cardPrice">
      <span>Price:</span>
      <b>60&#8364;</b>
    </div>
    <button className="button">
      <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
    </button>
  </div>
</div>
    );
}

export default Card;
