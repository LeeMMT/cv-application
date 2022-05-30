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
  }

  render() {
    const { info, previewMode } = this.props

    return (
      <div className="view-mode-container">
        <CvHeader info={info} dummyInfo={dummyInfo} previewMode={previewMode} />
        <CvPersonal info={info} dummyInfo={dummyInfo} previewMode={previewMode} />
        <CvEducation info={info} dummyInfo={dummyInfo} previewMode={previewMode} />
        <CvProfile info={info} dummyInfo={dummyInfo} previewMode={previewMode} />
        <CvExperience info={info} dummyInfo={dummyInfo} previewMode={previewMode} />
      </div>
    )
  }
}

export default ViewMode
