import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeMode: 'view',
      previewMode: false,
    }
    this.toggleMode = this.toggleMode.bind(this)
    this.togglePreview = this.togglePreview.bind(this)
  }

  toggleMode(e) {
    this.setState({
      activeMode: e.target.getAttribute('data-mode'),
    })
  }

  togglePreview() {
    if (this.state.previewMode) {
      this.setState({ previewMode: false })
    } else {
      this.setState({ previewMode: true })
    }
  }

  render() {
    return (
      <div>
        <Header activeMode={this.state.activeMode} toggleMode={this.toggleMode} togglePreview={this.togglePreview} />
        <Main activeMode={this.state.activeMode} previewMode={this.state.previewMode} />
      </div>
    )
  }
}

export default App
