import React, { Component } from "react";
class CvProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info } = this.props;

    return (
      <div className="profile-section">
        <p className="cv-heading">PROFILE</p>
        <p>{info.description}</p>
      </div>
    );
  }
}

export default CvProfile;
