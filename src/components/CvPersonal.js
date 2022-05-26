import React, { Component } from "react";

class CvPersonal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info } = this.props;
    return (
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
    );
  }
}

export default CvPersonal;
