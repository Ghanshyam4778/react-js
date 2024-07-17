import React from "react";
import { useParams } from "react-router-dom";
import bike1Image from "./images (10).jpg";
import bike2Image from "./ducati-panigale-2023.webp";
import bike3Image from "./p195ttfcua1314biki28q1i1d3q41_1622105243742_1622105250849.avif";
import bike4Image from "./2021-BMW-M1000RR-superbike-05-scaled.webp";
import bike5Image from "./images.jpeg";
import bike6Image from "./ge5115872937544120580.jpg";
import bike7Image from "./pngtree-d-illustration-of-a-white-backgrounded-super-sports-motorbike-in-blue-picture-image_6937785.jpg";
import bike8Image from "./images (1).jpeg";


const ProductPage = () => {
  let { id } = useParams();

  const products = [
    {
      id: "bike1",
      name: "Bike 1",
      price: "$100",
      image: "./images (10).jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "bike2",
      name: "Bike 2",
      price: "$180.67",
      image: "./ducati-panigale-2023.webp",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      id: "bike3",
      name: "Bike 3",
      price: "$200",
      image: "./p195ttfcua1314biki28q1i1d3q41_1622105243742_1622105250849.avif",
      description:
        "Ut sollicitudin lacus eu elit laoreet, non vehicula dolor interdum.",
    },
    {
      id: "bike4",
      name: "Bike 4",
      price: "$150",
      image: "./2021-BMW-M1000RR-superbike-05-scaled.webp",
      description: "Fusce at dui in lectus scelerisque laoreet id ac metus.",
    },
  ];

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="home-page">
        <main>
          <section className="featured-products">
            <h2>Our Bike collection</h2>
            <ul>
              <li>
                <img src={bike1Image} alt="Bike 1" />
                <h3>Bike 1</h3>
                <p>$100</p>
                <button>
                  <b>Rent Now</b>
                </button>
              </li>
              <li>
                <img src={bike2Image} alt="Bike 2" />
                <h3>Bike 2</h3>
                <p>$180.67</p>
                <button>
                  <b>Rent Now</b>
                </button>
              </li>
              <li>
                <img src={bike3Image} alt="Bike 3" />
                <h3>Bike 3</h3>
                <p>$200</p>
                <button>
                  <b>Rent Now</b>
                </button>
              </li>
              <li>
                <img src={bike4Image} alt="Bike 4" />
                <h3>Bike 4</h3>
                <p>$150</p>
                <button>
                  <b>Rent Now</b>
                </button>
              </li>
            </ul>
          </section>
          <section className="featured-products">
            <ul>
              <li>
                <img src={bike5Image} alt="Bike 5" />
                <h3>Bike 5</h3>
                <p>$100</p>
                <button>
                  <b>Rent Now</b>
                </button>
              </li>
              <li>
                <img src={bike6Image} alt="Bike 6" />
                <h3>Bike 6</h3>
                <p>$180.67</p>
                <button>
                  <b>Rent Now</b>
                </button>
              </li>
              <li>
                <img src={bike7Image} alt="Bike 7" />
                <h3>Bike 7</h3>
                <p>$200</p>
                <button>
                  <b>Rent Now</b>
                </button>
              </li>
              <li>
                <img src={bike8Image} alt="Bike 8" />
                <h3>Bike 8</h3>
                <p>$150</p>
                <button>
                  <b>Rent Now</b>
                </button>
              </li>
            </ul>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="product-page">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Price: {product.price}</p>
      <p>{product.description}</p>
      <button>Rent Now</button>
    </div>
  );
};

export default ProductPage;
