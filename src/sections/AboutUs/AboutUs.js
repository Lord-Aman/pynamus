import React from "react";
import "./AboutUs.css";
import Android from "./AboutUsImages/AndroidPNG.png";
import BG from "./AboutUsImages/bg.png";
import CoworkingAmico from "./AboutUsImages/Coworking-amico.png";
import Doctor from "./AboutUsImages/doctor-woman-400px.png";
import IOS from "./AboutUsImages/iosPNG.png";
import Learn from "./AboutUsImages/learn.png";
import Movie from "./AboutUsImages/movie.png";
import Videocall from "./AboutUsImages/videocall.png";
function AboutUs() {
  return (
    <div className="wrapper">
      <div className="landing">
        <div className="landingText">
          <h1>
            Think like{" "}
            <span style={{ color: "#1e5f87", fontSize: "4vw" }}> Expert!</span>{" "}
          </h1>
          <h3>
            Lorem ipsum dolor. Numquam, quod! Accusantium illum iste beatae
            itaque, sapiente eos ut consequatur deserunt voluptatibus facere
            consectetur nemo!
          </h3>
          <div className="btnCSS">
            <a href="#">Learn More</a>
          </div>
        </div>
        <div className="landingImage">
          <img src={BG} alt="" />
        </div>
      </div>

      <div className="about">
        <div className="aboutText">
          <h1>
            Why is it important that <br></br>{" "}
            <span style={{ color: "#2f8be0", fontSize: "3vw" }}>
              You Belive Us?
            </span>{" "}
          </h1>
          <img src={Doctor} alt="" />
        </div>
        <div className="aboutList">
          <ol>
            <li>
              <span>01</span>
              <p>
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Asperiores soluta illo fugit! A rem ullam debitis nam?
                Voluptate, reprehenderit deleniti iste quas harum nemo.
              </p>
            </li>
            <li>
              <span>02</span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
                veniam obcaecati voluptatum porro illum, odit tenetur eos? Earum
                id molestiae ipsum quaerat officia!
              </p>
            </li>
            <li>
              <span>03</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                adipisci temporibus eius porro nihil sunt debitis et facilis,
                quod fuga maxime minus maiores impedit..
              </p>
            </li>
            <li>
              <span>04</span>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Itaque, dolorum ea ullam id unde suscipit laudantium! Quae
                cupiditate autem deleniti voluptatum delectus odit velit?
              </p>
            </li>
          </ol>
        </div>
      </div>

      <div className="infoSection">
        <div className="infoHeader">
          <h1>
            Things you could do during the <br></br>{" "}
            <span style={{ color: "#1e5f87" }}>Working With Us.</span>{" "}
          </h1>
        </div>
        <div className="infoCards">
          <div className="card one">
            <img src={Movie} className="cardoneImg" alt="" />
            <div className="cardbgone"></div>
            <div className="cardContent">
              <h2>Binge Watch</h2>
              <p>
                Binge-watch all your favorite TV Shows or Movies during this
                Quarantine!
              </p>
            </div>
          </div>
          <div className="card two">
            <img src={Learn} className="cardtwoImg" alt="" />
            <div className="cardbgtwo"></div>
            <div className="cardContent">
              <h2>Learn a New Skill</h2>
              <p>
                Try a new recipe, Write a blog or Learn a new language this
                Quarantine!
              </p>
            </div>
          </div>
          <div className="card three">
            <img src={Videocall} className="cardthreeImg" alt="" />
            <div className="cardbgone"></div>
            <div className="cardContent">
              <h2>Video Call</h2>
              <p>
                Have fun video calling your friends or family this Quarantine!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="banner">
        <div className="bannerText">
          <h1>
            Visit Our Website Today. <br></br>{" "}
            <span
              style={{ fontSize: "1.6vw", fontWeight: "normal" }}
              className="bannerInnerText"
            >
              Stay Updated and get all your medical needs taken care of!
            </span>{" "}
          </h1>
          <a href="#">
            {" "}
            <img src={Android} alt="" />{" "}
          </a>
          <a href="#">
            {" "}
            <img src={IOS} alt="" />{" "}
          </a>
        </div>
        <div className="bannerImg">
          <img src={CoworkingAmico} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
