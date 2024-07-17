import { Outlet, Link } from "react-router-dom";
import logo from "./logo.png";

const Layout = () => {
  return (
    <>
      <nav>
        <div>
          <img src={logo} alt="" className="Logo" />
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">
                <b>Home</b>
              </Link>
            </li>
            <li>
              <Link to="/product/:id"><b>Products</b></Link>
            </li>
            <li>
              <Link to="/about"><b>About Us</b></Link>
            </li>
            <li>
              <Link to="/contact">
                <b>Contact</b>
              </Link>
            </li>
            <li className="btn">
              <Link to="/login" className="login">login</Link>
            </li>
          </ul>
        </div>
        
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
