const Drawer = (props) => {
  return (
    <div  className="overlay">
      <div className="drawer">
        <h2>
          Cart{" "}
          <img onClick={props.onClose} className="removeBtn" src="/img/btn-remove.svg" alt="Close" />
        </h2>
        <div className="items">
          <div className="cartItem">
            <img
              width={90}
              height={90}
              src="/img/sneakers/Peak_Lou_Williams_3_CherryBlossom.png"
              alt="Sneakers"
            />
            <div className="cartItemPrice">
              <p>Peak Lou Williams 3 'Cherry Blossom'</p>
              <b>80&#8364;</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>

          <div className="cartItem">
            <img
              width={90}
              height={90}
              src="/img/sneakers/Peak_Lou_Williams_3_CherryBlossom.png"
              alt="Sneakers"
            />
            <div className="cartItemPrice">
              <p>Peak Lou Williams 3 'Cherry Blossom'</p>
              <b>80&#8364;</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Summary:</span>
              <div></div>
              <b>80&#8364;</b>
            </li>
            <li>
              <span>BTW 21% : </span>
              <div></div>
              <b>17&#8364;</b>
            </li>
          </ul>
          <button className="greenButton">
            Proceed with order <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
