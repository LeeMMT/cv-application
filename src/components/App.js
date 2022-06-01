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
        bio: '',
        email: '',
        phoneNumber: '',
      },

      jobs: [],
      qualifications: [],
    }

    this.toggleMode = this.toggleMode.bind(this)
    this.toggleDummyData = this.toggleDummyData.bind(this)
    this.saveInfo = this.saveInfo.bind(this)
    this.saveNewEntry = this.saveNewEntry.bind(this)
  }

  componentDidUpdate() {
    console.log('App updated')
    console.log(this.state)
  }

  saveInfo(data) {
    this.setState({ general: data })
  }

  saveNewEntry(entry, objKey, edit = false) {
    if (edit) {
    } else {
      const key = objKey === 'job' ? 'jobs' : 'qualifications'
      const newEntry = entry
      this.setState({ [key]: this.state[key].concat(newEntry) })
    }
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
        <Main data={this.state} saveInfo={this.saveInfo} saveNewEntry={this.saveNewEntry} />
      </div>
    )
  }
}

export default App
