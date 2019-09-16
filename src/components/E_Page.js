import React, { Component } from "react";
import styles from "../styles/E_Page.module.css";

class E_Page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.main_div}>
        <div className={styles.inner_div}>
          <div className={styles.text_main_div}>
            <h1 className={styles.text_title}>Semudah Berbelanja Online</h1>
          </div>
          <div className={styles.back_end_planet_div}>
            <img
              src={require("../assets/images/1x/back-end-planet@1X.png")}
              className={styles.back_end_planet_img}
            />
          </div>
          <div className={styles.astro_div}>
            <img
              src={require("../assets/images/1x/Astro_2@1X.png")}
              className={styles.astro_img}
            />
          </div>
          <div className={styles.back_agency_planet_div}>
            <img
              src={require("../assets/images/1x/back-agency-planet1@1X.png")}
              className={styles.back_agency_planet_img}
            />
          </div>
          <div className={styles.back_end_planet1_div}>
            <img
              src={require("../assets/images/1x/back-end-planet1@1X.png")}
              className={styles.back_end_planet1_img}
            />
          </div>
          <div className={styles.three_points_main_div}>
            <div className={styles.first_point_main_div}>
              <img
                src={require("../assets/images/1x/icon-temukan@1X.png")}
                className={styles.three_points_image}
              />
              <h3 className={styles.three_points_title}>TEMUKAN</h3>
              <p className={styles.three_points_content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                mauris quam, congue a aliquam fringilla, congue non odio. In
                semper maximus pharetra. In scelerisque risus feugiat, auctor
                leo sed, rutrum dui.
              </p>
            </div>
            <div className={styles.second_point_main_div}>
              <img
                src={require("../assets/images/1x/icon-ukur@1X.png")}
                className={styles.three_points_image}
              />
              <h3 className={styles.three_points_title}>UKUR</h3>
              <p className={styles.three_points_content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                mauris quam, congue a aliquam fringilla, congue non odio. In
                semper maximus pharetra. In scelerisque risus feugiat, auctor
                leo sed, rutrum dui.
              </p>
            </div>
            <div className={styles.third_point_main_div}>
              <img
                src={require("../assets/images/1x/icon-bayar@1X.png")}
                className={styles.three_points_image}
              />
              <h3 className={styles.three_points_title}>BAYAR</h3>
              <p className={styles.three_points_content}>
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
