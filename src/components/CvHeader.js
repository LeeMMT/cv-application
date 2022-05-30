import React, { Component } from 'react'
import placeholderImg from '../images/johnwick.webp'

class CvHeader extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { info, dummyInfo, previewMode } = this.props

    const activeInfo = previewMode ? dummyInfo : info
    const imgSrc = info.photoFile ? URL.createObjectURL(info.photoFile) : null

    return (
      <div className="cv-header">
        <div className="header-title">
          <p>
            <span>{activeInfo.fName} </span>
            {activeInfo.lName}
          </p>
          <p className="prof-title">{activeInfo.profTitle.toUpperCase()}</p>
        </div>
        {imgSrc && <img className="photo" src={imgSrc}></img>}
        {previewMode && <img className="photo" src={placeholderImg}></img>}
        <div className="shape-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
        </div>
      </div>
    )
  }
}

export default CvHeader
