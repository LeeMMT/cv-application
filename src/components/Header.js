import React, { Component } from "react";
import "../styles/header.css";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { activeMode, toggleMode } = this.props;

    return (
      <header>
        <div id="nav-container">
          <h1 id="header-title">CV Creator</h1>
          <nav id="top-nav">
            <button className={activeMode === "build" ? "nav-btn active-mode" : "nav-btn"} data-mode="build" onClick={toggleMode}>
              Build Mode
            </button>
            <button className={activeMode === "view" ? "nav-btn active-mode" : "nav-btn"} data-mode="view" onClick={toggleMode}>
              View Mode
            </button>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
