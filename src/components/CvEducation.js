import React, { Component } from 'react'

class CvEducation extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { info, dummyInfo, previewMode } = this.props

    const activeInfo = previewMode ? dummyInfo : info

    const qualifications = activeInfo.qualifications.map((qual) => {
      let startDate = null
      let endDate = null

      if (qual.startDate && qual.endDate) {
        startDate = new Date(qual.startDate).getFullYear()
        endDate = new Date(qual.endDate).getFullYear()
      }

      return (
        <div key={qual.id}>
          <span className="cv-bullet"></span>
          <p className="cv-sub-heading">{qual.qualName}</p>
          <p>{qual.placeOfStudy}</p>
          {startDate && (
            <p>
              {startDate} - {endDate}
            </p>
          )}
        </div>
      )
    })

    return (
      <div className="education-section">
        <p className="cv-heading">EDUCATION</p>
        {qualifications}
      </div>
    )
  }
}

export default CvEducation
