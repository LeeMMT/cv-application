import React, { Component } from 'react'
class CvProfile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { data, dummyInfo } = this.props

    const activeInfo = data.quickPreview ? dummyInfo : data

    return (
      <div className="profile-section">
        <p className="cv-heading">PROFILE</p>
        <p>{activeInfo.description}</p>
      </div>
    )
  }
}

export default CvProfile
