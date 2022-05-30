import React, { Component } from 'react'
class CvProfile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { info, dummyInfo, previewMode } = this.props

    const activeInfo = previewMode ? dummyInfo : info

    return (
      <div className="profile-section">
        <p className="cv-heading">PROFILE</p>
        <p>{activeInfo.description}</p>
      </div>
    )
  }
}

export default CvProfile
