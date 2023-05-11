const Drawer = ({ onClose, onRemove, items = [] }) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Cart{" "}
          <img
            onClick={onClose}
            className="removeBtn"
            src="/img/btn-remove.svg"
            alt="Close"
          />
        </h2>

        {items.length > 0 ? (
          <>
            <div className="items">
              {items.map((item) => (
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
                  <img
                    onClick={() => onRemove(item.id)}
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
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
          </>
        ) : (
          <>
            <div className="cartEmpty">
              <img
                width={120}
                height={120}
                src="/img/empty-cart.jpg"
                alt="Empty-Cart"
              />
              <h2>Cart is empty</h2>
              <p>Add something to make an order</p>
              <button onClick={onClose} className="greenButton">
                Back <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Drawer;
