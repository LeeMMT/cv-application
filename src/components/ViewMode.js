import React, { Component } from 'react'
import CvHeader from './CvHeader'
import '../styles/viewmode.css'
import CvExperience from './CvExperience'
import CvPersonal from './CvPersonal'
import CvEducation from './CvEducation'
import CvProfile from './CvProfile'

class ViewMode extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.printState()
  }

  render() {
    const { info, printState } = this.props

    return (
      <div className="view-mode-container">
        <CvHeader info={info} />
        <CvPersonal info={info} />
        <CvEducation info={info} />
        <CvProfile info={info} />
        <CvExperience info={info} />
      </div>
    )
  }
}

export default ViewMode
