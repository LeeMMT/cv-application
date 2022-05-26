import React, { Component } from "react";

class CvHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info } = this.props;

    const imgSrc = info.photoFile ? URL.createObjectURL(info.photoFile) : null;

    return (
      <div className="cv-header">
        <div className="header-title">
          <p>
            <span>{info.fName} </span>
            {info.lName}
          </p>
          <p className="prof-title">{info.profTitle}</p>
        </div>
        {imgSrc && <img className="photo" src={imgSrc}></img>}
        <div className="shape-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
        </div>
      </div>
    );
  }
}

export default CvHeader;
