import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeView: 'preview',
      quickPreview: false,

      general: {
        fName: '',
        lName: '',
        city: '',
        country: '',
        profTitle: '',
        description: '',
        email: '',
        phoneNumber: '',
      },

      jobs: [],
      qualifications: [],
    }

    this.toggleMode = this.toggleMode.bind(this)
    this.toggleDummyData = this.toggleDummyData.bind(this)
    //this.saveInfo = this.saveInfo.bind(this)
    //this.addJob = this.addJob.bind(this)
    //this.addQual = this.addQual.bind(this)
  }

  toggleMode(e) {
    this.setState({
      activeView: e.target.getAttribute('data-mode'),
    })
  }

  toggleDummyData() {
    if (this.state.quickPreview) {
      this.setState({ quickPreview: false })
    } else {
      this.setState({ quickPreview: true })
    }
  }

  render() {
    return (
      <div>
        <Header activeView={this.state.activeView} toggleMode={this.toggleMode} toggleDummyData={this.toggleDummyData} />
        <Main data={this.state} />
      </div>
    )
  }
}

export default App
