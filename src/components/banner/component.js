import styles from './component.jass.js';
import { CSML } from "brace-js";
const { div, span, p, frag, i } = CSML;

const Banner = () => {
  return (
    <div className="banner">
      <div className="slide"></div>
    </div>
  );
}

const SlideItem = ({ icon, name }) => (
  <div className="item">
    <div><i className={`fa fa-${icon}`}></i></div>
    <p>{name}</p>
  </div>
);

const Slide = () => (
  <div className="cat-slide">
    <SlideItem icon="youtube-play" name="Video" />
    <SlideItem icon="youtube-play" name="Video" />
    <SlideItem icon="youtube-play" name="Video" />
    <SlideItem icon="youtube-play" name="Video" />
    <SlideItem icon="youtube-play" name="Video" />
    <SlideItem icon="youtube-play" name="Video" />
  </div>
);

const Jumbotron = () => {
  return (
    <div>
      <Banner />
      <Slide />
    </div>
  );
}


export default Jumbotron