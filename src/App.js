import logo from "./images/icon/logo.svg";
import arrow from "./images/icon/icon-arrow-down.svg";
import egg from "./images/desktop/image-transform.jpg";
import glass from "./images/desktop/image-stand-out.jpg";
import berry from "./images/desktop/image-graphic-design.jpg";
import orange from "./images/desktop/image-photography.jpg";
import emily from "./images/icon/image-emily.jpg";
import jennie from "./images/icon/image-jennie.jpg";
import thomas from "./images/icon/image-thomas.jpg";
import bottle from "./images/desktop/bottels.jpg";
import halforange from "./images/desktop/image-gallery-orange.jpg";
import cone from "./images/desktop/image-gallery-cone.jpg";
import sugarcan from "./images/desktop/image-gallery-sugarcubes.jpg";
import facebook from "./images/icon/icon-facebook.svg";
import insta from "./images/icon/icon-instagram.svg";
import pinterest from "./images/icon/icon-pinterest.svg";
import twitter from "./images/icon/icon-twitter.svg";
import React, { useState } from "react";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  const [toggle, setToggle] = useState(false);
  const [right, setRight] = useState("");
  const myFunction = () => {
    setToggle(!toggle);
    if (toggle === true) {
      setRight(null);
    } else {
      setRight("-100%");
    }
  };
  return (
    <div className="App">
      <div className="header">
        <header>
          <div className="navbar">
            <img src={logo} alt="logo" width="130px" />
            <div className="nav" style={{ right }}>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#Projects">Projects</a>
              <button className="btn-contact">CONTACT</button>
            </div>

            <button
              className="hamburger"
              id="hamburger"
              type="button"
              onClick={myFunction}
            >
              <i class="fa fa-bars"></i>
            </button>
          </div>
          <div className="header-text">
            <h1
              class="tracking-widest"
              style={{ color: "white", fontSize: "51px", fontWeight: 900 }}
            >
              WE ARE CREATIVES
            </h1>
            <img
              style={{
                padding: "41px",
                height: "auto",
              }}
              src={arrow}
              alt="name"
            />
          </div>
        </header>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 place-items-center  ">
        <img className="egg_img_left w-full" src={egg} alt="egg" />
        <div className="egg-text  px-8 py-10 md:p-10 ">
          <h1 className="font-serif font-sans text-4xl md:text-5xl  font-black">
            Transform your brand
          </h1>
          <p className="text-xl md:text-2xl" style={{ color: "grey" }}>
            We are a full-service creative agency specializing in healping
            brands grow fast. Engage your client through compelling visuals that
            do most of the marketing for you.{" "}
          </p>
          <div className="learn-yellow-btn">
            <button className="text-2xl font-black font-serif font-sans ">
              LEARN MORE
            </button>
          </div>
        </div>
        <img className="egg_img_right w-full" src={egg} alt="egg" />

        <img src={glass} alt="glass" style={{ width: "100%" }} />
        <div className=" px-8 py-10 md:p-10 ">
          <h1 className="font-serif font-sans text-4xl md:text-5xl  font-black">
            Stand out to the right audience
          </h1>
          <p className="text-xl md:text-2xl " style={{ color: "grey" }}>
            Using a collaborative formula of designers, research, photographers,
            videographers and copywriters, we'll build and extend your brand in
            digital places.
          </p>
          <div className="learn-pink-btn">
            <button className="text-2xl font-black font-serif font-sans ">
              LEARN MORE
            </button>
          </div>
        </div>

        <div classname="cointain-berry relative" style={{ width: "100%" }}>
          <img src={berry} alt="berry" style={{ width: "100%" }} />
          <figure className="relative">
            <figcaption className="absolute -mt-40 md:-mt-48">
              <h1
                className="text-center tracking-tight font-serif font-sans text-3xl md:text-4xl font-black"
                style={{ color: "#054525" }}
              >
                Graphic Design
              </h1>
              <p
                className="px-8 md:px-16 text-center font-bold text-base md:text-lg inherit"
                style={{ color: "#054525" }}
              >
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential client's
                attention.
              </p>
            </figcaption>
          </figure>
        </div>
        <div classname="cointain-orange " style={{ width: "100%" }}>
          <img src={orange} alt="orange" style={{ width: "100%" }} />
          <figure className="relative">
            <figcaption className="absolute -mt-40 md:-mt-48">
              <h1
                className="text-center tracking-tight font-serif font-sans text-3xl md:text-4xl font-black"
                style={{ color: "#033159" }}
              >
                photography
              </h1>
              <p
                className="text-center px-8 md:px-16 font-bold text-base md:text-lg inherit"
                style={{ color: "#033159" }}
              >
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="img-client py-8 lg:p-24  ">
        <h1
          className="text-center tracking-tight font-serif font-sans text-xl md:text-2xl font-black"
          style={{ color: "grey" }}
        >
          {" "}
          CLIENT TESTIMONIALS
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3  place-items-center ">
          <div className="py-8 px-6 md:px-4 md:py-16 text-center">
            <img
              src={emily}
              alt="Emily R"
              style={{
                margin: "auto",
                borderRadius: "52px",
                width: "70px",
              }}
            />
            <p
              className="py-8 md:py-16 text-lg font-medium inherit "
              style={{ color: "gray" }}
            >
              We put trust in sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <p className="text-2xl font-black">Emily R.</p>
            <p style={{ color: "grey" }}>Marketing Director</p>
          </div>
          <div className="py-8 px-6 md:px-4 md:py-16 text-center">
            <img
              className="object-center "
              src={thomas}
              alt="thomas S"
              style={{
                margin: "auto",
                borderRadius: "52px",
                width: "70px",
              }}
            />

            <p
              className="py-8 md:py-16 text-lg font-medium inherit "
              style={{ color: "gray" }}
            >
              sunnyside's enthusiam coupled with their keen interest in our
              brand's success made it a satisfying and enjoyable experience.
            </p>

            <p className="text-2xl font-black">Thomas S.</p>
            <p style={{ color: "grey" }}>Chies Operating Officer</p>
          </div>
          <div className="py-8 px-6 md:px-4 md:py-16 text-center ">
            <img
              src={jennie}
              alt="jennie F"
              style={{
                margin: "auto",
                borderRadius: "52px",
                width: "70px",
              }}
            />
            <p
              className="py-8 md:py-16  text-lg font-medium inherit"
              style={{ color: "gray" }}
            >
              Increadible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <p className="text-2xl font-black"> Jennie F.</p>
            <p style={{ color: "grey" }}>Business Owner</p>
          </div>
        </div>
      </div>
      <div className="contain-all-images  grid grid-cols-2 lg:grid-cols-4 ">
        <img src={bottle} alt="bottle" />
        <img src={halforange} alt="orange" />
        <img src={cone} alt="cone" />
        <img src={sugarcan} alt="Sugarcan" />
      </div>
      <div className="footer py-16 md:p-16 grid grid-cols-1  ">
        <footer>
          <div className="foot-logo items-center ">
            <img src={logo} alt="logo" width="170px" />
          </div>
          <div className="footer-text  text-center py-8 md:px-16 md:py-12">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#Projects">Projects</a>
          </div>
          <div className="footer-icon py-4 md:py-4">
            <img src={facebook} alt="fb" />
            <img src={insta} alt="insta" />
            <img src={twitter} alt="twitter" />
            <img src={pinterest} alt="pinterest" />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
