import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "glightbox/dist/css/glightbox.css";
import "remixicon/fonts/remixicon.css";
import "./services.css";
import feature3 from "assets/images/features-3.png";
import { Link } from "../../components/link";

const services = () => {
  return (
    <>
      <section id="features" className="features">
        <div className="container">
          <div className="row feature-icons">
            <h3>Our Team Associates, We Nailed These</h3>

            <div className="row">
              <div className="col-xl-4 text-center">
                <img src={feature3} className="img-fluid p-4" alt="" />
              </div>

              <div className="col-xl-8 d-flex content">
                <div className="row align-self-center gy-4">
                  <div className="col-md-6 icon-box">
                    <i className="ri-line-chart-line"></i>
                    <div>
                      <h4>Web Development</h4>
                      <p>
                        Improve your business further;
                        <br />
                        We create compelling sales and marketing strategies like
                        no other.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 icon-box">
                    <i className="ri-stack-line"></i>
                    <div>
                      <h4>App Development</h4>
                      <p>
                        To engage with customers everywhere;
                        <br />
                        We create user-friendly and easy to access apps to
                        connect from anywhere.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 icon-box">
                    <i className="ri-brush-4-line"></i>
                    <div>
                      <h4>Social Media Management</h4>
                      <p>
                        Brand loyalty do not happen magically;
                        <br />
                        We help surge popularity and drive campaigns
                        successfully.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 icon-box">
                    <i className="ri-magic-line"></i>
                    <div>
                      <h4>Graphics Designing</h4>
                      <p>
                        Key to build professional brand;
                        <br />
                        We produce strong visual foundation to meet demand.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 icon-box">
                    <i className="ri-command-line"></i>
                    <div>
                      <h4>Logo Designing</h4>
                      <p>
                        Grab the attention;
                        <br />
                        We help create strong impression.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 icon-box">
                    <i className="ri-radar-line"></i>
                    <div>
                      <h4>Video Production</h4>
                      <p>
                        Video involves innovation;
                        <br />
                        We help you build a visual foundation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Services</h2>
            <p>
              Happy to help you <br />
              ~It’s Not What You Do, It’s How You Do It~
            </p>
          </header>

          <div className="row gy-4">
            <div className="col-lg-4 col-md-6">
              <div className="service-box blue">
                <i className="ri-discuss-line icon"></i>
                <h3>Web Development</h3>
                <p>
                  Turn your content dialogue from “Could you please hear me?” to
                  “Thanks for your attention”.
                  <br />~ “Get closer than ever to your customers. So close that
                  you tell them what they need well before they realize it
                  themselves.” – Steve Jobs, Apple
                </p>
                <a href="/webdev" className="read-more">
                  <span>
                    <Link
                      path="/webdev"
                      label="Read More"
                      className="links"
                      style={{
                        color: "#6dcdde",
                      }}
                    />
                  </span>{" "}
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-box orange">
                <i className="ri-discuss-line icon"></i>
                <h3>App Development</h3>
                <p>
                  You are one TAPP away from your Dream Business Growth. <br />
                  “An app is not all about technology, it is a dream towards
                  future” ― Hecate Strategy.
                </p>
                <a href="#" className="read-more">
                  <span>
                    {" "}
                    <Link
                      path="/appdev"
                      label="Read More"
                      className="links"
                      style={{
                        color: "#e0a769",
                      }}
                    />
                  </span>{" "}
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos-delay="400">
              <div className="service-box green">
                <i className="ri-discuss-line icon"></i>
                <h3>Social Media Management</h3>
                <p>
                  It’s not the product you sell, Its all about the stories you
                  tell!
                  <br />
                  “Engage, Enlighten, Encourage and especially…just be yourself!
                  Social media is a community effort, everyone is an asset.” –
                  Susan Cooper
                </p>
                <a href="#" className="read-more">
                  <span>
                    {" "}
                    <Link
                      path="/socialmedia"
                      label="Read More"
                      className="links"
                      style={{
                        color: "#48f088",
                      }}
                    />
                  </span>{" "}
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos-delay="500">
              <div className="service-box red">
                <i className="ri-discuss-line icon"></i>
                <h3>Graphic Designing</h3>
                <p>
                  Design to a website is cheese to your pizza. There’s no pure
                  rhyme for pizza, just as there’s no substitute for design.{" "}
                  <br />
                  “Content precedes design. Design in the absence of content is
                  not design, it’s decoration.” - Jeffrey Zeldman
                </p>
                <a href="#" className="read-more">
                  <span>
                    {" "}
                    <Link
                      path="/graphicdesign"
                      label="Read More"
                      className="links"
                      style={{
                        color: "#e32c0b",
                      }}
                    />
                  </span>{" "}
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos-delay="600">
              <div className="service-box purple">
                <i className="ri-discuss-line icon"></i>
                <h3>Logo Designing</h3>
                <p>
                  Habit and Logo are synonyms! Habit displays your personality
                  as Logo defines your identity. <br />
                  We help create strong impression “Design is the silent
                  ambassador of your brand.” —Paul Rand
                </p>
                <a href="#" className="read-more">
                  <span>
                    {" "}
                    <Link
                      path="/graphicdesign"
                      label="Read More"
                      className="links"
                      style={{
                        color: "#a338f5",
                      }}
                    />
                  </span>{" "}
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos-delay="700">
              <div className="service-box pink">
                <i className="ri-discuss-line icon"></i>
                <h3>Video Production</h3>
                <p>
                  Though you couldn’t express your feelings, but your video
                  would. It’s no secret that a video turns a visitor into viable
                  customer.
                  <br />
                  “The play button is the most compelling call-to-action on the
                  web.” - Michael Litt
                </p>
                <a href="#" className="read-more">
                  <span>
                    {" "}
                    <Link
                      path="/videoprod"
                      label="Read More"
                      className="links"
                      style={{
                        color: "#e30b7e",
                      }}
                    />
                  </span>{" "}
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default services;
