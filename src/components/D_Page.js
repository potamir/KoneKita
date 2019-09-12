import React, { Component } from "react";
import styles from "../styles/D_Page.module.css";

class D_Page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.main_div}>
        <div className={styles.inner_div}>
          <div className={styles.text_main_div}>
            <h1 className={styles.text_title}>Kenapa Kami Berbeda</h1>
          </div>
          <div className={styles.back_pekarya_div}>
            <img
              src={require("../assets/images/1x/back-pekarya@1X.png")}
              className={styles.back_pekarya_img}
            />
          </div>
          <div className={styles.back_agency_div}>
            <img
              src={require("../assets/images/1x/back-agency@1X.png")}
              className={styles.back_agency_img}
            />
          </div>
          <div className={styles.back_pekarya_planet_div}>
            <img
              src={require("../assets/images/1x/back-pekarya-planet1@1X.png")}
              className={styles.back_pekarya_planet_img}
            />
          </div>
          <div className={styles.line_div}>
            <img
              src={require("../assets/images/1x/back-pekarya-line@1X.png")}
              className={styles.line_img}
            />
          </div>
          <div className={styles.three_points_main_div}>
            <div className={styles.first_point_main_div}>
              <img
                src={require("../assets/images/1x/icon-kurasi@1X.png")}
                className={styles.three_points_image}
              />
              <h3 className={styles.three_points_title}>KURASI</h3>
              <p className={styles.three_points_content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                mauris quam, congue a aliquam fringilla, congue non odio. In
                semper maximus pharetra. In scelerisque risus feugiat, auctor
                leo sed, rutrum dui.
              </p>
            </div>
            <div className={styles.second_point_main_div}>
              <img
                src={require("../assets/images/1x/icon-kolab@1X.png")}
                className={styles.three_points_image}
              />
              <h3 className={styles.three_points_title}>
                KALABORASI
              </h3>
              <p className={styles.three_points_content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                mauris quam, congue a aliquam fringilla, congue non odio. In
                semper maximus pharetra. In scelerisque risus feugiat, auctor
                leo sed, rutrum dui.
              </p>
            </div>
            <div className={styles.third_point_main_div}>
              <img
                src={require("../assets/images/1x/icon-integrasi@1X.png")}
                className={styles.three_points_image}
              />
              <h3 className={styles.three_points_title}>
                INTEGRASI
              </h3>
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

export default D_Page;
