import React, { Component } from "react";

class A_Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownContentHover: false
    };
    this.onHoverbtn = this.onHoverbtn.bind(this);
    this.onOutbtn = this.onOutbtn.bind(this);
  }

  onHoverbtn = () => {
    console.log("success");
    this.setState({ dropdownContentHover: true });
  };
  onOutbtn = () => {
    this.setState({ dropdownContentHover: false });
  };

  render() {
    const { selectedOption } = this.state;

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
              top: "35vh",
              right: "2vw",
              width: "55vw",
              textAlign: "right"
            }}
          >
            <h1 style={{ color: "white" }}>
              TEMUKAN VENDOR KREATIF & INFLUENCERS UNTUK BISNISMU
            </h1>
          </div>
          <div
            style={{
              position: "absolute",
              top: "50vh",
              right: "5vw"
            }}
          >
            <button
              style={{
                borderStyle: "solid",
                borderColor: "white",
                borderRadius: "5px",
                backgroundColor: "transparent",
                color: "white"
              }}
            >
              Daftar Sekarang!
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
