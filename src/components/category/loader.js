import { CSML } from "brace-js";

const { div, h2, p, figure, brRepeat } = CSML;
export const loader = div(
      { className: "category" },
      div(
        { className: "category-title" },
        div(
          {},
          h2({ className: "title loader" }, ""),
          div({ className: "underline" })
        ),
        p({}, "More »")
      ),
      div(
        { className: "category-items" },
        ...brRepeat(
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