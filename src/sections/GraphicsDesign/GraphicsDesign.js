import React from "react";
import "./GraphicsDesign.css";
import G1 from "./GraphicsDesignImages/g-1.jpg";
import G2 from "./GraphicsDesignImages/g-2.jpg";
import G3 from "./GraphicsDesignImages/g-3.jpg";
import G4 from "./GraphicsDesignImages/g-4.jpg";
import G5 from "./GraphicsDesignImages/g-5.jpg";
import G6 from "./GraphicsDesignImages/g-6.jpg";
import G7 from "./GraphicsDesignImages/g-7.jpg";
import G8 from "./GraphicsDesignImages/g-8.jpg";
import G9 from "./GraphicsDesignImages/g-9.jpg";
import G10 from "./GraphicsDesignImages/g-10.jpg";
import homeBCSSBg from "./GraphicsDesignImages/home-bg.jpg";
import homeBCSSImg from "./GraphicsDesignImages/home-img.png";
import Pic1 from "./GraphicsDesignImages/pic1.png";
import Pic2 from "./GraphicsDesignImages/pic2.png";
import Pic3 from "./GraphicsDesignImages/pic3.png";
import S0 from "./GraphicsDesignImages/s-0.svg";
import S1 from "./GraphicsDesignImages/s-1.svg";
import S2 from "./GraphicsDesignImages/s-2.svg";
import S3 from "./GraphicsDesignImages/s-3.svg";
import S4 from "./GraphicsDesignImages/s-4.svg";
import S5 from "./GraphicsDesignImages/s-5.svg";
import S6 from "./GraphicsDesignImages/s-6.svg";

function GraphicsDesign() {
  return (
    <>
      <section className="sectionBCSS" className="homeBCSS" id="homeBCSS">
        <div className="content">
          <h3 className="h3BCSS">
            <span>Graphic and Logo Designing Service</span>
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            accusamus tempore temporibus rem amet laudantium animi optio
            voluptatum. Natus obcaecati unde porro nostrum ipsam itaque impedit
            incidunt rem quisquam eos!
          </p>
          <a href="#" className="btnBCSS">
            contact Us
          </a>
        </div>

        <div className="image">
          <img src={homeBCSSImg} alt="" />
        </div>
      </section>

      <section className="sectionBCSS" className="speciality" id="speciality">
        <h1 className="headingBCSS">
          {" "}
          UI/UX <span>SERVICES</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <img className="image" src={S1} alt="" />
            <div className="content">
              <img src={S1} alt="" />
              <h3 className="h3BCSS">Amazing UI Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda inventore neque amet ipsa tenetur voluptates aperiam
                tempore libero labore aut.
              </p>
            </div>
          </div>
          <div className="box">
            <img className="image" src={S2} alt="" />
            <div className="content">
              <img src={S2} alt="" />
              <h3 className="h3BCSS">Soft And Smooth Animations</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda inventore neque amet ipsa tenetur voluptates aperiam
                tempore libero labore aut.
              </p>
            </div>
          </div>
          <div className="box">
            <img className="image" src={S3} alt="" />
            <div className="content">
              <img src={S3} alt="" />
              <h3 className="h3BCSS">User-Freindly Interactions</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda inventore neque amet ipsa tenetur voluptates aperiam
                tempore libero labore aut.
              </p>
            </div>
          </div>
          <div className="box">
            <img className="image" src={S4} alt="" />
            <div className="content">
              <img src={S4} alt="" />
              <h3 className="h3BCSS">Logo Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda inventore neque amet ipsa tenetur voluptates aperiam
                tempore libero labore aut.
              </p>
            </div>
          </div>
          <div className="box">
            <img className="image" src={S5} alt="" />
            <div className="content">
              <img src={S5} alt="" />
              <h3 className="h3BCSS">Graphic Animations</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda inventore neque amet ipsa tenetur voluptates aperiam
                tempore libero labore aut.
              </p>
            </div>
          </div>
          <div className="box">
            <img className="image" src={S6} alt="" />
            <div className="content">
              <img src={S6} alt="" />
              <h3 className="h3BCSS">Friendly Interactions</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda inventore neque amet ipsa tenetur voluptates aperiam
                tempore libero labore aut.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sectionBCSS" className="aboutBCSS" id="aboutBCSS">
        <h1 className="headingBCSS">
          {" "}
          Graphic and Logo Designing <span>Service</span>{" "}
        </h1>

        <div className="column">
          <div className="image">
            <img src={S1} alt="" />
          </div>

          <div className="content">
            <h3 className="h3BCSS">
              Easy And Perfect Solution For Your Business Branding
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              placeat deserunt saepe repudiandae veniam soluta minima dolor hic
              aperiam iure.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium, quaerat. Dolorem ratione saepe magni quo inventore
              porro ab voluptates eos, nam eius provident accusantium, quia
              similique est, repellendus et reiciendis.
            </p>
            <div className="buttons">
              <a href="#" className="btnBCSS">
                {" "}
                Contact Us{" "}
              </a>
              <a href="#" className="btnBCSS">
                {" "}
                home{" "}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sectionBCSS" className="popular" id="popular">
        <h1 className="headingBCSS">
          {" "}
          most <span>popular Design</span> services{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <span className="price"> UI-Design </span>
            <img src={S1} alt="" />
            <h3 className="h3BCSS">UI-Design</h3>
            <a href="#" className="btnBCSS">
              Read More
            </a>
          </div>
          <div className="box">
            <span className="price"> UX-Design </span>
            <img src={S2} alt="" />
            <h3 className="h3BCSS">UX-Design</h3>
            <a href="#" className="btnBCSS">
              Read More
            </a>
          </div>
          <div className="box">
            <span className="price"> Logo-design </span>
            <img src={S3} alt="" />
            <h3 className="h3BCSS">Logo-design</h3>
            <a href="#" className="btnBCSS">
              Read More
            </a>
          </div>
          <div className="box">
            <span className="price"> Graphics-design </span>
            <img src={S4} alt="" />
            <h3 className="h3BCSS">Graphics-design</h3>
            <a href="#" className="btnBCSS">
              Read More
            </a>
          </div>
          <div className="box">
            <span className="price"> Logo-design </span>
            <img src={S5} alt="" />
            <h3 className="h3BCSS">Logo-design</h3>
            <a href="#" className="btnBCSS">
              Read More
            </a>
          </div>
          <div className="box">
            <span className="price"> Graphics-design </span>
            <img src={S6} alt="" />
            <h3 className="h3BCSS">Graphics-design</h3>
            <a href="#" className="btnBCSS">
              Read More
            </a>
          </div>
        </div>
      </section>

      <div className="step-container">
        <h1 className="headingBCSS">
          how We <span>work</span>
        </h1>

        <section className="sectionBCSS" className="steps">
          <div className="box">
            <img src={S0} alt="" />
            <h3 className="h3BCSS">Design-thinking</h3>
          </div>
          <div className="box">
            <img src={S4} alt="" />
            <h3 className="h3BCSS">take User Feedback</h3>
          </div>
          <div className="box">
            <img src={S1} alt="" />
            <h3 className="h3BCSS">Create a Design</h3>
          </div>
          <div className="box">
            <img src={S5} alt="" />
            <h3 className="h3BCSS">finally, It's Done</h3>
          </div>
        </section>
      </div>

      <section className="sectionBCSS" className="gallery" id="gallery">
        <h1 className="headingBCSS">
          {" "}
          our <span> Designs </span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <img src={G1} alt="" />
            <div className="content">
              <h3 className="h3BCSS">Amazing UI</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deleniti, ipsum.
              </p>
            </div>
          </div>
          <div className="box">
            <img src={G2} alt="" />
            <div className="content">
              <h3 className="h3BCSS">Soft Animations</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deleniti, ipsum.
              </p>
            </div>
          </div>
          <div className="box">
            <img src={G3} alt="" />
            <div className="content">
              <h3 className="h3BCSS">User-Freindly</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deleniti, ipsum.
              </p>
            </div>
          </div>
          <div className="box">
            <img src={G4} alt="" />
            <div className="content">
              <h3 className="h3BCSS">Logo Design</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deleniti, ipsum.
              </p>
            </div>
          </div>
          <div className="box">
            <img src={G5} alt="" />
            <div className="content">
              <h3 className="h3BCSS">Graphic Animations</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deleniti, ipsum.
              </p>
            </div>
          </div>
          <div className="box">
            <img src={G6} alt="" />
            <div className="content">
              <h3 className="h3BCSS">Freindly Interactions</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deleniti, ipsum.
              </p>
            </div>
          </div>
          <div className="box">
            <img src={G7} alt="" />
            <div className="content">
              <h3 className="h3BCSS">Amazing UI</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deleniti, ipsum.
              </p>
            </div>
          </div>
          <div className="box">
            <img src={G8} alt="" />
            <div className="content">
              <h3 className="h3BCSS">Amazing UI</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deleniti, ipsum.
              </p>
            </div>
          </div>
          <div className="box">
            <img src={G9} alt="" />
            <div className="content">
              <h3 className="h3BCSS">Amazing UI</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deleniti, ipsum.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sectionBCSS" className="review" id="review">
        <h1 className="headingBCSS">
          {" "}
          our customers <span>reviews</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <img src={Pic1} alt="" />
            <h3 className="h3BCSS">john deo</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              delectus, ducimus facere quod ratione vel laboriosam? Est, maxime
              rem. Itaque.
            </p>
          </div>
          <div className="box">
            <img src={Pic2} alt="" />
            <h3 className="h3BCSS">john deo</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              delectus, ducimus facere quod ratione vel laboriosam? Est, maxime
              rem. Itaque.
            </p>
          </div>
          <div className="box">
            <img src={Pic3} alt="" />
            <h3 className="h3BCSS">john deo</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              delectus, ducimus facere quod ratione vel laboriosam? Est, maxime
              rem. Itaque.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default GraphicsDesign;
