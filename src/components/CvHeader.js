import React, { Component } from 'react'
import placeholderImg from '../images/johnwick.webp'

class CvHeader extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { data, dummyInfo } = this.props

    const activeInfo = data.quickPreview ? dummyInfo : data
    const imgSrc = activeInfo.photoFile ? URL.createObjectURL(activeInfo.photoFile) : null

    return (
      <div className="cv-header">
        <div className="header-title">
          <p>
            <span>{activeInfo.general.fName} </span>
            {activeInfo.general.lName}
          </p>
          <p className="prof-title">{activeInfo.general.profTitle.toUpperCase()}</p>
        </div>
        {imgSrc && <img className="photo" src={imgSrc}></img>}
        {data.quickPreview && <img className="photo" src={placeholderImg}></img>}
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
