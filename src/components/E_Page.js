import React, { Component } from "react";

class E_Page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ backgroundColor: "white", height: "100%", width: "100%" }}>
        <div style={{ position: "absolute", width: "100vw", height: "100vh" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <h1 style={{ fontSize: "5vh", textAlign: "center" }}>
              Semudah Berbelanja Online
            </h1>
          </div>
          <div style={{ position: "absolute", top: "25vh", left: "-5vw" }}>
            <img
              src={require("../assets/images/1x/back-end-planet@1X.png")}
              style={{ height: "80vh", width: "30vw" }}
            />
          </div>
          <div style={{ position: "absolute", top: "60vh", left: "76vw" }}>
            <img
              src={require("../assets/images/1x/Astro_2@1X.png")}
              style={{ height: "60vh", width: "25vw" }}
            />
          </div>
          <div style={{ position: "absolute", top: "15vh", left: "92vw" }}>
            <img
              src={require("../assets/images/1x/back-agency-planet1@1X.png")}
              style={{ height: "30vh", width: "30vh" }}
            />
          </div>
          <div style={{ position: "absolute", top: "65vh", left: "5w" }}>
            <img
              src={require("../assets/images/1x/back-end-planet1@1X.png")}
              style={{ height: "14vh", width: "20vh" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 5,
                width: "19vw",
                position: "absolute",
                left: "18vw",
                top: "22vh"
              }}
            >
              <img
                src={require("../assets/images/1x/icon-temukan@1X.png")}
                style={{ height: "8vw", width: "8vw" }}
              />
              <h3 style={{ textAlign: "center", fontSize: "3vh" }}>TEMUKAN</h3>
              <p style={{ textAlign: "center", fontSize: "2vh" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                mauris quam, congue a aliquam fringilla, congue non odio. In
                semper maximus pharetra. In scelerisque risus feugiat, auctor
                leo sed, rutrum dui.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 5,
                width: "19vw",
                position: "absolute",
                left: "42vw",
                top: "28vh"
              }}
            >
              <img
                src={require("../assets/images/1x/icon-ukur@1X.png")}
                style={{ height: "8vw", width: "8vw" }}
              />
              <h3 style={{ textAlign: "center", fontSize: "3vh" }}>UKUR</h3>
              <p style={{ textAlign: "center", fontSize: "2vh" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                mauris quam, congue a aliquam fringilla, congue non odio. In
                semper maximus pharetra. In scelerisque risus feugiat, auctor
                leo sed, rutrum dui.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 5,
                width: "19vw",
                position: "absolute",
                left: "66vw",
                top: "31vh"
              }}
            >
              <img
                src={require("../assets/images/1x/icon-bayar@1X.png")}
                style={{ height: "8vw", width: "8vw" }}
              />
              <h3 style={{ textAlign: "center", fontSize: "3vh" }}>BAYAR</h3>
              <p style={{ textAlign: "center", fontSize: "2vh" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                mauris quam, congue a aliquam fringilla, congue non odio. In
                semper maximus pharetra. In scelerisque risus feugiat, auctor
                leo sed, rutrum dui.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default E_Page;
