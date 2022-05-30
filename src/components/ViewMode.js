import React, { Component } from 'react'
import CvHeader from './CvHeader'
import '../styles/viewmode.css'
import CvExperience from './CvExperience'
import CvPersonal from './CvPersonal'
import CvEducation from './CvEducation'
import CvProfile from './CvProfile'
import { dummyInfo } from './DummyInfo'

class ViewMode extends Component {
  constructor(props) {
    super(props)

    this.previewMode = false
  }

  render() {
    const { info } = this.props

    return (
      <div className="view-mode-container">
        <CvHeader info={info} dummyInfo={dummyInfo} previewMode={this.previewMode} />
        <CvPersonal info={info} dummyInfo={dummyInfo} previewMode={this.previewMode} />
        <CvEducation info={info} dummyInfo={dummyInfo} previewMode={this.previewMode} />
        <CvProfile info={info} dummyInfo={dummyInfo} previewMode={this.previewMode} />
        <CvExperience info={info} dummyInfo={dummyInfo} previewMode={this.previewMode} />
      </div>
    )
  }
}

export default ViewMode
