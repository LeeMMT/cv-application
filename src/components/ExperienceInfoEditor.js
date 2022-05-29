import React, { Component } from 'react'
import uniqid from 'uniqid'
import StoredJobInfo from './StoredJobInfo'

class ExperienceInfoEditor extends Component {
  constructor(props) {
    super(props)

    this.state = {
      companyName: '',
      positionTitle: '',
      positionStartDate: '',
      positionEndDate: '',
      roleDescription: '',
      id: uniqid(),
    }

    this.handleChange = this.handleChange.bind(this)
    this.createJobObject = this.createJobObject.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  createJobObject() {
    const jobEntry = {
      ...this.state,
    }
    this.props.addJob(jobEntry)
    this.setState({
      companyName: '',
      positionTitle: '',
      positionStartDate: '',
      positionEndDate: '',
      roleDescription: '',
      id: uniqid(),
    })
  }

  render() {
    const { info } = this.props

    return (
      <fieldset>
        <StoredJobInfo info={info} />
        <legend>Experience Information</legend>
        <div className="two-col">
          <label htmlFor="companyName">Company Name:</label>
          <input id="companyName" name="companyName" value={this.state.companyName} onChange={this.handleChange}></input>

          <label htmlFor="positionTitle">Position Title:</label>
          <input id="positionTitle" name="positionTitle" value={this.state.positionTitle} onChange={this.handleChange}></input>

          <label htmlFor="positionStartDate">Start Date:</label>
          <input id="positionStartDate" name="positionStartDate" type="date" value={this.state.positionStartDate} onChange={this.handleChange}></input>

          <label htmlFor="positionStartDate">End Date:</label>
          <input id="positionEndDate" name="positionEndDate" type="date" value={this.state.positionEndDate} onChange={this.handleChange}></input>

          <label htmlFor="mainTasks">Description of Role:</label>
          <textarea id="roleDescription" name="roleDescription" value={this.state.roleDescription} onChange={this.handleChange}></textarea>
        </div>
        <div className="add-job-controls">
          <p className="pseudo-label">Add position to CV</p>
          <button id="add-job-btn" type="button" onClick={this.createJobObject}>
            <svg height="469.33333pt" viewBox="0 0 469.33333 469.33333" width="469.33333pt" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0"
                fill="#858585"
              />
            </svg>
          </button>
        </div>
      </fieldset>
    )
  }
}

export default ExperienceInfoEditor
