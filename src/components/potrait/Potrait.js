import React, { Component } from "react";
import "react-dropdown/style.css";
import styles1 from "../../styles/potrait/A_Page.module.css";
import styles2 from "../../styles/potrait/B_Page.module.css";
import styles3 from "../../styles/potrait/C_Page.module.css";
import styles4 from "../../styles/potrait/D_Page.module.css";
import styles5 from "../../styles/potrait/E_Page.module.css";
import image4 from "./image/page_e_image.json";
import image3 from "./image/page_d_image.json";
import image2 from "./image/page_c_image.json";
import image1 from "./image/page_b_image.json";

class Potrait extends Component {
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
      <div>
        <div className={styles1.main_div}>
          <div className={styles1.inner_div}>
            <div className={styles1.sign_button_div}>
              <div className={styles1.register_div}>
                <div className={styles1.dropdown}>
                  <button className={styles1.dropbtn}>Register</button>
                  <div className={styles1.dropdown_content}>
                    <a href={"http://konekita.com/mvp/register/influencer"}>
                      Influencer
                    </a>
                    <a href={"http://konekita.com/mvp/register/endorser"}>
                      Endorser
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles1.login_div}>
                <div className={styles1.dropdown}>
                  <button className={styles1.dropbtn}>Log In</button>
                  <div className={styles1.dropdown_content}>
                    <a href={"http://konekita.com/mvp/login/influencer"}>
                      Influencer
                    </a>
                    <a href={"http://konekita.com/mvp/login/endorser"}>
                      Endorser
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles1.title_div}>
              <h1 className={styles1.title_font}>
                TEMUKAN VENDOR KREATIF & INFLUENCERS UNTUK BISNISMU
              </h1>
            </div>
            <div className={styles1.daftar_div}>
              <button onClick={this.onClick} className={styles1.daftar_btn}>
                <p className={styles1.daftar_font}>
                  <a
                    className={styles1.daftar_btn_a}
                    href={"http://konekita.com/mvp/register/endorser"}
                  >
                    Daftar Sekarang!
                  </a>
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className={styles2.main_div}>
          <div className={styles2.inner_div}>
            <div className={styles2.text_main_div}>
              <div className={styles2.siapa_main_div}>
                <h1 className={styles2.siapa_title}>Siapa Kami</h1>
                <p className={styles2.siapa_content}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam mauris quam, congue a aliquam fringilla, congue non
                  odio. In semper maximus pharetra. In scelerisque risus
                  feugiat, auctor leo sed, rutrum dui. Vestibulum ante ipsum
                  primis in faucibus orci luctus et ultrices posuere cubilia
                  Curae; Donec congue convallis magna ut imperdiet. Pellentesque
                  vitae nibh faucibus, gravida sem eu, scelerisque metus. Nunc a
                  nisi suscipit, faucibus nibh nec, porttitor ipsum. Phasellus
                  vel lacus quis lacus interdum molestie. Vestibulum accumsan
                  augue quis nunc luctus, et vestibulum lorem convallis.
                </p>
              </div>
              <div className={styles2.siapa_main_div}>
                <h1 className={styles2.siapa_title}>Siapa KoneKita</h1>
                <p className={styles2.siapa_content}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam mauris quam, congue a aliquam fringilla, congue non
                  odio. In semper maximus pharetra. In scelerisque risus
                  feugiat, auctor leo sed, rutrum dui. Vestibulum ante ipsum
                  primis in faucibus orci luctus et ultrices posuere cubilia
                  Curae; Donec congue convallis magna ut imperdiet. Pellentesque
                  vitae nibh faucibus, gravida sem eu, scelerisque metus. Nunc a
                  nisi suscipit, faucibus nibh nec, porttitor ipsum. Phasellus
                  vel lacus quis lacus interdum molestie. Vestibulum accumsan
                  augue quis nunc luctus, et vestibulum lorem convallis.
                </p>
              </div>
              <div className={styles2.five_points_main_div}>
                <div className={styles2.five_points_inner_div}>
                  <img
                    src={image1.influencer}
                    className={styles2.five_points_img}
                  />
                  <h3 className={styles2.five_points_font}>Influencer</h3>
                </div>
                <div className={styles2.five_points_inner_div}>
                  <img
                    src={image1.strategy}
                    className={styles2.five_points_img}
                  />
                  <h3 className={styles2.five_points_font}>Strategy</h3>
                </div>
                <div className={styles2.five_points_inner_div}>
                  <img
                    src={image1.creator}
                    className={styles2.five_points_img}
                  />
                  <h3 className={styles2.five_points_font}>Creator</h3>
                </div>
                <div className={styles2.five_points_inner_div}>
                  <img
                    src={image1.sponsor}
                    className={styles2.five_points_img}
                  />
                  <h3 className={styles2.five_points_font}>Sponsor</h3>
                </div>
                <div className={styles2.five_points_inner_div}>
                  <img
                    src={image1.agency}
                    className={styles2.five_points_img}
                  />
                  <h3 className={styles2.five_points_font}>Agent</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles3.main_div}>
          <div className={styles3.inner_div}>
            <div className={styles3.text_main_div}>
              <div className={styles3.text_inner_div}>
                <h1 className={styles3.text_title}>Efisien dan Produktif</h1>
                <p className={styles3.text_content}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam mauris quam, congue a aliquam fringilla, congue non
                  odio. In semper maximus pharetra. In scelerisque risus
                  feugiat, auctor leo sed, rutrum dui. Vestibulum ante ipsum
                  primis in faucibus orci luctus et ultrices posuere cubilia
                  Curae; Donec congue convallis magna ut imperdiet. Pellentesque
                  vitae nibh faucibus, gravida sem eu, scelerisque metus.
                </p>
              </div>
            </div>
            <div className={styles3.three_points_main_div}>
              <div className={styles3.three_points_inner_div}>
                <img
                  src={image2.production}
                  className={styles3.three_points_image}
                />
                <h3 className={styles3.three_points_title}>
                  IN-HOUSE PRODUCTION
                </h3>
                <p className={styles3.three_points_content}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam mauris quam, congue a aliquam fringilla, congue non
                  odio. In semper maximus pharetra. In scelerisque risus
                  feugiat, auctor leo sed, rutrum dui.
                </p>
              </div>
              <div className={styles3.three_points_inner_div}>
                <img
                  src={image2.algoritma}
                  className={styles3.three_points_image}
                />
                <h3 className={styles3.three_points_title}>
                  ALGORITMA PENCARIAN TERKINI
                </h3>
                <p className={styles3.three_points_content}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam mauris quam, congue a aliquam fringilla, congue non
                  odio. In semper maximus pharetra. In scelerisque risus
                  feugiat, auctor leo sed, rutrum dui.
                </p>
              </div>
              <div className={styles3.three_points_inner_div}>
                <img
                  src={image2.realtime}
                  className={styles3.three_points_image}
                />
                <h3 className={styles3.three_points_title}>
                  REALTIME PERFORMANCE INDEX
                </h3>
                <p className={styles3.three_points_content}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam mauris quam, congue a aliquam fringilla, congue non
                  odio. In semper maximus pharetra. In scelerisque risus
                  feugiat, auctor leo sed, rutrum dui.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles4.main_div}>
          <div className={styles4.inner_div}>
            <div className={styles4.text_main_div}>
              <h1 className={styles4.text_title}>Kenapa Kami Berbeda</h1>
            </div>
            <div className={styles4.three_points_main_div}>
              <div className={styles4.three_points_inner_div}>
                <img
                  src={image3.kurasi}
                  className={styles4.three_points_image}
                />
                <h3 className={styles4.three_points_title}>KURASI</h3>
                <p className={styles4.three_points_content}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam mauris quam, congue a aliquam fringilla, congue non
                  odio. In semper maximus pharetra. In scelerisque risus
                  feugiat, auctor leo sed, rutrum dui.
                </p>
              </div>
              <div className={styles4.three_points_inner_div}>
                <img
                  src={image3.kolab}
                  className={styles4.three_points_image}
                />
                <h3 className={styles4.three_points_title}>KALABORASI</h3>
                <p className={styles4.three_points_content}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam mauris quam, congue a aliquam fringilla, congue non
                  odio. In semper maximus pharetra. In scelerisque risus
                  feugiat, auctor leo sed, rutrum dui.
                </p>
              </div>
              <div className={styles4.three_points_inner_div}>
                <img
                  src={image3.integrasi}
                  className={styles4.three_points_image}
                />
                <h3 className={styles4.three_points_title}>INTEGRASI</h3>
                <p className={styles4.three_points_content}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam mauris quam, congue a aliquam fringilla, congue non
                  odio. In semper maximus pharetra. In scelerisque risus
                  feugiat, auctor leo sed, rutrum dui.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles5.main_div}>
          <div className={styles5.inner_div}>
            <div className={styles5.text_main_div}>
              <h1 className={styles5.text_title}>Semudah Berbelanja Online</h1>
            </div>
            <div className={styles5.three_points_main_div}>
              <div className={styles5.three_points_inner_div}>
                <img
                  src={image4.temukan}
                  className={styles5.three_points_image}
                />
                <h3 className={styles5.three_points_title}>TEMUKAN</h3>
                <p className={styles5.three_points_content}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam mauris quam, congue a aliquam fringilla, congue non
                  odio. In semper maximus pharetra. In scelerisque risus
                  feugiat, auctor leo sed, rutrum dui.
                </p>
              </div>
              <div className={styles5.three_points_inner_div}>
                <img src={image4.ukur} className={styles5.three_points_image} />
                <h3 className={styles5.three_points_title}>UKUR</h3>
                <p className={styles5.three_points_content}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam mauris quam, congue a aliquam fringilla, congue non
                  odio. In semper maximus pharetra. In scelerisque risus
                  feugiat, auctor leo sed, rutrum dui.
                </p>
              </div>
              <div className={styles5.three_points_inner_div}>
                <img
                  src={image4.bayar}
                  className={styles5.three_points_image}
                />
                <h3 className={styles5.three_points_title}>BAYAR</h3>
                <p className={styles5.three_points_content}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam mauris quam, congue a aliquam fringilla, congue non
                  odio. In semper maximus pharetra. In scelerisque risus
                  feugiat, auctor leo sed, rutrum dui.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Potrait;
