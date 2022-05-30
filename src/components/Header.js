import React, { Component } from 'react'
import '../styles/header.css'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { activeMode, toggleMode, togglePreview } = this.props

    return (
      <header>
        <div id="nav-container">
          <h1 id="header-title">CV Creator</h1>
          <nav id="top-nav">
            <button className="toggle-btn">
              Dummy info
              <label className="switch">
                <input type="checkbox" onChange={togglePreview} />
                <span className="slider round"></span>
              </label>
            </button>
            <button className={activeMode === 'view' ? 'nav-btn active-mode' : 'nav-btn'} data-mode="view" onClick={toggleMode}>
              PREVIEW
            </button>
            <button className={activeMode === 'build' ? 'nav-btn active-mode' : 'nav-btn'} data-mode="build" onClick={toggleMode}>
              EDIT
            </button>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
