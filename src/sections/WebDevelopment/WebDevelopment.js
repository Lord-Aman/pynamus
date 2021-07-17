import React from "react";
import "./WebDevelopment.css";
import homeImg from "./WebDevImages/home-img.png";
import fIcon1 from "./WebDevImages/f-icon1.svg";
import fIcon2 from "./WebDevImages/f-icon2.svg";
import fIcon3 from "./WebDevImages/f-icon3.svg";
import AboutImg from "./WebDevImages/about-img.svg";
import HTML from "./WebDevImages/html.png";
import CSS from "./WebDevImages/css.png";
import JS from "./WebDevImages/js.png";
import REACT from "./WebDevImages/react.png";
import VUE from "./WebDevImages/vuejs.png";

function WebDevelopment() {
  return (
    <>
      <div className="allCSS">
        <section className="homeACSS sectionCSS" id="homeACSS">
          <div className="content">
            <h3>
              Website development <span>Service</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus suscipit porro nam libero natus error consequatur sed
              repudiandae eos quo?
            </p>
            <a href="#" className="btnACSS">
              contact Us
            </a>
          </div>

          <div className="image">
            <img src={homeImg} alt="" />
          </div>
        </section>

        <section className="featuresACSS sectionCSS" id="featuresACSS">
          <h1 className="headingACSS"> Portfolio </h1>

          <div className="box-container">
            <div className="box">
              <img src={fIcon1} alt="" />
              <h3>amazing UI design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
                minus recusandae autem, repellendus fugit quaerat provident
                voluptatum non officiis ratione.
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>

            <div className="box">
              <img src={fIcon2} alt="" />
              <h3>soft and smooth animations</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
                minus recusandae autem, repellendus fugit quaerat provident
                voluptatum non officiis ratione.
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>

            <div className="box">
              <img src={fIcon3} alt="" />
              <h3>freindly interactions</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
                minus recusandae autem, repellendus fugit quaerat provident
                voluptatum non officiis ratione.
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>
          </div>
        </section>

        <section className="aboutACSS sectionCSS" id="aboutACSS">
          <h1 className="headingACSS"> Website Development service </h1>

          <div className="column">
            <div className="image">
              <img src={AboutImg} alt="" />
            </div>

            <div className="content">
              <h3>Easy And Perfect Solution For Your Business App</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
                placeat deserunt saepe repudiandae veniam soluta minima dolor
                hic aperiam iure.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium, quaerat. Dolorem ratione saepe magni quo inventore
                porro ab voluptates eos, nam eius provident accusantium, quia
                similique est, repellendus et reiciendis.
              </p>
              <div className="buttons">
                <a href="#" className="btnACSS">
                  {" "}
                  Contact Us{" "}
                </a>
                <a href="#" className="btnACSS">
                  {" "}
                  home{" "}
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="techACSS">
          <h1 className="headingACSS1">technology We Use</h1>
          <div className="box-container">
            <div className="box">
              <div className="col">
                <img src={HTML} />
              </div>
              <div className="col">
                <img src={CSS} />
              </div>
              <div className="col">
                <img src={REACT} />
              </div>
              <div className="col">
                <img src={JS} />
              </div>
              <div className="col">
                <img src={VUE} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebDevelopment;
