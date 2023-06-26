import "./component.css";
import { createData, createEffect } from "brace-js";
import { loader } from "./loader";
import { navigate } from "brace-js/router";
import Songs from "../../service/songs.json";

const Item = ({ title = "Loading...", imageUrl }) => (
  <div className="item">
    <figure className="image">
      <img src={imageUrl} alt={title} className="image" use:visible={({target}) => {
        target.src = imageUrl ===
        "http://localhost:9000/assets/images/stamina.jpg" ?
        ("http://localhost:9000/assets/images/stamina.jpg") : imageUrl;
          target.style.transform = "translateY(0)"
          target.style.transition = "0.3s transform"
        return () => {
          target.style.transform = "translateY(15px)"
        }
      }} />
    </figure>
    <p className="title">{title}</p>
  </div>
);

const Category = ({ id, title = "Loading..." }) => {

  return (
    <div className="category"  use:visible={({ target }) => {
        target.style.opacity = 1
        target.style.transition = "1s opacity"
        target.style.display = "";
      return () => {
        target.style.opacity = 0;
        target.style.display = "hidden";
      }
    }}>
      <div className="category-title">
        <div>
          <h2 className="title">{title}</h2>
          <div className="underline"></div>
        </div>
        <p>More »</p>
      </div>
      <div className="category-items">
        {Songs ? Songs.songs.map(({ artist, title, coverArt }) => (
              <div click$={() => navigate (`/music/${artist}/${title}`)}>
                {<Item title={title} imageUrl={"http://localhost:9000/assets/images/stamina.jpg"} />}
              </div>
            ))
          : ['Loading...'].map((text) => <p>{text}</p>)}
      </div>
    </div>
  );
};


export default Category;
