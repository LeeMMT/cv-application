import React, { Component } from 'react'
class FormControls extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { editingInfo, toggleArea, updateData } = this.props

    return (
      <div className="form-controls">
        <p>Toggle buttons on & off to hide/show areas</p>
        <div className="toggle-btns-container">
          <button className={editingInfo.personalFieldset ? 'toggled-on' : undefined} type="button" data-area="personalFieldset" onClick={toggleArea}>
            Personal
          </button>
          <button className={editingInfo.skillsFieldset ? 'toggled-on' : undefined} type="button" data-area="skillsFieldset" onClick={toggleArea}>
            Skills
          </button>
          <button className={editingInfo.educationFieldset ? 'toggled-on' : undefined} type="button" data-area="educationFieldset" onClick={toggleArea}>
            Education
          </button>
          <button className={editingInfo.experienceFieldset ? 'toggled-on' : undefined} type="button" data-area="experienceFieldset" onClick={toggleArea}>
            Experience
          </button>
        </div>
        <button id="save-btn" type="button" onClick={updateData}>
          Save
        </button>
      </div>
    )
  }
}

export default FormControls
