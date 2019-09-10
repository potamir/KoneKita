import React, { Component } from "react";

class B_Page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ backgroundColor: "white", height: "100%", width: "100%" }}>
        <div style={{ position: "absolute", left: "0vw" }}>
          <div style={{ position: "absolute", top: "10vh", left: "-2vw" }}>
            <img
              src={require("../assets/images/1x/back-who@1X.png")}
              style={{ height: "150vh", width: "50vh" }}
            />
          </div>
          <div style={{ position: "absolute", top: "45vh", left: "-2vw" }}>
            <img
              src={require("../assets/images/1x/back-who-planet1@1X.png")}
              style={{ height: "20vh", width: "20vh" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              width: "100vw"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "60%"
              }}
            >
              <h1 style={{ fontSize: "5vh" }}>Siapa Kami</h1>
              <p style={{ fontSize: "2vh" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                mauris quam, congue a aliquam fringilla, congue non odio. In
                semper maximus pharetra. In scelerisque risus feugiat, auctor
                leo sed, rutrum dui. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia Curae; Donec congue
                convallis magna ut imperdiet. Pellentesque vitae nibh faucibus,
                gravida sem eu, scelerisque metus. Nunc a nisi suscipit,
                faucibus nibh nec, porttitor ipsum. Phasellus vel lacus quis
                lacus interdum molestie. Vestibulum accumsan augue quis nunc
                luctus, et vestibulum lorem convallis.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "60%"
              }}
            >
              <h1 style={{ fontSize: "5vh" }}>Siapa KoneKita</h1>
              <p style={{ fontSize: "2vh" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                mauris quam, congue a aliquam fringilla, congue non odio. In
                semper maximus pharetra. In scelerisque risus feugiat, auctor
                leo sed, rutrum dui. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia Curae; Donec congue
                convallis magna ut imperdiet. Pellentesque vitae nibh faucibus,
                gravida sem eu, scelerisque metus. Nunc a nisi suscipit,
                faucibus nibh nec, porttitor ipsum. Phasellus vel lacus quis
                lacus interdum molestie. Vestibulum accumsan augue quis nunc
                luctus, et vestibulum lorem convallis.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "60%",
                flex: 1
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <img
                  src={require("../assets/images/1x/icon-influencer@1X.png")}
                  style={{ height: "10vh", width: "10vh" }}
                />
                <h3 style={{ fontSize: "3vh" }}>Influencer</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <img
                  src={require("../assets/images/1x/icon=strategy@1X.png")}
                  style={{ height: "10vh", width: "10vh" }}
                />
                <h3 style={{ fontSize: "3vh" }}>Strategy</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <img
                  src={require("../assets/images/1x/icon-creator@1X.png")}
                  style={{ height: "10vh", width: "10vh" }}
                />
                <h3 style={{ fontSize: "3vh" }}>Creator</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <img
                  src={require("../assets/images/1x/icon-sponsor@1X.png")}
                  style={{ height: "10vh", width: "10vh" }}
                />
                <h3 style={{ fontSize: "3vh" }}>Sponsor</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <img
                  src={require("../assets/images/1x/icon-agency@1X.png")}
                  style={{ height: "10vh", width: "10vh" }}
                />
                <h3 style={{ fontSize: "3vh" }}>Agent</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default B_Page;
