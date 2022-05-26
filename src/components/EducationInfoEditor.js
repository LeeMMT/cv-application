import React, { Component } from "react";

class EducationInfoEditor extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { formValues, handleChange } = this.props;

    return (
      <fieldset>
        <legend>Education Information</legend>
        <div className="two-col">
          <label htmlFor="placeOfStudy">Place of Study:</label>
          <input id="placeOfStudy" name="placeOfStudy" value={formValues.placeOfStudy} onChange={handleChange}></input>

          <label htmlFor="qualName">Name of Qualification</label>
          <input id="qualName" name="qualName" value={formValues.qualName} onChange={handleChange}></input>

          <label htmlFor="startDate">Start Date:</label>
          <input id="startDate" type="date" name="startDate" value={formValues.startDate} onChange={handleChange}></input>

          <label htmlFor="endDate">End Date:</label>
          <input id="endDate" type="date" name="endDate" value={formValues.endDate} onChange={handleChange}></input>
        </div>
      </fieldset>
    );
  }
}

export default EducationInfoEditor;
