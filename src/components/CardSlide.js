import React, { Component } from 'react'
class CardSlide extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="slide-info">
        <p>{this.props.primarytext}</p>
        <p>{this.props.secondarytext}</p>
        <button type="button" data-key={this.props.dataid} onClick={this.props.editJob}>
          Edit
        </button>
      </div>
    )
  }
}

export default CardSlide
