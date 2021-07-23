import React from "react";
import "./SocialMedia.css";
// import homeImg from "./SocialMediaImages/home-img.png";
// import fIcon1 from "./SocialMediaImages/f-icon1.svg";
// import fIcon2 from "./SocialMediaImages/f-icon2.svg";
// import fIcon3 from "./SocialMediaImages/f-icon3.svg";
// import AboutImg from "./SocialMediaImages/about-img.svg";
import HTML from "./SocialMediaImages/html.png";
import CSS from "./SocialMediaImages/css.png";
import JS from "./SocialMediaImages/js.png";
import REACT from "./SocialMediaImages/react.png";
import VUE from "./SocialMediaImages/vuejs.png";
import Pic1 from "./SocialMediaImages/pic1.png";
import Pic3 from "./SocialMediaImages/pic3.png";
import Pic11 from "./SocialMediaImages/pic11.png";
import Pic12 from "./SocialMediaImages/pic12.gif";
import Pic13 from "./SocialMediaImages/pic13.png";
import Pic14 from "./SocialMediaImages/pic14.png";
import Pic15 from "./SocialMediaImages/pic15.gif";
import Pic16 from "./SocialMediaImages/pic16.gif";
import Pic17 from "./SocialMediaImages/pic17.png";
import Pic18 from "./SocialMediaImages/pic18.png";
import Pic19 from "./SocialMediaImages/pic19.png";
import Pic20 from "./SocialMediaImages/pic20.png";
import Pic21 from "./SocialMediaImages/pic21.png";
import Pic22 from "./SocialMediaImages/pic22.png";
import Pic23 from "./SocialMediaImages/pic23.png";
import Pic24 from "./SocialMediaImages/pic24.png";




function SocialMedia() {
  return (
    <div className="html">
      <div className="allCSS">
        <section className="homeACSS sectionCSS" id="homeACSS">
          <div className="content">
            <h3>
              Your Website is Like <span> Your PR team </span>
            </h3>
            <p>
              Attracts visitiors , Guides them to Your Services and promotes You
              24*7
            </p>
            <a href="#" className="btnACSS">
              contact Us
            </a>
          </div>

          <div className="image">
            <img src={Pic11} alt="" />
          </div>
        </section>

        <section className="featuresACSS sectionCSS" id="featuresACSS">
          <h1 className="headingACSS"> Your Website’s Beauty is Our Duty! </h1>

          <div className="box-containerACSS">
            <div className="box">
              <img src={Pic13} alt="" />
              <h3>Looks Matter!</h3>
              <p>
                Your Design creates “First Impression” in your Audience. Make
                sure to WOW them. We produce Designs that Make People Stop and
                Stare.
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>

            <div className="box">
              <img src={Pic15} alt="" />
              <h3>Soft and Smooth Animations </h3>
              <p>
                What you SEE is What you SELL! Animation is like your love for
                Coffee, goes to infinity and beyond. We turn Animation into
                Powerful Communication.
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>
            <div className="box">
              <img src={Pic16} alt="" />
              <h3>Friendly Interactions</h3>
              <p>
                It’s Easy to be Complicated than to be Simple. A Convenient
                Navigation Page delivers your message efficiently. We help you
                Build Relationship with your Audience.
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>
            <div className="box">
              <img src={Pic17} alt="" />
              <h3>Optimized for Mobile </h3>
              <p>
                Your website should Look Good on any Platform. The Users of
                Smartphone are increasing exponentially, We help Improve your
                Visitor’s Experience.
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
              <img src={Pic14} alt="" />
            </div>

            <div className="content">
              <h3>Secret Sauce of Great Website </h3>
              <p>
                The Vital Ingredient of a Great Website is to generate hunger
                for What’s More! The Audience isn’t interested in “What You
                Provide them” but in
              </p>
              <p>
                “How You Provide Them”. More than 90% people credited fonts,
                design, and structure to be the “Instant Connection” for them.
                Don’t worry! Your Website’s Beauty is now Our Duty. We deliver
                Top-notch services with the Finest Technology for you to be The
                Best Player in Market. Our Highly Skilled Team helps address
                both your planned and unplanned needs with great efficiency.
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
          <div className="box-containerACSS">
            <div className="box">
              <div className="col">
                <img src={Pic18} />
              </div>
              <div className="col">
                <img src={Pic19} />
              </div>
              <div className="col">
                <img src={Pic24} />
              </div>
              <div className="col">
                <img src={Pic23} />
              </div>

              <div className="col">
                <img src={Pic21} />
              </div>
              {/* <div className="col">
                <img src={D3} />
              </div> */}
            </div>
          </div>
        </div>

        <section class="reviewACSS sectionCSS" id="reviewACSS">
          <h1 class="headingACSS1"> people's review </h1>

          <div class="box-containerACSS">
            <div class="box">
              <div class="userACSS">
                <img src={Pic1} alt="" />
                <h3>Murshida Afrin</h3>

                <div class="comment">
                  Impressed with their service quality and working strategy.
                  They have a dedicated team to ensure all your needs. Loved
                  working with them. So attractive and easy to use, reduced the
                  loading time significantly by use of proper technology.
                </div>
              </div>
            </div>

            {/* <div class="box">
              <div class="userACSS">
                <img src={Pic2} alt="" />
                <h3>john deo</h3>

                <div class="comment">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Possimus et, perspiciatis nisi tempore aspernatur accusantium
                  sed distinctio facilis aperiam laborum autem earum repellat,
                  commodi eum. Ullam cupiditate expedita officiis obcaecati?
                </div>
              </div>
            </div>
           
            */}
            <div class="box">
              <div class="userACSS">
                <img src={Pic3} alt="" />
                <h3>Ritish Ghadai</h3>
                <div class="comment">
                  Just at loss of words, I appreciate the eye-tempting designs.
                  The new site is absolutely user-friendly. They are created
                  with thorough understanding of what I really wanted.
                  Communication was super-easy, loved it
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SocialMedia;