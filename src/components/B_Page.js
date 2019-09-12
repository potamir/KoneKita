import React, { Component } from "react";
import styles from "../styles/B_Page.module.css";

class B_Page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.main_div}>
        <div className={styles.inner_div}>
          <div className={styles.back_who_div}>
            <img
              src={require("../assets/images/1x/back-who@1X.png")}
              className={styles.back_who_img}
            />
          </div>
          <div className={styles.back_who_planet1_div}>
            <img
              src={require("../assets/images/1x/back-who-planet1@1X.png")}
              className={styles.back_who_planet1_img}
            />
          </div>
          <div className={styles.text_main_div}>
            <div className={styles.siapa_main_div}>
              <h1 className={styles.siapa_title}>Siapa Kami</h1>
              <p className={styles.siapa_content}>
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
            <div className={styles.siapa_main_div}>
              <h1 className={styles.siapa_title}>Siapa KoneKita</h1>
              <p className={styles.siapa_content}>
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
            <div className={styles.five_points_main_div}>
              <div className={styles.five_points_inner_div}>
                <img
                  src={require("../assets/images/1x/icon-influencer@1X.png")}
                  className={styles.five_points_img}
                />
                <h3 className={styles.five_points_font}>Influencer</h3>
              </div>
              <div className={styles.five_points_inner_div}>
                <img
                  src={require("../assets/images/1x/icon=strategy@1X.png")}
                  className={styles.five_points_img}
                />
                <h3 className={styles.five_points_font}>Strategy</h3>
              </div>
              <div className={styles.five_points_inner_div}>
                <img
                  src={require("../assets/images/1x/icon-creator@1X.png")}
                  className={styles.five_points_img}
                />
                <h3 className={styles.five_points_font}>Creator</h3>
              </div>
              <div className={styles.five_points_inner_div}>
                <img
                  src={require("../assets/images/1x/icon-sponsor@1X.png")}
                  className={styles.five_points_img}
                />
                <h3 className={styles.five_points_font}>Sponsor</h3>
              </div>
              <div className={styles.five_points_inner_div}>
                <img
                  src={require("../assets/images/1x/icon-agency@1X.png")}
                  className={styles.five_points_img}
                />
                <h3 className={styles.five_points_font}>Agent</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default B_Page;
