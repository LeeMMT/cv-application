import React, { Component } from 'react'
class CardSlide extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { id, primaryText, secondaryText, dateOne, dateTwo, clickHandler } = this.props

    let startDate = null
    let endDate = null

    if (dateOne && dateTwo) {
      startDate = new Date(this.props.startdate).getFullYear()
      endDate = new Date(this.props.enddate).getFullYear()
    }

    return (
      <div className="slide-info">
        <p>{primaryText}</p>
        <p>{secondaryText}</p>
        {startDate && endDate && (
          <p>
            {startDate} - {endDate}
          </p>
        )}
        <button type="button" data-key={id} onClick={clickHandler}>
          Edit
        </button>
      </div>
    )
  }
}

export default CardSlide
