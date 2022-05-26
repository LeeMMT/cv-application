import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMode: "view",
    };

    this.toggleMode = this.toggleMode.bind(this);
  }

  toggleMode(e) {
    this.setState({
      activeMode: e.target.getAttribute("data-mode"),
    });
  }

  render() {
    return (
      <div>
        <Header activeMode={this.state.activeMode} toggleMode={this.toggleMode} />
        <Main activeMode={this.state.activeMode} />
      </div>
    );
  }
}

export default App;
