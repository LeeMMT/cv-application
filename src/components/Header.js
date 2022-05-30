import React, { Component } from 'react'
import '../styles/header.css'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { activeView, toggleMode, toggleDummyData } = this.props

    return (
      <header>
        <div id="nav-container">
          <h1 id="header-title">CV Creator</h1>
          <nav id="top-nav">
            <button className="toggle-btn">
              Dummy info
              <label className="switch">
                <input type="checkbox" onChange={toggleDummyData} />
                <span className="slider round"></span>
              </label>
            </button>
            <button className={activeView === 'preview' ? 'nav-btn active-mode' : 'nav-btn'} data-mode="preview" onClick={toggleMode}>
              PREVIEW
            </button>
            <button className={activeView === 'edit' ? 'nav-btn active-mode' : 'nav-btn'} data-mode="edit" onClick={toggleMode}>
              EDIT
            </button>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
