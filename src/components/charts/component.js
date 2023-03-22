/*
import './component.css';
import { CSML, $data, onUpdate } from 'brace-js';
const { div, i, p, h1, h2, h3, h4, img, figure, dgRepeat, dgFor } = CSML;
const Response = $data({});
let isFetching = true;

const getCharts = (id, type) => {
  let param = `${id}_${type}`
  return async () => {
    const proxyUrl = 'https://corsproxy.io/?';
    const apiUrl = `https://api.deezer.com/chart/${id}/${type}?limit=5`;
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    Response.value[param] = { result: data.data, done: true };
    return () => {
      // Cleanup function;
      isFetching = false;
      console.log(Response.value)
    };
  };
};

const Item = (rank, imageUrl, trackTitle, artist) => div(
  {className: 'chart-item'},
  h4({className: 'rank'}, rank),
  img({src: imageUrl, alt: trackTitle, className: 'cover'}),
  div(
    {className: 'details'},
    p({className: 'title'}, trackTitle),
    p({className: 'artist'}, artist)
    ),
  div(
    {className: 'download'},
    i({className: 'fa fa-play'})
    )
  )

const Chart = (title, id, type) => {
  let param = `${id}_${type}`
  if (isFetching) {
    onUpdate(getCharts(id, type), [id]).then((cleanup) => {
      cleanup();
    });
  return div(
    {className: "chart-sub-container"},
    div(
      {className: 'chart-cat-header'},
      h3({}, title),
      div({className: 'nav-more'}, 'More ›')
      ),
   ...dgRepeat(5, Item("1", '', 'Loading.. ', 'Loading...'))
    )
  } 
    return div(
    {className: "chart-sub-container"},
    div(
      {className: 'chart-cat-header'},
      h3({}, title),
      div({className: 'nav-more'}, 'More ›')
      ),
   ...dgFor(Response?.value[param].done ? Response.value[param] : [], ({ position, album, artist, title_short }) =>
   Item(`${position}`,
   album.cover , artist.name, title_short))
    )
}

export default Chart;
*/

import './component.css';
import { CSML, onUpdate } from 'brace-js';

const { div, i, p, h1, h2, h3, h4, img, figure, dgRepeat, dgFor } = CSML;

const Item = ({ rank, imageUrl, trackTitle, artist }) => (
  div({ className: 'chart-item' },
    h4({ className: 'rank' }, rank),
    img({ src: imageUrl, alt: trackTitle, className: 'cover' }),
    div({ className: 'details' },
      p({ className: 'title' }, trackTitle),
      p({ className: 'artist' }, artist)),
    div({ className: 'download' },
      i({ className: 'fa fa-play' }))
  )
);

const getCharts = (id, type) => async () => {
  const param = `${id}_${type}`;
  const proxyUrl = 'https://corsproxy.io/?';
  const apiUrl = `https://api.deezer.com/chart/${id}/${type}?limit=5`;
  const response = await fetch(proxyUrl + apiUrl);
  const data = await response.json();
  return { result: data.data, done: true, param };
};

const Chart = ( title, id, type ) => {
  let isFetching = true;
  const param = `${id}_${type}`;
  const loadingItems = dgRepeat(5, Item({ rank: '1', imageUrl: '', trackTitle: 'Loading..', artist: 'Loading...' }));

  const fetchChartsIfNeeded = async () => {
    if (isFetching) {
      const cleanup = await onUpdate(getCharts(id, type), [id]);
      cleanup();
      isFetching = false;
    }
  };

  fetchChartsIfNeeded();

  const chartItems = dgFor(Response?.value?.[param]?.done ? Response.value[param].result : [], ({ position, album, artist, title_short }) => (
    Item({
      rank: position,
      imageUrl: album.cover,
      trackTitle: title_short,
      artist: artist.name
    })
  ));

  return (
    div({ className: 'chart-sub-container' },
      div({ className: 'chart-cat-header' },
        h3({}, title),
        div({ className: 'nav-more' }, 'More ›')),
      isFetching ? loadingItems : chartItems
    )
  );
};

export default Chart;


