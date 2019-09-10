import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = ["Influencer", "Endorser"];

class A_Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null
    };
    this._onSelect = this._onSelect.bind(this);
  }

  onClick = () => {
    console.log("clicled");
  };

  _onSelect = option => {
    if (option.value == "Influencer") {
      console.log("go to Influencer");
    } else if (option.value == "Endorser") {
      console.log("go to Endorser");
    }
  };

  render() {
    const registerOption = "Register";
    const loginOption = "Log In";

    return (
      <div style={{ backgroundColor: "white", height: "100%", width: "100%" }}>
        <div style={{ position: "absolute", right: "0vw" }}>
          <img
            src={require("../assets/images/1x/back-home@1X.png")}
            style={{ height: "110vh", width: "80vw" }}
          />
          <div
            style={{
              position: "absolute",
              top: "0vh",
              right: "13vw"
            }}
          >
            <Dropdown
              options={options}
              onChange={this._onSelect}
              value={registerOption}
              placeholder="Register"
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "0vh",
              right: "3vw"
            }}
          >
            <Dropdown
              options={options}
              onChange={this._onSelect}
              value={loginOption}
              placeholder="Log In"
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "35vh",
              right: "2vw",
              width: "55vw",
              textAlign: "right"
            }}
          >
            <h1 style={{ color: "white", fontSize: "5vh" }}>
              TEMUKAN VENDOR KREATIF & INFLUENCERS UNTUK BISNISMU
            </h1>
          </div>
          <div
            style={{
              position: "absolute",
              top: "52vh",
              right: "5vw"
            }}
          >
            <button
              onClick={this.onClick}
              style={{
                borderStyle: "solid",
                borderColor: "white",
                borderRadius: "5px",
                backgroundColor: "transparent",
                color: "white"
              }}
            >
              <p style={{ fontSize: `${2 * 0.8}vh` }}>Daftar Sekarang!</p>
            </button>
          </div>

          <div style={{ position: "absolute", bottom: "10vh", right: "0vw" }}>
            <img
              src={require("../assets/images/1x/back-home-planet4@1X.png")}
              style={{ height: "40vh", width: "40vh" }}
            />
          </div>
          <div style={{ position: "absolute", top: "10vh", right: "20vw" }}>
            <img
              src={require("../assets/images/1x/back-home-planet3@1X.png")}
              style={{ height: "17vh", width: "25vh" }}
            />
          </div>
          <div style={{ position: "absolute", top: "45vh", right: "40vw" }}>
            <img
              src={require("../assets/images/1x/back-home-plane2@1X.png")}
              style={{ height: "10vh", width: "10vh" }}
            />
          </div>
        </div>
        <div style={{ position: "absolute", right: "60vw" }}>
          <div style={{ position: "relative", top: "25vh" }}>
            <img
              src={require("../assets/images/1x/astro_1@1X.png")}
              style={{ height: "70vh", width: "70vh" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default A_Page;
