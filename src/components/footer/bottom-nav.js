import './css-js/bottom-nav.css';
import { Link } from "brace-js/router";

const BottomNav = () => (
  <div className="bottom-bar">
    <div className="nav-items">
      <Item icon='fa-home' path="/" text="Home" />
      <Item icon='fa-search' path="/search" text="Search" />
      <Item icon='fa-bookmark' path="/library" text="Library" />
      <Item icon='fa-diamond' path="/upgrade" text="Premium" />
      <Item icon='fa-cog' path="/settings" text="Settings" />
    </div>
  </div>
);

const Item = ({ icon, path, text }) => (
  <Link to={path} className="item">
    <div>
      <i className={`fa ${icon}`} />
    </div>
  </Link>
);


export default BottomNav;