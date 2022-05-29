import React, { Component } from "react";
class FormControls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { editingInfo, toggleArea, saveInfo } = this.props;
    return (
      <div className="form-controls">
        <p>Toggle buttons on & off to hide/show areas</p>
        <div className="toggle-btns-container">
          <button className={editingInfo.personal ? "toggled-on" : undefined} type="button" data-area="personal" onClick={toggleArea}>
            Personal
          </button>
          <button className={editingInfo.education ? "toggled-on" : undefined} type="button" data-area="education" onClick={toggleArea}>
            Education
          </button>
          <button className={editingInfo.experience ? "toggled-on" : undefined} type="button" data-area="experience" onClick={toggleArea}>
            Experience
          </button>
        </div>
        <button id="save-btn" type="button" onClick={saveInfo}>
          Save
        </button>
      </div>
    );
  }
}

export default FormControls;
