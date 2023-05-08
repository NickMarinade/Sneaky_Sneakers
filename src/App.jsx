
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
          <li><img width={18} height={18} src="/img/cart.svg" alt="" /> <span>127 eur.</span></li>
          <li><img width={18} height={18} src="/img/user.svg" alt="" /></li>
        </ul>
        </div>
      </header>
      <div className="content">
        <h1>All Sneakers</h1>
        <p>...</p>
      </div>
    </div>
  );
}

export default App;
