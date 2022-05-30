import React, { Component } from 'react'
import BuildView from './BuildView'
import ViewMode from './ViewMode'
import '../styles/main.css'

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fName: '',
      lName: '',
      city: '',
      country: '',
      profTitle: '',
      description: '',
      email: '',
      phoneNumber: '',
      jobs: [],
      qualifications: [],
    }

    this.saveInfo = this.saveInfo.bind(this)
    this.addJob = this.addJob.bind(this)
    this.addQual = this.addQual.bind(this)
  }

  componentDidUpdate() {
    console.log('main component updated')
    console.log(this.state)
  }

  saveInfo(info) {
    this.setState(info)
  }

  addJob(job, edit) {
    if (edit) {
      const newJobsArray = this.state.jobs.map((val) => {
        if (val.id === job.id) {
          return job
        } else {
          return val
        }
      })
      this.setState({ jobs: newJobsArray })
    } else {
      this.setState({
        jobs: this.state.jobs.concat(job),
      })
    }
  }

  addQual(qual, edit) {
    if (edit) {
      const newQualsArray = this.state.qualifications.map((val) => {
        if (val.id === qual.id) {
          return qual
        } else {
          return val
        }
      })
      this.setState({ qualifications: newQualsArray })
    } else {
      this.setState({
        qualifications: this.state.qualifications.concat(qual),
      })
    }
  }

  render() {
    return (
      <div>
        {this.props.activeMode === 'view' && <ViewMode info={this.state} previewMode={this.props.previewMode} />}
        {this.props.activeMode === 'build' && <BuildView info={this.state} saveInfo={this.saveInfo} addJob={this.addJob} addQual={this.addQual} />}
      </div>
    )
  }
}

export default Main
