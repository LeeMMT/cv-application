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
        photoFile: '',
      },

      skills: [],
      jobs: [],
      qualifications: [],
    }

    this.toggleMode = this.toggleMode.bind(this)
    this.toggleDummyData = this.toggleDummyData.bind(this)
    this.saveInfo = this.saveInfo.bind(this)
    this.saveNewEntry = this.saveNewEntry.bind(this)
    this.deleteEntry = this.deleteEntry.bind(this)
    this.savePhotoFile = this.savePhotoFile.bind(this)
  }

  componentDidUpdate() {
    console.log('App updated')
    console.log(this.state)
  }

  saveInfo(data) {
    this.setState({ general: data })
  }

  savePhotoFile(file) {
    const newGeneralObj = { ...this.state.general, photoFile: file }
    this.setState({ general: newGeneralObj })
  }

  saveNewEntry(entry, objKey, edit = false) {
    if (edit) {
      const newArray = this.state[objKey].map((obj) => {
        if (obj.id !== entry.id) {
          return obj
        } else {
          return entry
        }
      })
      this.setState({ [objKey]: newArray })
    } else {
      const newEntry = entry
      this.setState({ [objKey]: this.state[objKey].concat(newEntry) })
    }
  }

  deleteEntry(entry, objKey) {
    this.setState({ [objKey]: this.state[objKey].filter((obj) => obj.id !== entry.id) })
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
        <Main data={this.state} saveInfo={this.saveInfo} saveNewEntry={this.saveNewEntry} deleteEntry={this.deleteEntry} savePhotoFile={this.savePhotoFile} />
      </div>
    )
  }
}

export default App
