const Drawer = ({onClose, items=[]}) => {

  return (
    <div  className="overlay">
      <div className="drawer">
        <h2>
          Cart{" "}
          <img onClick={onClose} className="removeBtn" src="/img/btn-remove.svg" alt="Close" />
        </h2>
        <div className="items">
          {
            items.map((item) => (
              <div className="cartItem">
            <img
              width={90}
              height={90}
              src={item.imgUrl}
              alt="Sneakers"
            />
            <div className="cartItemPrice">
              <p>{item.title}</p>
              <b>{item.price}&#8364;</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
            ))
          }
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
