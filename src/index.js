import "./index.css";
import { Mount } from "brace-js";
import { start, RouteOutlet } from "./routes"
import Header from "./components/header/component.js";
import Sidebar from "./components/sidebar/component.js";
import BottomNav from "./components/footer/bottom-nav";
import AudioPlayer from "./components/footer/music-player";

const Layout = () => {
 return (
    <div key="Layout">
      <Header />
      <div class="container">
        <Sidebar />
        <RouteOutlet />
      </div>
      <div class="footer-container">
        <AudioPlayer />
        <BottomNav />
      </div>
    </div>
  )
}

const root = document.querySelector("#root")
start(root);
Mount(() => <Layout />, root);