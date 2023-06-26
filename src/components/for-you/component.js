import './component.css';
const Head = () => (
  <div className="header">
    <h1>Picked For You</h1>
    <div className="desktop image">
      <img src="" alt="" />
    </div>
    <div className="menu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
);

const Body = ({ title, artist }) => (
  <div className="body">
    <figure className="image">
      <img src="" alt="" />
    </figure>
    <div className="details">
      <p>Playlist</p>
      <p className="track-details">{`${title} by ${artist}`}</p>
      <div className="actions">
        <div className="like">
          <i className="fa fa-heart-o"></i>
        </div>
        <div className="play">
          <i className="fa fa-play"></i>
        </div>
      </div>
    </div>
  </div>
);

const ForYou = () => {
  return (
    <div className="for-you">
      <Head />
      <Body title="Margherita" artist="Cheese" />
      <Body title="Margherita" artist="Cheese" />
    </div>
  );
};


export default ForYou