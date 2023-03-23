import { CSML } from "brace-js";

const { div, h3, img, p, h4, i, brRepeat } = CSML;

const Item = (rank, imageUrl, trackTitle, artist) => div(
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

export const loader = div(
      { className: "chart-sub-container" },
      div(
        { className: "chart-cat-header" },
        h3({}, 'Loading...'),
        div({ className: "nav-more" }, "More ›")
      ),
      ...brRepeat(5, Item("1", "", "Loading.. ", "Loading..."))
    );