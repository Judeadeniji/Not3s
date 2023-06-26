import { Link } from "brace-js/router";
import Jumbotron from "../components/banner/component.js";
import Category from "../components/category/component.js";
import ForYou from "../components/for-you/component.js";
import Chart from "../components/charts/component.js";

 const HomeComponent = () => {
  return (
        <div class="content" key="HomeComponent">
          <Jumbotron />
          <Link to="/music/Asake/i-believe" data-br-preload="hover">
            <h1>Hello There</h1>
          </Link>
          <div class="main-content">
            <Category id={0} title="New Release" />
            <ForYou />
            <Category id={2} title="Africa/Nigeria" />
            <div class="charts">
              <h2 class="title">Charts</h2>
              <div class="chart-container">
                <Chart title="Top 100 Nigeria" id={2} type="tracks" />
                <Chart title="Top Nigerian Albums" id={2} type="albums" />
                <Chart title="Top 20 World" id={0} type="tracks" />
              </div>
            </div>
            <Category id={132} title="Recommended" />
            <Category id={116} title="Rap/Hip Hop" />
            <Category id={165} title="Reggea & Blues 🍹" />
          </div>
        </div>
  );
}
export default HomeComponent
