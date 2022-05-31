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
    this.saveNewQual = this.saveNewQual.bind(this)
    this.saveNewJob = this.saveNewJob.bind(this)
  }

  componentDidUpdate() {
    console.log('App updated')
    console.log(this.state)
  }

  saveInfo(data) {
    this.setState({ general: data })
  }

  saveNewQual(qual) {
    const newQual = qual
    this.setState({ qualifications: this.state.qualifications.concat(newQual) })
  }

  saveNewJob(job) {
    const newJob = job
    this.setState({ jobs: this.state.jobs.concat(job) })
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
        <Main data={this.state} saveInfo={this.saveInfo} saveNewQual={this.saveNewQual} saveNewJob={this.saveNewJob} />
      </div>
    )
  }
}

export default App
