import React, { Component } from "react";

class C_Page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ backgroundColor: "white", height: "100%", width: "100%" }}>
        <div style={{ position: "absolute" }}>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "60%"
              }}
            >
              <h1 style={{ fontSize: "5vh" }}>Efisien dan Produktif</h1>
              <p style={{ fontSize: "2vh" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                mauris quam, congue a aliquam fringilla, congue non odio. In
                semper maximus pharetra. In scelerisque risus feugiat, auctor
                leo sed, rutrum dui. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia Curae; Donec congue
                convallis magna ut imperdiet. Pellentesque vitae nibh faucibus,
                gravida sem eu, scelerisque metus.
              </p>
            </div>
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
                top: "35vh"
              }}
            >
              <img
                src={require("../assets/images/1x/icon-production@1X.png")}
                style={{ height: "10vw", width: "10vw" }}
              />
              <h3 style={{ textAlign: "center", fontSize: "3vh" }}>
                IN-HOUSE PRODUCTION
              </h3>
              <p style={{ textAlign: "center", fontSize: "2.3vh" }}>
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
                top: "35vh"
              }}
            >
              <img
                src={require("../assets/images/1x/icon-alogaritma@1X.png")}
                style={{ height: "10vw", width: "10vw" }}
              />
              <h3 style={{ textAlign: "center", fontSize: "3vh" }}>
                ALGORITMA PENCARIAN TERKINI
              </h3>
              <p style={{ textAlign: "center", fontSize: "2.3vh" }}>
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
                top: "35vh"
              }}
            >
              <img
                src={require("../assets/images/1x/icon-realtime@1X.png")}
                style={{ height: "10vw", width: "10vw" }}
              />
              <h3 style={{ textAlign: "center", fontSize: "3vh" }}>
                REALTIME PERFORMANCE INDEX
              </h3>
              <p style={{ textAlign: "center", fontSize: "2.3vh" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                mauris quam, congue a aliquam fringilla, congue non odio. In
                semper maximus pharetra. In scelerisque risus feugiat, auctor
                leo sed, rutrum dui.
              </p>
            </div>
          </div>
          <div style={{ position: "absolute", top: "-5vh", left: "10vw" }}>
            <img
              src={require("../assets/images/1x/back-why-planet@1X.png")}
              style={{ height: "130vh", width: "90vw" }}
            />
          </div>
          <div style={{ position: "absolute", top: "5vh", left: "10vw" }}>
            <img
              src={require("../assets/images/1x/back-why-planet3@1X.png")}
              style={{ height: "10vh", width: "15vh" }}
            />
          </div>
          <div style={{ position: "absolute", top: "60vh", right: "-7vw" }}>
            <img
              src={require("../assets/images/1x/back-why-planet4@1X.png")}
              style={{ height: "30vh", width: "30vh" }}
            />
          </div>
          <div style={{ position: "absolute", top: "10vh", right: "0vw" }}>
            <img
              src={require("../assets/images/1x/back-who-planet2@1X.png")}
              style={{ height: "20vh", width: "20vh" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default C_Page;
