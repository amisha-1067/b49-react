import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <NavBar1 />
      <NavBar2 />
      <NavBarMain />
      <Body />
      <Page2 />
    </div>
  );
}

function NavBar1() {
  return (
    <div>
      <div className="navbar1">
        <i class="fa-solid fa-truck" id="truck"></i>
        <p className="para1">Free delivery</p>
        <div className="vertical_line"></div>
        <p className="para2">Return Policy</p>
        <a href="login.html" className="para3">
          Login
        </a>
        <a href="follow.html" className="para4">
          Follow Us
        </a>
        <a href="facebook.html">
          <i class="fa-brands fa-facebook" id="i1"></i>
        </a>
        <a href="facebook.html">
          <i class="fa-brands fa-linkedin" id="i2"></i>
        </a>

        <a href="facebook.html">
          <i class="fa-brands fa-twitter" id="i3"></i>
        </a>
        <a href="facebook.html">
          <i class="fa-brands fa-instagram" id="i4"></i>
        </a>
      </div>
    </div>
  );
}

function NavBar2() {
  return (
    <div>
      <div className="navbar2">
        <h1 className="heading">ShopKart</h1>
        <p className="para5">WISHLIST (0)</p>
        <p className="para6">BAG (0)</p>
        {/* <hr /> */}
      </div>
      <div className="line"></div>
    </div>
  );
}

function NavBarMain() {
  return (
    <div>
      <div className="mainnav">
        <a href="home.html" className="home">
          Home
        </a>
        <a href="about.html" className="about">
          About
        </a>

        <div class="dropdown">
          <a href="products.html" className="products">
            Our Products
          </a>
          <div class="dropdown-content">
            <ul>
              <li className="list-item">
                <a className="electronics" href="elec.html">
                  Electronics
                </a>
              </li>
              <li className="list-item">
                <a className="jewelery" href="jewel.html">
                  Jewelery
                </a>
              </li>
              <li className="list-item">
                <a className="men" href="men.html">
                  Men
                </a>
              </li>
              <li className="list-item">
                <a className="women" href="women.html">
                  Women
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a href="contact.html" className="contact">
          Contact Us
        </a>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="body-main">
      <p className="body-para1">Fresh</p>
      <p className="body-para2">2022</p>
      <p className="body-para3">Look</p>
      <img
        src="https://i.pinimg.com/originals/c4/cb/85/c4cb85cd425a9035b7d155645d8693fc.png"
        alt="image1"
        className="body-image"
      />
      <div className="line2"></div>
    </div>
  );
}

function Page2() {
  return (
    <div>
      <p className="p">NEW ARRIVALS</p>
      <div className="line3"></div>
      <div className="cards">
        <div className="card-1">
          <img
            src="https://m.economictimes.com/thumb/msid-96169808,width-1280,height-1280,resizemode-4,imgsize-39552/jackets-.jpg"
            alt="imagea"
            className="image-a"
          />
          <div className="card-a">
            <p className="desc-a">Women Jacket</p>
            <p className="price-a">Price: $123</p>
            <button className="btn-a">EXPLORE</button>
          </div>
        </div>
        <div className="card-2">
          <img
            src="https://www.shopolics.com/uploads/images/full/Blue-Poly-Cotton-Blend-Regular-Fit-Men-Trousers-38397.jpg"
            alt="imageb"
            className="image-b"
          />
          <div className="card-b">
            <p className="desc-b">Men Trouser</p>
            <p className="price-b">Price: $123</p>
            <button className="btn-b">EXPLORE</button>
          </div>
        </div>
        <div className="card-3">
          <img
            src="https://i.pinimg.com/736x/db/ac/5d/dbac5d11d83cda92fd99d34cba21d20a.jpg"
            alt="imagec"
            className="image-c"
          />
          <div className="card-c">
            <p className="desc-c">Women Ring</p>
            <p className="price-c">Price: $123</p>
            <button className="btn-c">EXPLORE</button>
          </div>
        </div>
        <div className="card-4">
          <img
            src="https://images.unsplash.com/photo-1588824051376-0063738d61e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW4lMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt="imaged"
            className="image-d"
          />
          <div className="card-d">
            <p className="desc-d">Women Dress</p>
            <p className="price-d">Price: $123</p>
            <button className="btn-d">EXPLORE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
