import React, { Component } from "react";
import styles from "../styles/C_Page.module.css";
import image from "./image/page_c_image.json"

class C_Page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.main_div}>
        <div className={styles.inner_div}>
          <div className={styles.text_main_div}>
            <div className={styles.text_inner_div}>
              <h1 className={styles.text_title}>Efisien dan Produktif</h1>
              <p className={styles.text_content}>
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
          <div className={styles.three_points_main_div}>
            <div className={styles.first_point_main_div}>
              <img
                src={image.production}
                className={styles.three_points_image}
              />
              <h3 className={styles.three_points_title}>IN-HOUSE PRODUCTION</h3>
              <p className={styles.three_points_content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                mauris quam, congue a aliquam fringilla, congue non odio. In
                semper maximus pharetra. In scelerisque risus feugiat, auctor
                leo sed, rutrum dui.
              </p>
            </div>
            <div className={styles.second_point_main_div}>
              <img
                src={image.algoritma}
                className={styles.three_points_image}
              />
              <h3 className={styles.three_points_title}>
                ALGORITMA PENCARIAN TERKINI
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
                src={image.realtime}
                className={styles.three_points_image}
              />
              <h3 className={styles.three_points_title}>
                REALTIME PERFORMANCE INDEX
              </h3>
              <p className={styles.three_points_content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                mauris quam, congue a aliquam fringilla, congue non odio. In
                semper maximus pharetra. In scelerisque risus feugiat, auctor
                leo sed, rutrum dui.
              </p>
            </div>
          </div>
          <div className={styles.back_why_planet1_div}>
            <img
              src={image.backwhy}
              className={styles.back_why_planet1_img}
            />
          </div>
          <div className={styles.back_why_planet2_div}>
            <img
              src={image.planet3}
              className={styles.back_why_planet2_img}
            />
          </div>
          <div className={styles.back_why_planet3_div}>
            <img
              src={image.planet1}
              className={styles.back_why_planet3_img}
            />
          </div>
          <div className={styles.back_why_planet4_div}>
            <img
              src={image.planet2}
              className={styles.back_why_planet4_img}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default C_Page;
