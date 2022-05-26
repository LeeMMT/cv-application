import React, { Component } from "react";

class PersonalInfoEditor extends Component {
  constructor(props) {
    super(props);

    this.handleFileChange = this.handleFileChange.bind(this);
  }

  handleFileChange(e) {
    const file = e.target.files[0];
    this.props.savePhotoFile(file);
  }

  render() {
    const { formValues, handleChange } = this.props;

    return (
      <fieldset>
        <legend>Personal Information</legend>
        <div className="two-col">
          <label htmlFor="fName">First Name:</label>
          <input id="fName" name="fName" value={formValues.fName} onChange={handleChange}></input>

          <label htmlFor="lName">Last Name:</label>
          <input id="lName" name="lName" value={formValues.lName} onChange={handleChange}></input>

          <label htmlFor="profTitle">Professional Title:</label>
          <input id="profTitle" name="profTitle" value={formValues.profTitle} onChange={handleChange}></input>

          <label htmlFor="description">Who are you?</label>
          <textarea
            id="description"
            name="description"
            value={formValues.description}
            onChange={handleChange}
            placeholder="To keep it short and punchy, keep this to one or two paragraphs."
          ></textarea>

          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" value={formValues.email} onChange={handleChange}></input>

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input id="phoneNumber" type="tel" name="phoneNumber" value={formValues.phoneNumber} onChange={handleChange}></input>

          <label htmlFor="city">City:</label>
          <input id="city" name="city" value={formValues.city} onChange={handleChange}></input>

          <label htmlFor="photo">Photo:</label>
          <input id="photo" name="photo" type="file" accept="image/*" onChange={this.handleFileChange}></input>
        </div>
      </fieldset>
    );
  }
}

export default PersonalInfoEditor;
