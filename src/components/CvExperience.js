import React, { Component } from 'react'

class CvExperience extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { info, dummyInfo, previewMode } = this.props

    const activeInfo = previewMode ? dummyInfo : info

    const jobs = activeInfo.jobs.map((job) => {
      let startDate = null
      let endDate = null

      if (job.positionStartDate && job.positionEndDate) {
        startDate = new Date(job.positionStartDate).getFullYear()
        endDate = new Date(job.positionEndDate).getFullYear()
      }

      return (
        <div key={job.id}>
          <div className="job-info">
            {<p className="cv-sub-heading position-info">{job.companyName}</p>}
            {startDate && (
              <p>
                {startDate} - {endDate}
              </p>
            )}
          </div>
          <p className="cv-sub-heading lighter position-info">{job.positionTitle}</p>
          <p>{job.roleDescription}</p>
        </div>
      )
    })

    return (
      <div className="experience-section">
        <p className="cv-heading">EXPERIENCE</p>
        {jobs}
      </div>
    )
  }
}

export default CvExperience
