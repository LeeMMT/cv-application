import React, { Component } from "react";

class CvExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info } = this.props;

    const startDate = info.positionStartDate ? new Date(info.positionStartDate).getFullYear() : null;
    const endDate = info.positionEndDate ? new Date(info.positionEndDate).getFullYear() : null;

    return (
      <div className="experience-section">
        <p className="cv-heading">EXPERIENCE</p>
        <div className="job-info">
          {info.positionTitle && <p>{info.positionTitle}</p>}

          {info.positionStartDate && info.positionEndDate && (
            <p>
              {startDate} - {endDate}
            </p>
          )}
        </div>
        <p className="cv-sub-heading">{info.companyName}</p>
        <p>{info.roleDescription}</p>
      </div>
    );
  }
}

export default CvExperience;
