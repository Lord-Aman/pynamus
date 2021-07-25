import React from "react";
import "./SeoManagement.css";
import homeImg from "./SeoManagementImages/home-img.png";
import fIcon1 from "./SeoManagementImages/f-icon1.svg";
import fIcon2 from "./SeoManagementImages/f-icon2.svg";
import fIcon3 from "./SeoManagementImages/f-icon3.svg";
import AboutImg from "./SeoManagementImages/about-img.svg";
import HTML from "./SeoManagementImages/html.png";
import CSS from "./SeoManagementImages/css.png";
import JS from "./SeoManagementImages/js.png";
// import D3 from "./SeoManagementImages/d3.png";
import REACT from "./SeoManagementImages/react.png";
import VUE from "./SeoManagementImages/vuejs.png";
import Pic1 from "./SeoManagementImages/pic1.png";
import Pic3 from "./SeoManagementImages/pic3.png";

function SeoManagement() {
  return (
    <div className="html">
      <div className="allCSS">
        <section className="homeACSS sectionCSS" id="homeACSS">
          <div className="content">
            <h3>
             SEO is not Content Creation <span>It is Content Promotion </span>
            </h3>
            <p>
            SEO is not something you do anymore, its what happens when you do everything else right. 
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
          <h1 className="headingACSS"> SEO CHATTER ! </h1>

          <div className="box-containerACSS">
            <div className="box">
              <img src={fIcon1} alt="" />
              <h3>Mobile SEO Strategy</h3>
              <p>
              While it’s not an entirely separate process, there are distinct considerations for mobile SEO like monitoring page speed, responsive site design, local SEO, and creating content that is high-quality, regardless of device it’s viewed on.
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>

            <div className="box">
              <img src={fIcon2} alt="" />
              <h3>Making list of topics </h3>
              <p>
              To start, compile a list of about 10 words and terms associated with your product or service. Use an SEO tool ( Google's Keyword Tool, Ahrefs , SEMRush or GrowthBar just to name a few) to research these words, identify their search volume, and come up with variations that make sense for your business. 
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>
            <div className="box">
              <img src={fIcon2} alt="" />
              <h3>Set up a blog</h3>
              <p>
              Blogging can be an incredible way to rank for keywords and engage your website's users. After all, every blog post is a new web page and an additional opportunity to rank in SERPs. If your business does not already have a blog, consider creating one.
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>
            <div className="box">
              <img src={fIcon3} alt="" />
              <h3> Stay up-to-date on SEO news </h3>
              <p>
              Just like marketing, the search engine landscape is ever-evolving. Staying on top of current trends and best practices is an important strategy, and there are multiple online resources that can help you do so. 
              </p>
              <a href="#" className="btnACSS">
                read more
              </a>
            </div>
          </div>
        </section>

        <section className="aboutACSS sectionCSS" id="aboutACSS">
          <h1 className="headingACSS"> Create A Strategy That Supports Your Business Goals </h1>

          <div className="column">
            <div className="image">
              <img src={AboutImg} alt="" />
            </div>

            <div className="content">
              <h3>Secret Sauce of Great SEO </h3>
              <p>
              Ranking in search pages can be difficult. While it may seem enticing to create content that is centered around high-traffic keywords, that strategy may not help you meet your business goals.
              </p>
              <p>
              Instead, opt to create an SEO strategy that helps you address your individual business needs, like increasing customer acquisition, for greater marketing success.
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

export default SeoManagement;
