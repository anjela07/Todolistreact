import { Link } from "react-router-dom";
import "./Home.css";
import earth from "../Home/earth2.webp";
import moon from "../Home/moon.webp";

export const Home = () => {
  return (
    <div className="content">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Link to="login">
        <button className="log">
          <span> Quiz</span>
        </button>
      </Link>
      <div className="planet">
        <article className="earth-demo">
          <div className="earth">
            <img src={earth} className="earth1" />
          </div>
          <div className="moon-container">
            <div className="moon">
              <img src={moon} className="moon1" />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
