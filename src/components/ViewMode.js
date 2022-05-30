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
    const { data } = this.props
    return (
      <div className="view-mode-container">
        <CvHeader data={data} dummyInfo={dummyInfo} />
        <CvPersonal data={data} dummyInfo={dummyInfo} />
        <CvEducation data={data} dummyInfo={dummyInfo} />
        <CvProfile data={data} dummyInfo={dummyInfo} />
        <CvExperience data={data} dummyInfo={dummyInfo} />
      </div>
    )
  }
}

export default ViewMode
