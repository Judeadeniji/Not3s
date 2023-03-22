import "./component.css";
import { CSML, $data, onUpdate } from "brace-js";
import { Link } from "brace-router";
const { div, h2, p, figure, img, dgFor, dgRepeat } = CSML;

const CategoryData = $data({done: false});
let isFetching = true;

const fetchData = (id) => {
  return async () => {
    const proxyUrl = 'https://corsproxy.io/?';
    const apiUrl = `https://api.deezer.com/chart/${id}`;
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    return () => {
    // Cleanup function;
    CategoryData.value[id] = { result: data.tracks.data, done: true };
    CategoryData.value = {...CategoryData.value, done: true}
    console.log(CategoryData.value)
    isFetching = false;
    };
  };
};



const Item = (title = "Loading...", imageUrl) =>
  div(
    { className: "item" },
    figure(
      { className: "image" },
      img({
        src: imageUrl,
        alt: title,
        className: "image",
      })
    ),
    p({ className: "title" }, {title})
  );

const Category = (id, title = "Loading...") => {
  if (isFetching) {
    onUpdate(fetchData(id), [id]).then((cleanup) => {
      cleanup()
    });

    return div(
      { className: "category" },
      div(
        { className: "category-title" },
        div(
          {},
          h2({ className: "title" }, title),
          div({ className: "underline" })
        ),
        p({}, "More »")
      ),
      div(
        { className: "category-items" },
        ...dgRepeat(
          20,
          div(
            { className: "item" },
            figure(
              {
                className: "image loader",
              },
              div({ className: "image" })
            ),
            p({
              className: "title loader",
            })
          )
        )
      )
    );
  }

  return div(
    { className: "category" },
    div(
      { className: "category-title" },
      div(
        {},
        h2({ className: "title" }, title),
        div({ className: "underline" })
      ),
      p({}, "More »")
    ),
    div(
      { className: "category-items" },
      ...dgFor(CategoryData.value[id]?.done ? CategoryData.value[id]?.result : ['Loading...'] , (res) =>
        Link( {}, `/music/${res.artist?.name}/${res?.id}`,
Item(res?.title_short, res?.album.cover)
        )
      )
    )
  );
};

export default Category;
