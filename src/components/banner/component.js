import styles from './component.jass.js';
import { CSML } from "brace-js";
const { div, span, p, frag, i } = CSML;

const Banner = () => {
  return div(
    {className: 'banner'},
    div({className: 'slide'})
    )
}

const SlideItem = (icon, name) => div(
  {className: 'item'},
  div({}, i({className: `fa fa-${icon}`})),
  p({}, {name})
  )
const Slide = () => div(
  {className: 'cat-slide'},
  SlideItem('youtube-play', 'Video'),
  SlideItem('youtube-play', 'Video'),
  SlideItem('youtube-play', 'Video'),
  SlideItem('youtube-play', 'Video'),
  SlideItem('youtube-play', 'Video'),
  SlideItem('youtube-play', 'Video')
  )

const Jumbotron = () => {
  return frag(Banner(), Slide())
}

console.log(SlideItem('music', 'Songs'))
export default Jumbotron