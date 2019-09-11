import React, { Component } from "react";

class D_Page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ backgroundColor: "white", height: "100%", width: "100%" }}>
        <div style={{ position: "absolute", width:"100vw", height:"100vh" }}>
          <div
            style={{
              display:"flex",
              flexDirection:"row",
              justifyContent:"center",
              alignItems:"center"
            }}
          >
              <h1 style={{ fontSize: "5vh", textAlign: "center" }}>
                Kenapa Kami Berbeda
              </h1>
          </div>
          <div style={{ position: "absolute", top: "15vh", left: "0vw" }}>
            <img
              src={require("../assets/images/1x/back-pekarya@1X.png")}
              style={{ height: "80vh", width: "30vw" }}
            />
          </div>
          <div style={{ position: "absolute", top: "55vh", left: "71vw" }}>
            <img
              src={require("../assets/images/1x/back-agency@1X.png")}
              style={{ height: "95vh", width: "30vw" }}
            />
          </div>
          <div style={{ position: "absolute", top: "40vh", left: "5vw" }}>
            <img
              src={require("../assets/images/1x/back-pekarya-planet1@1X.png")}
              style={{ height: "151h", width: "15vh" }}
            />
          </div>
          <div style={{ position: "absolute", top: "0vh", left: "-1vw" }}>
            <img
              src={require("../assets/images/1x/back-pekarya-line@1X.png")}
              style={{ height: "200vh", width: "100vw" }}
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
                top: "11vh"
              }}
            >
              <img
                src={require("../assets/images/1x/icon-kurasi@1X.png")}
                style={{ height: "8vw", width: "8vw" }}
              />
              <h3 style={{ textAlign: "center", fontSize: "3vh" }}>KURASI</h3>
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
                top: "18vh"
              }}
            >
              <img
                src={require("../assets/images/1x/icon-kolab@1X.png")}
                style={{ height: "8vw", width: "8vw" }}
              />
              <h3 style={{ textAlign: "center", fontSize: "3vh" }}>
                KALABORASI
              </h3>
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
                top: "25vh"
              }}
            >
              <img
                src={require("../assets/images/1x/icon-integrasi@1X.png")}
                style={{ height: "8vw", width: "8vw" }}
              />
              <h3 style={{ textAlign: "center", fontSize: "3vh" }}>
                INTEGRASI
              </h3>
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

export default D_Page;
