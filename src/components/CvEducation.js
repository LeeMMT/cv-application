import React, { Component } from 'react'

class CvEducation extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { info, dummyInfo, previewMode } = this.props

    const activeInfo = previewMode ? dummyInfo : info

    const startDate = activeInfo.startDate ? new Date(activeInfo.startDate).getFullYear() : null
    const endDate = activeInfo.endDate ? new Date(activeInfo.endDate).getFullYear() : null

    return (
      <div className="education-section">
        <p className="cv-heading">EDUCATION</p>
        <p className="cv-sub-heading">{activeInfo.qualName}</p>
        <p>{activeInfo.placeOfStudy}</p>
        {activeInfo.startDate && activeInfo.endDate && (
          <p>
            {startDate} - {endDate}
          </p>
        )}
      </div>
    )
  }
}

export default CvEducation
