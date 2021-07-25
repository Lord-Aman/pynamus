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
import Pic25 from "./SocialMediaImages/pic25.png";
import Pic26 from "./SocialMediaImages/pic26.png";

function SocialMedia() {
  return (
    <div className="html">
      <div className="allCSS">
        <section className="homeACSS sectionCSS" id="homeACSS">
          <div className="content">
            <h3>
              Social Media <span> Management </span>
            </h3>
            <h2>Provide for the PEOPLE</h2>
            <h2>PEOPLE will provide you!</h2>

            <p>
              Social Media holds the power to turn Illusion into Reality. In a
              world full of Tweets, Algorithm & Digital Connection, We help
              create Human Connection! Powerful tool to Create IMPACT not to
              IMPRESS
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
              <h3>Engage </h3>
              <p>
                Best way to get ENGAGEMENT is to start ENGAGING! Users engage
                with content they find Relatable. Engage is the Ultimate Change.
                Audiences Interest help you reach Everest.
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>

            <div className="box">
              <img src={Pic15} alt="" />
              <h3>Evolve </h3>
              <p>
                The Best way to Stay Fit is to make your Content Hit! Trend is
                like Clothes, it changes with Every Season. It is only Change
                that is Constant, Everything else is Still
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>
            <div className="box">
              <img src={Pic16} alt="" />
              <h3>Emotion </h3>
              <p>
                There’s no Promotion without Emotion. If your Content Cannot
                Connect, It Cannot Affect. The Number of Posts doesn’t Matter,
                If your Content is Silent
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>
            <div className="box">
              <img src={Pic17} alt="" />
              <h3>Entertain </h3>
              <p>
                Content goes down the Drain, if it Cannot Entertain. Influence
                people not only to SEE your Content but also to SHARE your
                Content. Sometimes it is the Numbers that Create Wonders
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>
          </div>
        </section>

        <section className="aboutACSS sectionCSS" id="aboutACSS">
          <h1 className="headingACSS"> Game For Fame!</h1>

          <div className="column">
            <div className="image">
              <img src={Pic14} alt="" />
            </div>

            <div className="content">
              <h3>Secret Sauce Of Social Media </h3>
              <p>
                Don’t Create Content that Survive, Create Content that Live!
                According to Statistics, 89% who buy are 85% who Recommended the
                Brand. Social Media is like “Traffic Sign” that Everyone
                Follows.
              </p>
              <p>
                Don’t Worry, You can Join the Race too! We help Create
                Emotionally Impactful and Creatively Exclusive Content to make
                your Online Presence a Celebration for People. With Our Highly
                Skilled Team, We Transform your Ideas into Great Social Media
                Marketing. Join Us to Increase your Traffic and to Decrease your
                Workload
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
