import React, { Component } from "react";
import ReactPageScroller from "react-page-scroller";
import B_Page from "./components/landscape/B_Page";
import A_Page from "./components/landscape/A_Page";
import C_Page from "./components/landscape/C_Page";
import D_Page from "./components/landscape/D_Page";
import E_Page from "./components/landscape/E_Page";
import Potrait from "./components/potrait/Potrait";

class App extends Component {
  render() {
    return (
      <div>
        {window.innerWidth > window.innerHeight ? (
          <ReactPageScroller>
            <A_Page />
            <B_Page />
            <C_Page />
            <D_Page />
            <E_Page />
          </ReactPageScroller>
        ) : (
          <Potrait />
        )}
      </div>
    );
  }
}

export default App;
