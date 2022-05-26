import React, { Component } from "react";
import CvHeader from "./CvHeader";
import "../styles/viewmode.css";
import CvExperience from "./CvExperience";

class ViewMode extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info } = this.props;

    let startDate = null;
    let endDate = null;

    if (info.startDate && info.endDate) {
      startDate = new Date(info.startDate).getFullYear();
      endDate = new Date(info.endDate).getFullYear();
    }

    return (
      <div className="view-mode-container">
        <CvHeader info={info} />
        <div className="personal-section">
          <div className="info-row">
            <i className="icon location"></i>
            <p>{info.city}</p>
          </div>
          <div className="info-row">
            <i className="icon call"></i>
            <p>{info.phoneNumber}</p>
          </div>
          <div className="info-row">
            <i className="icon email"></i>
            <p>{info.email}</p>
          </div>
        </div>
        <div className="education-section">
          <p className="cv-heading">EDUCATION</p>
          <p>{info.qualName}</p>
          <p>{info.placeOfStudy}</p>
          {info.startDate && info.endDate && (
            <p>
              {startDate} - {endDate}
            </p>
          )}
        </div>
        <div className="profile-section">
          <p className="cv-heading">PROFILE</p>
          <p>{info.description}</p>
          <p></p>
        </div>
        <CvExperience info={info} />
      </div>
    );
  }
}

export default ViewMode;
