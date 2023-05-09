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
        <div className="contentHeader">
        <h1>All Sneakers</h1>
        <div className="search-block">
          <img src="/img/search.svg" alt="Search" />
          <input placeholder="Search..."/>
        </div>
        </div>

        <div className="sneakers">
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

          <div className="card">
            <img
              width={153}
              height={132}
              src="/img/sneakers/Kyrie_Infinity_Rattan.jpg"
              alt="Sneakers"
            />
            <h5>Kyrie Infinity <br /> 'Rattan'</h5>
            <div className="cardBottom">
              <div className="cardPrice">
                <span>Price:</span>
                <b>120&#8364;</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={153}
              height={132}
              src="/img/sneakers/Peak_Lou_Williams_3_CherryBlossom.png"
              alt="Sneakers"
            />
            <h5>Peak Lou Williams 3 'Cherry Blossom'</h5>
            <div className="cardBottom">
              <div className="cardPrice">
                <span>Price:</span>
                <b>80&#8364;</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={153}
              height={132}
              src="/img/sneakers/Tatum1_Zoo.png"
              alt="Sneakers"
            />
            <h5>Tatum 1 <br /> 'Zoo'</h5>
            <div className="cardBottom">
              <div className="cardPrice">
                <span>Price:</span>
                <b>90&#8364;</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

          {/* <div className="card">
            <img
              width={153}
              height={132}
              src="/img/sneakers/Zion2_Red_Black.jpg"
              alt="Sneakers"
            />
            <h5>Zion 2 'Red/Black'</h5>
            <div className="cardBottom">
              <div className="cardPrice">
                <span>Price:</span>
                <b>110&#8364;</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div> */}
          
        </div>
      </div>
    </div>
  );
}

export default App;
