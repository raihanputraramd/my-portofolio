import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Profile from "../assets/img/profile.jpg";

class Landingpage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={Profile} alt="Profile" />
            <div className="banner-text">
              <h1>Web Developer</h1>
              <hr />
              <p>HTML/CSS | Bootstrap | Javascript | React.js | Java Android</p>
              <div className="social">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/raihan-putra-ramadhan-9682b31a0/"
                >
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/raihanputraramd"
                >
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landingpage;
