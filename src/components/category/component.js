import "./component.css";
import { CSML, Data, onUpdate } from "brace-js";
import { loader } from "./loader";
import { DeezerApi, Result } from "../../service/deezer-api";
import { Link } from "brace-router";

const { div, h2, p, figure, img, brFor, brRepeat } = CSML;
const CategoryData = Data({done: false});
let isFetching = true;

/*const fetchData = (id) => {
  return async () => {
    const proxyUrl = 'https://corsproxy.io/?';
    const apiUrl = `https://api.deezer.com/chart/${id}`;
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    CategoryData.value[id] = { result: data.tracks.data, done: true };
    CategoryData.value = {...CategoryData.value, done: true}
    isFetching = false;
    return () => {
    // Cleanup function;
    console.log(CategoryData.value)
    isFetching = false;
    };
  };
};*/



const Item = (title = "Loading...", imageUrl) =>  div(
    { className: "item" },
    figure(
      { className: "image" },
      img({
        src: imageUrl,
        alt: title,
        className: "image",
      })
    ),
    p({ className: "title" }, title)
  );

const Category = (id, title = "Loading...") => {
  if (isFetching) {
    onUpdate(DeezerApi(`chart/${id}`), [id]).then((cleanup) => {
     cleanup();
     console.log(Result.value)
    });

    return loader;
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
      ...brFor(CategoryData.value[id]?.done ? CategoryData.value[id]?.result : ['Loading...'] , (res) =>
        Link( {}, `/music/${res.artist?.name}/${res?.id}`,
Item(res?.title_short, res?.album.cover)
        )
      )
    )
  );
};

export default Category;
