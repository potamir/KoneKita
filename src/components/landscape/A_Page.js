import React, { Component } from "react";
import "react-dropdown/style.css";
import styles from "../../styles/landscape/A_Page.module.css";
import image from "./image/page_a_image.json";

class A_Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      windows: true
    };
  }

  onClick = () => {
    console.log("clicled");
  };

  render() {
    return (
      <div className={styles.main_div}>
        <div className={styles.inner_div}>
          <img src={image.backhome} className={styles.back_home_img} />
          <div className={styles.register_div}>
            <div className={styles.dropdown}>
              <button className={styles.dropbtn}>Register</button>
              <div className={styles.dropdown_content}>
                <a href={"http://konekita.com/mvp/register/influencer"}>
                  Influencer
                </a>
                <a href={"http://konekita.com/mvp/register/endorser"}>
                  Endorser
                </a>
              </div>
            </div>
          </div>
          <div className={styles.login_div}>
            <div className={styles.dropdown}>
              <button className={styles.dropbtn}>Log In</button>
              <div className={styles.dropdown_content}>
                <a href={"http://konekita.com/mvp/login/influencer"}>
                  Influencer
                </a>
                <a href={"http://konekita.com/mvp/login/endorser"}>Endorser</a>
              </div>
            </div>
          </div>
          <div className={styles.title_div}>
            <h1 className={styles.title_font}>
              TEMUKAN VENDOR KREATIF & INFLUENCERS UNTUK BISNISMU
            </h1>
          </div>
          <div className={styles.daftar_div}>
            <button onClick={this.onClick} className={styles.daftar_btn}>
              <p className={styles.daftar_font}>
                <a
                  className={styles.daftar_btn_a}
                  href={"http://konekita.com/mvp/register/endorser"}
                >
                  Daftar Sekarang!
                </a>
              </p>
            </button>
          </div>

          <div className={styles.back_home_planet4_div}>
            <img src={image.planet4} className={styles.back_home_planet4_img} />
          </div>
          <div className={styles.back_home_planet3_div}>
            <img src={image.planet3} className={styles.back_home_planet3_img} />
          </div>
          <div className={styles.back_home_planet2_div}>
            <img src={image.planet2} className={styles.back_home_planet2_img} />
          </div>
        </div>
        <div className={styles.back_home_astro_main_div}>
          <div className={styles.back_home_astro_inner_div}>
            <img src={image.astro1} className={styles.back_home_astro_img} />
          </div>
        </div>
      </div>
    );
  }
}

export default A_Page;
