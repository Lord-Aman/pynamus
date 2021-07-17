import React, { Component } from "react";
import "./login.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

class Login extends Component {
  componentDidMount() {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const containerCSS = document.getElementById("containerCSS");

    signUpButton.addEventListener("click", () => {
      containerCSS.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      containerCSS.classList.remove("right-panel-active");
    });
  }

  render() {
    return (
      <>
        <div className="bodyCSS">
          <div className="containerCSS" id="containerCSS">
            <div className="form-containerCSS sign-up-containerCSS">
              <form className="formCSS" action="#">
                <h1 className="h1CSS">Create Account</h1>
                <div className="social-containerCSS">
                  <a href="#" className="social aCSS">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social aCSS">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                  <a href="#" className="social aCSS">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <span className="spanCSS">
                  or use your email for registration
                </span>
                <input className="inputCSS" type="text" placeholder="Name" />
                <input className="inputCSS" type="email" placeholder="Email" />
                <input
                  className="inputCSS"
                  type="password"
                  placeholder="Password"
                />
                <button>Sign Up</button>
              </form>
            </div>
            <div className="form-containerCSS sign-in-containerCSS">
              <form className="formCSS" action="#">
                <h1 className="h1CSS">Sign in</h1>
                <div className="social-containerCSS">
                  <a href="#" className="social aCSS">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social aCSS">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                  <a href="#" className="social aCSS">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <span className="spanCSS">or use your account</span>
                <input className="inputCSS" type="email" placeholder="Email" />
                <input
                  className="inputCSS"
                  type="password"
                  placeholder="Password"
                />
                <a className="aCSS" href="#">
                  Forgot your password?
                </a>
                <button className="buttonCSS">Sign In</button>
              </form>
            </div>
            <div className="overlay-containerCSS">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1 className="h1CSS">Welcome Back!</h1>
                  <p className="pCSS">
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <button className="ghost" id="signIn">
                    Sign In
                  </button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1 className="h1CSS">Hello, Friend!</h1>
                  <p className="pCSS">
                    Enter your personal details and start journey with us
                  </p>
                  <button className="ghost buttonCSS" id="signUp">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Login;
