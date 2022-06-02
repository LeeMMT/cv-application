import React, { Component } from 'react'
import uniqid from 'uniqid'
import GeneralInfoEditor from './GeneralInfoEditor'
import SkillsInfoEditor from './SkillsInfoEditor'
import EducationInfoEditor from './EducationInfoEditor'
import ExperienceInfoEditor from './ExperienceInfoEditor'
import '../styles/build-view.css'
import FormControls from './FormControls'

class BuildView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      personalFieldset: true,
      skillsFieldset: true,
      educationFieldset: true,
      experienceFieldset: true,

      general: this.props.data.general,

      skills: {
        skillName: '',
        id: uniqid(),
      },

      jobs: {
        companyName: '',
        positionTitle: '',
        positionStartDate: '',
        positionEndDate: '',
        roleDescription: '',
        id: uniqid(),
      },

      qualifications: {
        placeOfStudy: '',
        qualName: '',
        startDate: '',
        endDate: '',
        id: uniqid(),
      },
    }

    this.editMode = false
    this.handleChange = this.handleChange.bind(this)
    this.handleFileChange = this.handleFileChange.bind(this)
    this.updateData = this.updateData.bind(this)
    this.toggleArea = this.toggleArea.bind(this)
    this.addEntry = this.addEntry.bind(this)
    this.cardClickHandler = this.cardClickHandler.bind(this)
    this.cancelEdit = this.cancelEdit.bind(this)
  }

  componentDidUpdate() {
    console.log('Buildview updated')
    console.log(this.state)
  }

  updateData() {
    const general = this.state.general
    this.props.saveInfo(general)
  }

  handleChange(e) {
    const objectKey = e.target.getAttribute('data-object')
    this.setState({
      [objectKey]: {
        ...this.state[objectKey],
        [e.target.name]: e.target.value,
      },
    })
  }

  handleFileChange(e) {
    //const file = e.target.files[0]
    console.log('handleFileChange firing')
    console.log(e)
    this.setState({ general: { ...this.state.general, photoFile: e.target.files[0] } })
  }

  toggleArea(e) {
    const area = e.target.getAttribute('data-area')
    this.setState({
      [area]: this.state[area] ? false : true,
    })
  }

  addEntry(e) {
    const objKey = e.currentTarget.getAttribute('data-object')
    const entry = this.state[objKey]

    if (this.editMode) {
      this.props.saveNewEntry(entry, objKey, true)
      this.editMode = false
    } else {
      this.props.saveNewEntry(entry, objKey)
    }

    if (objKey === 'jobs') {
      this.setState({
        jobs: {
          companyName: '',
          positionTitle: '',
          positionStartDate: '',
          positionEndDate: '',
          roleDescription: '',
          id: uniqid(),
        },
      })
    } else if (objKey === 'qualifications') {
      this.setState({
        qualifications: {
          placeOfStudy: '',
          qualName: '',
          startDate: '',
          endDate: '',
          id: uniqid(),
        },
      })
    } else {
      this.setState({
        skills: {
          skillName: '',
          id: uniqid(),
        },
      })
    }
  }

  cardClickHandler(e) {
    const id = e.target.getAttribute('data-key')
    console.log(id)
    const formField = e.target.getAttribute('data-object')
    console.log(formField)
    const entry = this.props.data[formField].find((entry) => entry.id === id)

    console.log('cardClickHandler fired')
    console.log(entry)

    if (e.target.textContent === 'Edit') {
      console.log('went into edit')
      this.editMode = true
      this.setState({ [formField]: entry })
    } else {
      console.log('went into delete')
      this.props.deleteEntry(entry, formField)
    }
  }

  cancelEdit(e) {
    const objKey = e.target.getAttribute('data-object')
    if (objKey === 'jobs') {
      this.setState({
        jobs: {
          companyName: '',
          positionTitle: '',
          positionStartDate: '',
          positionEndDate: '',
          roleDescription: '',
          id: uniqid(),
        },
      })
    } else if (objKey === 'qualifications') {
      this.setState({
        qualifications: {
          placeOfStudy: '',
          qualName: '',
          startDate: '',
          endDate: '',
          id: uniqid(),
        },
      })
    } else {
      this.setState({
        skills: {
          skillName: '',
          id: uniqid(),
        },
      })
    }
    this.editMode = false
  }

  render() {
    const { data, saveInfo, saveNewEntry, deleteEntry, savePhotoFile } = this.props

    return (
      <form>
        <FormControls editingInfo={this.state} toggleArea={this.toggleArea} updateData={this.updateData} />
        {this.state.personalFieldset && (
          <GeneralInfoEditor editingInfo={this.state.general} handleChange={this.handleChange} handleFileChange={this.handleFileChange} />
        )}

        {this.state.skillsFieldset && (
          <SkillsInfoEditor
            editMode={this.editMode}
            data={data}
            editingInfo={this.state.skills}
            handleChange={this.handleChange}
            addEntry={this.addEntry}
            cardClickHandler={this.cardClickHandler}
            cancelEdit={this.cancelEdit}
          />
        )}

        {this.state.educationFieldset && (
          <EducationInfoEditor
            editMode={this.editMode}
            data={data}
            editingInfo={this.state.qualifications}
            handleChange={this.handleChange}
            addEntry={this.addEntry}
            cardClickHandler={this.cardClickHandler}
            cancelEdit={this.cancelEdit}
          />
        )}

        {this.state.experienceFieldset && (
          <ExperienceInfoEditor
            editMode={this.editMode}
            data={data}
            editingInfo={this.state.jobs}
            handleChange={this.handleChange}
            addEntry={this.addEntry}
            cardClickHandler={this.cardClickHandler}
            cancelEdit={this.cancelEdit}
          />
        )}
      </form>
    )
  }
}

export default BuildView
