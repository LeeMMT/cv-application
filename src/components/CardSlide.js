import React, { Component } from 'react'
class CardSlide extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { dataObject, dataId, primaryText, secondaryText, dateOne, dateTwo, clickHandler } = this.props

    let startDate = null
    let endDate = null

    if (dateOne && dateTwo) {
      startDate = new Date(dateOne).getFullYear()
      endDate = new Date(dateTwo).getFullYear()
    }

    return (
      <div key={dataId} className="slide-info">
        <p>{primaryText}</p>
        <p>{secondaryText}</p>
        {startDate && (
          <p>
            {startDate} - {endDate}
          </p>
        )}
        <div className="slide-info-buttons">
          <button type="button" data-object={dataObject} data-key={dataId} onClick={clickHandler}>
            Edit
          </button>
          <button type="button" data-object={dataObject} data-key={dataId} onClick={clickHandler}>
            Delete
          </button>
        </div>
      </div>
    )
  }
}

export default CardSlide
