import React from "react";
import { Link } from "react-router-dom";
import bike1Image from "./images.jpeg";
import bike2Image from "./ge5115872937544120580.jpg";
import bike3Image from "./pngtree-d-illustration-of-a-white-backgrounded-super-sports-motorbike-in-blue-picture-image_6937785.jpg";
import bike4Image from "./images (1).jpeg";
import sentImg from "./sentImg.png";
import Telegram from "./telegram.png";
import Instagram from "./Instagram.png";
import Twitter from "./Twitter.png";
import FaceBook from "./Facebook.png";

const Home = () => {
  return (
    <div className="home-page">
      <main>
        <section className="hero">
          <h1>
            <b>Welcome to the bike Zone</b>
          </h1>
          <p>Explore our collection of Bikes and start renting today!</p>
          <button>
            <b>Rent Your Favourite Bike Now</b>
          </button>
        </section>
        <section className="featured-products">
          <h2>Featured Bikes</h2>
          <ul>
            <li>
              <Link to="/product/bike1" >
                <img src={bike1Image} alt="Bike 1" />
                <h3>Bike 1</h3>
                <p>$100</p>
                <button>
                  <b>Rent Now</b>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/product/bike2">
                <img src={bike2Image} alt="Bike 2" />
                <h3>Bike 2</h3>
                <p>$180.67</p>
                <button>
                  <b>Rent Now</b>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/product/bike3">
                <img src={bike3Image} alt="Bike 3" />
                <h3>Bike 3</h3>
                <p>$200</p>
                <button>
                  <b>Rent Now</b>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/product/bike4">
                <img src={bike4Image} alt="Bike 4" />
                <h3>Bike 4</h3>
                <p>$150</p>
                <button>
                  <b>Rent Now</b>
                </button>
              </Link>
            </li>
          </ul>
        </section>
      </main>
      
      <footer>
        <div className="footer">
          <div className="col4">
            <ul>
            <h5>Product</h5>
              <li><Link to="/">Bike</Link></li>
              <li><Link to="/">Cars</Link></li>
              <li><Link to="/">Super Bike</Link></li>
              <li><Link to="/">Super Car</Link></li>
            </ul>
          </div>
          <div className="col4">
            <ul>
            <h5>About</h5>
              <li><Link to="/">Services</Link></li>
              <li><Link to="/">Support</Link></li>
              <li><Link to="/">Show Case</Link></li>
              <li><Link to="/">Resourece</Link></li>
            </ul>
          </div>
          <div className="col4">
           <h5>Contact Us</h5>
           <input type="text"/>
           <img src={sentImg} alt="logo" className="sentImg" />
           <div className="Icon">
            <ul>
              <li><Link to=""><img src={Twitter} alt="" /></Link></li>
              <li><Link to=""><img src={Telegram} alt="" /></Link></li>
              <li><Link to=""><img src={Instagram} alt="" /></Link></li>
              <li><Link to=""><img src={FaceBook} alt="" /></Link></li>
            </ul>
           </div>
          </div>
        </div>
        <span>&copy;copyright 2024-25 www.bikezone.com</span>
      </footer>
    </div>
  );
};

export default Home;
