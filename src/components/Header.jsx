const Header = () => {
    return (
        <header>
        <div className="headerLeft">
          <img width={50} height={50} src="/img/logo.png" alt="" />
          <div className="headerInfo">
            <h2>Sneaky Sneakers</h2>
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
    );
}

export default Header;