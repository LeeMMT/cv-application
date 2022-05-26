import React, { Component } from "react";

class ExperienceInfoEditor extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { formValues, handleChange } = this.props;

    return (
      <fieldset>
        <legend>Experience Information</legend>
        <div className="two-col">
          <label htmlFor="companyName">Company Name:</label>
          <input id="companyName" name="companyName" value={formValues.companyName} onChange={handleChange}></input>

          <label htmlFor="positionTitle">Position Title:</label>
          <input id="positionTitle" name="positionTitle" value={formValues.positionTitle} onChange={handleChange}></input>

          <label htmlFor="positionStartDate">Start Date:</label>
          <input id="positionStartDate" name="positionStartDate" type="date" value={formValues.positionStartDate} onChange={handleChange}></input>

          <label htmlFor="positionStartDate">End Date:</label>
          <input id="positionEndDate" name="positionEndDate" type="date" value={formValues.positionEndDate} onChange={handleChange}></input>

          <label htmlFor="mainTasks">Description of Role:</label>
          <textarea id="roleDescription" name="roleDescription" value={formValues.roleDescription} onChange={handleChange}></textarea>
        </div>
      </fieldset>
    );
  }
}

export default ExperienceInfoEditor;
