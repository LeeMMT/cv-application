import React, { Component } from 'react'
import uniqid from 'uniqid'
import StoredQualInfo from './StoredQualInfo'

class EducationInfoEditor extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { editMode, data, editingInfo, handleChange, addEntry, cardClickHandler, cancelEdit } = this.props

    return (
      <fieldset>
        <legend>Education Information</legend>
        <StoredQualInfo data={data.qualifications} cardClickHandler={cardClickHandler} />

        <div className="two-col">
          <label htmlFor="placeOfStudy">Place of Study:</label>
          <input id="placeOfStudy" name="placeOfStudy" data-object="qualifications" value={editingInfo.placeOfStudy} onChange={handleChange}></input>

          <label htmlFor="qualName">Name of Qualification</label>
          <input id="qualName" name="qualName" data-object="qualifications" value={editingInfo.qualName} onChange={handleChange}></input>

          <label htmlFor="startDate">Start Date:</label>
          <input id="startDate" type="date" name="startDate" data-object="qualifications" value={editingInfo.startDate} onChange={handleChange}></input>

          <label htmlFor="endDate">End Date:</label>
          <input id="endDate" type="date" name="endDate" data-object="qualifications" value={editingInfo.endDate} onChange={handleChange}></input>
        </div>

        <div className="add-and-edit-container">
          <button className={editMode ? 'cancel-edit-btn visible' : 'cancel-edit-btn'} data-object="qualifications" type="button" onClick={cancelEdit}>
            Cancel edit
          </button>
          <div className="add-info-controls">
            <p className="pseudo-label">{editMode ? 'Save' : 'Add qualification'}</p>
            <button id="add-job-btn" type="button" data-object="qualifications" onClick={addEntry}>
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

export default EducationInfoEditor
