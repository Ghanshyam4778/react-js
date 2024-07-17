import Aboutimg from "./about.jpeg";
import "./About.css";
const NoPage = () => {
  return (
    <>
      <div className="about_me">
        <div>
          <img src={Aboutimg} alt="" />
          <div className="overabout">
            <h1>MOTOGP ARAGON: EXPECTATIONST</h1>
            <p>
            The engine is the heart of a superbike, and is obviously what
              makes these motorcycles so powerful and fast. Superbikes are
              typically equipped with four-stroke, liquid-cooled, multi-cylinder
              engines that can produce over 200hp. The most powerful machines
              can reach speeds of over 200mph
            </p>
            <button>More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoPage;
