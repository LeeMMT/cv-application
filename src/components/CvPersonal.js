import React, { Component } from 'react'

class CvPersonal extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { data, dummyInfo } = this.props

    const activeInfo = data.quickPreview ? dummyInfo : data
    let city = activeInfo.general.city
    if (activeInfo.general.city && activeInfo.general.country) {
      city = activeInfo.general.city.concat(',')
    }
    return (
      <div className="personal-section">
        <div className="info-row">
          <i className="icon location"></i>
          <p>
            {city} {activeInfo.general.country}
          </p>
        </div>
        <div className="info-row">
          <i className="icon call"></i>
          <p>{activeInfo.general.phoneNumber}</p>
        </div>
        <div className="info-row">
          <i className="icon email"></i>
          <p>{activeInfo.general.email}</p>
        </div>
      </div>
    )
  }
}

export default CvPersonal
