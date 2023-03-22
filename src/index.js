import "./assets/css/fonts.css";
import "./assets/css/font-awesome.min.css";
import "./index.css";
import { HomeComponent } from "./pages/Home";
import { AlbumSingleComponent } from "./pages/AlbumSingle";
import { render } from "brace-js";
import { createRouter, RouteOutlet, navigate } from "brace-router";

const RoutesArray = [
  {
    path: "/",
    component: HomeComponent,
    children: [
      {
        path: "/music/:artist_id/:id",
        component: AlbumSingleComponent,
      },
    ],
  },
  {
    path: "/music/:artist_id/:id",
    component: AlbumSingleComponent,
  },
];

const Routes = createRouter(RoutesArray);

render(RouteOutlet, document.querySelector("#root"));
