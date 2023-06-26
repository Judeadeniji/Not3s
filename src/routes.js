import {
  createRouter,
  RouteOutlet as Outlet,
  navigate,
  beforeRoute,
  useErrorComponent,
  use404Component,
} from "brace-js/router";
let dom;

const RoutesArray = [
  {
    path: "/",
    component: () => import("./pages/Home"),
  },
  {
    path: "/music/[artist_id]/[id]",
    component: () => import("./pages/AlbumSingle"),
  },
];

// Mandatory
beforeRoute(({ resolve }) => {
  let app = dom.querySelector(".container");
  app.classList.add("page-exit");
  setTimeout(function () {
    app.classList.remove("page-exit");
    // resolve the route or routing won't work
    resolve(() => {
      app.classList.add("page-enter");
      setTimeout(function () {
        app.classList.remove("page-enter");
      }, 300);
    });
  }, 300);
});

export const start = (container) => {
  createRouter(RoutesArray);
  dom = container;
};

use404Component(() => (
  <div class="router-error-container" key="error-container">
    <h1>404 Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <button onclick="window.history.back()">Go Back</button>
  </div>
))

useErrorComponent(() => (
  <div class="router-error-container" key="error-container">
    <h1>Oops! Something went wrong.</h1>
    <p>We apologize for the inconvenience. Please try again later.</p>
    <button onclick="window.history.back()">Go Back</button>
  </div>
))

export let RouteOutlet = Outlet;
