function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img width={50} height={50} src="/img/logo.png" alt="" />
          <div className="headerInfo">
            <h3>Sneaky Sneakers</h3>
            <p>Find your sneaky ones</p>
          </div>
        </div>
        <div>
          <ul className="headerRight">
            <li>
              <img width={18} height={18} src="/img/cart.svg" alt="Cart" />{" "}
              <span>127&#8364;</span>
            </li>
            <li>
              <img width={18} height={18} src="/img/user.svg" alt="User" />
            </li>
          </ul>
        </div>
      </header>

      <div className="content">
        <h1>All Sneakers</h1>

        <div className="card">
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
      </div>
    </div>
  );
}

export default App;
