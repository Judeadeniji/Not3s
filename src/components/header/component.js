import './component.css'

const Search = ({ type }) => {
  return (
    <div className={`${type} search`}>
      <input
        type="search"
        name="search"
        value=""
        placeholder="Search"
      />
    </div>
  );
}

const Brand = () => {
  return (
    <div className="brand">
      <div className="logo"></div>
      <div className="group">
        <h2 className="app-name">Not3s App</h2>
        <p className="tagline">Free Music Free Download</p>
      </div>
    </div>
  );
}

const RightDiv = () => {
  return (
    <div className="group-right">
      <div className="get-app">Get App</div>
      <div className="menu-btn">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <div className="header-container">
      <header>
        <Brand />
        <Search type="desktop" />
        <RightDiv />
      </header>
      <Search type="mobile" />
    </div>
  );
}


export default Header