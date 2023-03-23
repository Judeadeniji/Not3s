import "./component.css";
import { loader } from "./loader";
import { CSML, Data, onUpdate } from "brace-js";
const { div, i, p, h1, h2, h3, h4, img, figure, brRepeat, brFor } = CSML;
const Response = Data({});
let isFetching = true;

const getCharts = (id, type) => {
  let param = `${id}_${type}`;
  return async () => {
    const proxyUrl = "https://corsproxy.io/?";
    const apiUrl = `https://api.deezer.com/chart/${id}/${type}?limit=5`;
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    Response.value[param] = { result: data.data, done: true };
    return () => {
      // Cleanup function;
      isFetching = false;
    };
  };
};

const Item = (rank, imageUrl, trackTitle, artist) =>
  div(
    { className: "chart-item" },
    h4({ className: "rank" }, rank),
    img({ src: imageUrl, alt: trackTitle, className: "cover" }),
    div(
      { className: "details" },
      p({ className: "title" }, trackTitle),
      p({ className: "artist" }, artist)
    ),
    div({ className: "download" }, i({ className: "fa fa-play" }))
  );

const Chart = (title, id, type) => {
  let param = `${id}_${type}`;
  if (isFetching) {
    onUpdate(getCharts(id, type), [id]).then((cleanup) => {
      cleanup();
    });
    return loader;
  }
  return div(
    { className: "chart-sub-container" },
    div(
      { className: "chart-cat-header" },
      h3({}, title),
      div({ className: "nav-more" }, "More ›")
    ),
    ...brFor(
      Response?.value[param].done ? Response.value[param] : [],
      ({ position, album, artist, title_short }) =>
        Item(`${position}`, album.cover, artist.name, title_short)
    )
  );
};

export default Chart;
