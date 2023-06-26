import "./component.css";
import { loader } from "./loader";

const Item = ({ rank, imageUrl, trackTitle, artist }) => (
  <div className="chart-item">
    <h4 className="rank">{rank}</h4>
    <img src={imageUrl} alt={trackTitle} className="cover" />
    <div className="details">
      <p className="title">{trackTitle}</p>
      <p className="artist">{artist}</p>
    </div>
    <div className="download">
      <i className="fa fa-play"></i>
    </div>
  </div>
);

const Chart = ({ title, id }) => {
  return (
    <div className="chart-sub-container">
      <div className="chart-cat-header">
        <h3>{title}</h3>
        <div className="nav-more">More ›</div>
      </div>
      <Item rank={1} imageUrl="" trackTitle="Margherita" artist="Cheese" />
      <Item rank={2} imageUrl="" trackTitle="Margherita" artist="Cheese" />
      <Item rank={3} imageUrl="" trackTitle="Margherita" artist="Cheese" />
      <Item rank={4} imageUrl="" trackTitle="Margherita" artist="Cheese" />
      <Item rank={5} imageUrl="" trackTitle="Margherita" artist="Cheese" />
    </div>
  ); 
};


export default Chart;
