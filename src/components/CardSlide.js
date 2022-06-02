import React, { Component } from 'react'
class CardSlide extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    //const { dataObject, dataId, primaryText, secondaryText, dateOne, dateTwo, cardClickHandler } = this.props

    let startDate = null
    let endDate = null

    if (this.props.dateOne && this.props.dateTwo) {
      startDate = new Date(this.props.dateOne).getFullYear()
      endDate = new Date(this.props.dateTwo).getFullYear()
    }

    return (
      <div key={this.props.dataId} className="slide-info">
        <p>{this.props.primaryText}</p>
        <p>{this.props.secondaryText}</p>
        {startDate && (
          <p>
            {startDate} - {endDate}
          </p>
        )}
        <div className="slide-info-buttons">
          <button type="button" data-object={this.props.dataObject} data-key={this.props.dataId} onClick={this.props.cardClickHandler}>
            Edit
          </button>
          <button type="button" data-object={this.props.dataObject} data-key={this.props.dataId} onClick={this.props.cardClickHandler}>
            Delete
          </button>
        </div>
      </div>
    )
  }
}

export default CardSlide
