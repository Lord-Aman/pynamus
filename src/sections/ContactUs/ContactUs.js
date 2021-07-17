import React, { Component } from "react";
import "./ContactUs.css";

class ContactUs extends Component {
  render() {
    return (
      <body>
        <header class="header">
          <a href="#" class="logo">
            <i class="fas fa-magic"></i>Rawe.
          </a>

          <div class="fas fa-bars"></div>

          <nav class="navbar">
            <ul>
              <li>
                <a href="#home">home</a>
              </li>
              <li>
                <a href="#about">about</a>
              </li>
              <li>
                <a href="#service">services</a>
              </li>
              <li>
                <a href="#team">team</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </nav>
        </header>

        <section id="home" class="home">
          <h1 class="banner">Social Media development & services</h1>
          <h3 class="slogan">
            you have a vision. we have a team to get you there
          </h3>
          <a href="#">
            <button>get started</button>
          </a>

          <div class="wave wave1"></div>
          <div class="wave wave2"></div>
          <div class="wave wave3"></div>

          <div class="fas fa-cog nut1"></div>
          <div class="fas fa-cog nut2"></div>
        </section>

        <section id="about" class="about">
          <h1 class="heading">About Us</h1>

          <div class="row">
            <div class="content">
              <h3>We build contemt that build your business</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                amet iure deserunt doloremque voluptate distinctio rerum! Quas
                sunt inventore illum facere minus voluptas fugit, magni quidem
                cumque! Animi, illo magni.
              </p>
              <a href="#">
                <button class="btn">read more</button>
              </a>
            </div>

            <div class="image">
              <img src="images/uranus.png" alt="" />
            </div>
          </div>
        </section>

        <section id="service" class="service">
          <h1 class="heading">our services</h1>

          <div class="row">
            <div class="image">
              <img src="images/img1.svg" alt="" />
            </div>
            <div class="content">
              <h3>website development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                voluptatem, tempore hic deserunt vel temporibus aperiam
                recusandae ratione, obcaecati at qui accusamus enim, laudantium
                eveniet. Inventore voluptas nemo placeat. Voluptas.
              </p>
              <a href="#">
                <button class="btn">read more</button>
              </a>
            </div>
          </div>

          <div class="row">
            <div class="content">
              <h3>mobile freindly</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                voluptatem, tempore hic deserunt vel temporibus aperiam
                recusandae ratione, obcaecati at qui accusamus enim, laudantium
                eveniet. Inventore voluptas nemo placeat. Voluptas.
              </p>
              <a href="#">
                <button class="btn">read more</button>
              </a>
            </div>
            <div class="image">
              <img src="images/img2.svg" alt="" />
            </div>
          </div>

          <div class="row">
            <div class="image">
              <img src="images/img3.svg" alt="" />
            </div>
            <div class="content">
              <h3>responsive design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                voluptatem, tempore hic deserunt vel temporibus aperiam
                recusandae ratione, obcaecati at qui accusamus enim, laudantium
                eveniet. Inventore voluptas nemo placeat. Voluptas.
              </p>
              <a href="#">
                <button class="btn">read more</button>
              </a>
            </div>
          </div>

          <div class="row">
            <div class="content">
              <h3>web hosting</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                voluptatem, tempore hic deserunt vel temporibus aperiam
                recusandae ratione, obcaecati at qui accusamus enim, laudantium
                eveniet. Inventore voluptas nemo placeat. Voluptas.
              </p>
              <a href="#">
                <button class="btn">read more</button>
              </a>
            </div>
            <div class="image">
              <img src="images/img4.svg" alt="" />
            </div>
          </div>

          <div class="row">
            <div class="image">
              <img src="images/img5.svg" alt="" />
            </div>
            <div class="content">
              <h3>seo freindly</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                voluptatem, tempore hic deserunt vel temporibus aperiam
                recusandae ratione, obcaecati at qui accusamus enim, laudantium
                eveniet. Inventore voluptas nemo placeat. Voluptas.
              </p>
              <a href="#">
                <button class="btn">read more</button>
              </a>
            </div>
          </div>

          <div class="row">
            <div class="content">
              <h3>graphic design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                voluptatem, tempore hic deserunt vel temporibus aperiam
                recusandae ratione, obcaecati at qui accusamus enim, laudantium
                eveniet. Inventore voluptas nemo placeat. Voluptas.
              </p>
              <a href="#">
                <button class="btn">read more</button>
              </a>
            </div>
            <div class="image">
              <img src="images/img6.svg" alt="" />
            </div>
          </div>
        </section>

        <section id="team" class="team">
          <h1 class="heading">our team</h1>

          <div class="row">
            <div class="card">
              <div class="image">
                <img src="images/pic1.png" alt="" />
              </div>
              <div class="info">
                <h3>someone's name</h3>
                <span>web designer</span>
                <div class="icons">
                  <a href="#" class="fab fa-facebook-f"></a>
                  <a href="#" class="fab fa-twitter"></a>
                  <a href="#" class="fab fa-instagram"></a>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="image">
                <img src="images/pic2.png" alt="" />
              </div>
              <div class="info">
                <h3>someone's name</h3>
                <span>web designer</span>
                <div class="icons">
                  <a href="#" class="fab fa-facebook-f"></a>
                  <a href="#" class="fab fa-twitter"></a>
                  <a href="#" class="fab fa-instagram"></a>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="image">
                <img src="images/pic3.png" alt="" />
              </div>
              <div class="info">
                <h3>someone's name</h3>
                <span>web designer</span>
                <div class="icons">
                  <a href="#" class="fab fa-facebook-f"></a>
                  <a href="#" class="fab fa-twitter"></a>
                  <a href="#" class="fab fa-instagram"></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" class="contact">
          <h1 class="heading">contact us</h1>

          <div class="row">
            <div class="image">
              <img src="images/contact-image.svg" alt="" />
            </div>

            <div class="form-container">
              <form action="">
                <div class="inputBox">
                  <input type="text" placeholder="first name" />
                  <input type="text" placeholder="last name" />
                </div>

                <input type="email" placeholder="email" />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="message"
                ></textarea>
                <input type="submit" value="send" />
              </form>
            </div>
          </div>
        </section>

        <section id="faq" class="faq">
          <h1 class="heading">FAQ</h1>

          <div class="row">
            <div class="image">
              <img src="images/faq-image.svg" alt="" />
            </div>

            <div class="accordion-container">
              <div class="accordion">
                <div class="accordion-header">
                  <span>+</span>
                  <h3>How much will it cost?</h3>
                </div>
                <div class="accordion-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quasi atque possimus ipsum quae error ullam reiciendis in
                    iste maiores nulla. Impedit nam praesentium omnis cupiditate
                    excepturi natus magnam sunt deleniti!
                  </p>
                </div>
              </div>

              <div class="accordion">
                <div class="accordion-header">
                  <span>+</span>
                  <h3>How To update website?</h3>
                </div>
                <div class="accordion-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quasi atque possimus ipsum quae error ullam reiciendis in
                    iste maiores nulla. Impedit nam praesentium omnis cupiditate
                    excepturi natus magnam sunt deleniti!
                  </p>
                </div>
              </div>

              <div class="accordion">
                <div class="accordion-header">
                  <span>+</span>
                  <h3>is domain provided free?</h3>
                </div>
                <div class="accordion-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quasi atque possimus ipsum quae error ullam reiciendis in
                    iste maiores nulla. Impedit nam praesentium omnis cupiditate
                    excepturi natus magnam sunt deleniti!
                  </p>
                </div>
              </div>

              <div class="accordion">
                <div class="accordion-header">
                  <span>+</span>
                  <h3>how long it takes to design?</h3>
                </div>
                <div class="accordion-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quasi atque possimus ipsum quae error ullam reiciendis in
                    iste maiores nulla. Impedit nam praesentium omnis cupiditate
                    excepturi natus magnam sunt deleniti!
                  </p>
                </div>
              </div>

              <div class="accordion">
                <div class="accordion-header">
                  <span>+</span>
                  <h3>is it seo freindly?</h3>
                </div>
                <div class="accordion-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quasi atque possimus ipsum quae error ullam reiciendis in
                    iste maiores nulla. Impedit nam praesentium omnis cupiditate
                    excepturi natus magnam sunt deleniti!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="footer">
          <h1>created by mr. web designer | all rights reserved.</h1>

          <div class="icons">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
          </div>
        </section>
      </body>
    );
  }
}

export default ContactUs;
