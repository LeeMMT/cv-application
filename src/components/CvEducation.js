import React, { Component } from "react";

class CvEducation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info } = this.props;

    const startDate = info.startDate ? new Date(info.startDate).getFullYear() : null;
    const endDate = info.endDate ? new Date(info.endDate).getFullYear() : null;

    return (
      <div className="education-section">
        <p className="cv-heading">EDUCATION</p>
        <p className="cv-sub-heading">{info.qualName}</p>
        <p>{info.placeOfStudy}</p>
        {info.startDate && info.endDate && (
          <p>
            {startDate} - {endDate}
          </p>
        )}
      </div>
    );
  }
}

export default CvEducation;
