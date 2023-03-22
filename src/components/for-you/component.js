import './component.css';
import { CSML } from "brace-js";
const { div, i, p, h1, img, span, figure } = CSML;

const Head = () => div(
  {className: 'header'},
  h1({}, "Picked For You"),
  div(
    {className: 'desktop image'},
    img({
      src: '',
      alt: ''
    })
    ),
  div(
   {className: 'menu'},
   span(),
   span(),
   span()
    )
  );
  
const Body = (title, artist) => div(
  {className: 'body'},
  figure(
    {className: 'image'},
    img({src: '', alt: ''})
    ),
  div(
    {className: 'details'},
    p({}, "Playlist"),
    p({className: 'track-details'}, `${title} by ${artist}`),
    div(
      {className: 'actions'},
      div(
        {className: 'like'},
        i({className: 'fa fa-heart-o'})
        ),
      div(
        {className: 'play'},
        i({className: 'fa fa-play'})
        )
      )
    )
  );

const ForYou = () => {
  return div({className: 'for-you'}, Head(), Body('Margherita', 'Cheese'),
  Body('Margherita', 'Cheese'))
}

export default ForYou