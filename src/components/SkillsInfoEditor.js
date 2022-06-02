import React, { Component } from 'react'
import uniqid from 'uniqid'
import StoredSkillsInfo from './StoredSkillsInfo'

class SkillsInfoEditor extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { editMode, data, editingInfo, handleChange, addEntry, cardClickHandler, cancelEdit } = this.props

    return (
      <fieldset>
        <legend>Skills</legend>
        <StoredSkillsInfo data={data.skills} cardClickHandler={cardClickHandler} />
        <div className="two-col">
          <label htmlFor="skillName">Skill Name:</label>
          <input id="skillName" name="skillName" data-object="skills" value={editingInfo.skillName} onChange={handleChange}></input>
        </div>
        <div className="add-and-edit-container">
          <button className={editMode ? 'cancel-edit-btn visible' : 'cancel-edit-btn'} type="button" data-object="skills" onClick={cancelEdit}>
            Cancel edit
          </button>
          <div className="add-info-controls">
            <p className="pseudo-label">{editMode ? 'Save' : 'Add skill'}</p>
            <button id="add-job-btn" type="button" data-object="skills" onClick={addEntry}>
              <svg height="469.33333pt" viewBox="0 0 469.33333 469.33333" width="469.33333pt" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0"
                  fill="#858585"
                />
              </svg>
            </button>
          </div>
        </div>
      </fieldset>
    )
  }
}

export default SkillsInfoEditor
