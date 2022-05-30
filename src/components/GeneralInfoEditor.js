import React, { Component } from 'react'

class GeneralInfoEditor extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { editingInfo, handleChange } = this.props

    return (
      <fieldset>
        <legend>Personal Information</legend>
        <div className="two-col">
          <label htmlFor="fName">First Name:</label>
          <input id="fName" name="fName" data-object="general" value={editingInfo.fName} onChange={handleChange}></input>

          <label htmlFor="lName">Last Name:</label>
          <input id="lName" name="lName" data-object="general" value={editingInfo.lName} onChange={handleChange}></input>

          <label htmlFor="profTitle">Professional Title:</label>
          <input id="profTitle" name="profTitle" data-object="general" value={editingInfo.profTitle} onChange={handleChange}></input>

          <label htmlFor="bio">Who are you?</label>
          <textarea
            id="bio"
            name="bio"
            data-object="general"
            value={editingInfo.bio}
            onChange={handleChange}
            placeholder="To keep it short and punchy, keep this to one or two paragraphs."
          ></textarea>

          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" data-object="general" value={editingInfo.email} onChange={handleChange}></input>

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input id="phoneNumber" type="tel" name="phoneNumber" data-object="general" value={editingInfo.phoneNumber} onChange={handleChange}></input>

          <label htmlFor="city">City:</label>
          <input id="city" name="city" data-object="general" value={editingInfo.city} onChange={handleChange}></input>

          <label htmlFor="country">Country:</label>
          <input id="country" name="country" data-object="general" value={editingInfo.country} onChange={handleChange}></input>

          <p className="pseudo-label">Photo:</p>
          <div className="file-input-wrapper">
            <label className="label-btn" htmlFor="photo">
              Upload file
              <input id="photo" name="photo" type="file" accept="image/*" onChange={this.handleFileChange}></input>
            </label>
          </div>
        </div>
      </fieldset>
    )
  }
}

export default GeneralInfoEditor
