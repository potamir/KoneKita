import React, { Component } from "react";
import ReactPageScroller from "react-page-scroller";
import B_Page from "./components/B_Page";
import A_Page from "./components/A_Page";
import C_Page from "./components/C_Page";
import D_Page from "./components/D_Page";
import E_Page from "./components/E_Page";

class App extends Component {
  render() {
    return (
      <div>
        <ReactPageScroller>
          <A_Page />
          <B_Page />
          <C_Page />
          <D_Page />
          <E_Page />
        </ReactPageScroller>
      </div>
    );
  }
}

export default App;
