import { CSML } from "brace-js"
import Header from "../components/header/component.js"
import Sidebar from "../components/sidebar/component.js"
import Jumbotron from "../components/banner/component.js"
import Category from "../components/category/component.js"
import ForYou from "../components/for-you/component.js"
import Chart from "../components/charts/component.js"
const { frag, div, h2 } = CSML

export const HomeComponent = () => {
  return frag(
    Header(),
    div(
      {className: 'container'},
      Sidebar(),
      div(
      {className: 'content'},
      Jumbotron(),
      div(
      {className: 'main-content'},
      Category(0, 'New Release'),
      ForYou(),
      Category(2, 'Africa/Nigeria'),
      div(
        {className: 'charts'},
        h2({className: 'title'}, 'Charts'),
        div(
          {className: 'chart-container'},
          Chart('Top 100 Nigeria', 2, 'tracks'),
           Chart('Top Nigerian Albums', 2, 'albums'),
           Chart('Top 20 World', 0, 'tracks')
        )
        ),
      Category(132, 'Recommended'),
      Category(116, 'Rap/Hip Hop'),
      Category(165, 'Reggea & Blues 🍹')
      )
      )
    )
   )
}