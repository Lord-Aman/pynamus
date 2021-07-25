import React from "react";
import "./LeadGeneration.css";
import homeImg from "./LeadGenerationImages/home-img.png";
import fIcon1 from "./LeadGenerationImages/f-icon1.svg";
import fIcon2 from "./LeadGenerationImages/f-icon2.svg";
import fIcon3 from "./LeadGenerationImages/f-icon3.svg";
import AboutImg from "./LeadGenerationImages/about-img.svg";
import HTML from "./LeadGenerationImages/html.png";
import CSS from "./LeadGenerationImages/css.png";
import JS from "./LeadGenerationImages/js.png";
// import D3 from "./LeadGenerationImages/d3.png";
import REACT from "./LeadGenerationImages/react.png";
import VUE from "./LeadGenerationImages/vuejs.png";
import Pic1 from "./LeadGenerationImages/pic1.png";
import Pic3 from "./LeadGenerationImages/pic3.png";

function LeadGeneration() {
  return (
    <div className="html">
      <div className="allCSS">
        <section className="homeACSS sectionCSS" id="homeACSS">
          <div className="content">
            <h3>
            You Are Out Of Business  <span> If You Don't Have A Vision </span>
            </h3>
            <p>
            The lead generation process starts by finding out where your Target Market 'lives' on the Web 
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
          <h1 className="headingACSS"> WORDS ARE POWERFUL </h1>

          <div className="box-containerACSS">
            <div className="box">
              <img src={fIcon1} alt="" />
              <h3>Give better offers</h3>
              <p>
              Unless you're one of the very top advertisers, there's a ton of room for conversion rate improvement.
              One creative way is to give better offers. This is far more meaningful than your typical, run of the mill optimizations – changing button color, font type, spacing, etc.
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>

            <div className="box">
              <img src={fIcon2} alt="" />
              <h3>Write better ads! </h3>
              <p>
              This is what I call an AdWords Jackpot for an advertiser. When everything looks the same, there's a huge opportunity to come in with something different and blow the competition away!
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>
            <div className="box">
              <img src={fIcon2} alt="" />
              <h3>Go nuts with remarketing</h3>
              <p>
              Remarketing enables you to tag site visitors and get back in front of them as they go about their business around the web, checking their email, watching YouTube, searching Google and even hanging out on Facebook.
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>
            <div className="box">
              <img src={fIcon3} alt="" />
              <h3>Use Gmail ads to Target Customers</h3>
              <p>
              For a SaaS startup, no audience is more valuable than your competitors’ customers. With Gmail Ads, you can target your AdWords campaign to only ever reach people who receive emails from your competitors, giving you direct access to people that already use similar products.
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>
          </div>
        </section>

        <section className="aboutACSS sectionCSS" id="aboutACSS">
          <h1 className="headingACSS"> LEAD GENERATION SERVICES </h1>

          <div className="column">
            <div className="image">
              <img src={AboutImg} alt="" />
            </div>

            <div className="content">
              <h3>Secret Sauce of Great LEAD  </h3>
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

export default LeadGeneration;
