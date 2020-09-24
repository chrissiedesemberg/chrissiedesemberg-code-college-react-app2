import React, { Component } from "react";
import Cocktails from "./Cocktails";
import Github from "./Github";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Connect to API - Cocktails</h1>
        <Cocktails />
      </div>
    );
  }
}
export default App;
