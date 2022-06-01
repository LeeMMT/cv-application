import React, { Component } from 'react'
import uniqid from 'uniqid'
import GeneralInfoEditor from './GeneralInfoEditor'
import EducationInfoEditor from './EducationInfoEditor'
import ExperienceInfoEditor from './ExperienceInfoEditor'
import '../styles/build-view.css'
import FormControls from './FormControls'

class BuildView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      personalFieldset: true,
      educationFieldset: true,
      experienceFieldset: true,

      general: this.props.data.general,

      job: {
        companyName: '',
        positionTitle: '',
        positionStartDate: '',
        positionEndDate: '',
        roleDescription: '',
        id: uniqid(),
      },

      education: {
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
    console.log('BiuldView Updated')
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
    const file = e.target.files[0]
    this.props.savePhotoFile(file)
    this.setState({
      general: {
        ...this.state.general,
        photoFile: file,
      },
    })
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

    if (objKey === 'job') {
      this.setState({
        job: {
          companyName: '',
          positionTitle: '',
          positionStartDate: '',
          positionEndDate: '',
          roleDescription: '',
          id: uniqid(),
        },
      })
    } else {
      this.setState({
        education: {
          placeOfStudy: '',
          qualName: '',
          startDate: '',
          endDate: '',
          id: uniqid(),
        },
      })
    }
  }

  cardClickHandler(e) {
    const id = e.target.getAttribute('data-key')
    const formField = e.target.getAttribute('data-object')
    const buildViewObjectKey = formField === 'jobs' ? 'job' : 'education'
    const entry = this.props.data[formField].find((entry) => entry.id === id)
    if (e.target.textContent == 'edit') {
      this.editMode = true
      this.setState({ [buildViewObjectKey]: entry })
    } else {
      this.props.deleteEntry(entry, formField)
    }
  }

  cancelEdit() {
    this.setState({
      companyName: '',
      positionTitle: '',
      positionStartDate: '',
      positionEndDate: '',
      roleDescription: '',
      id: uniqid(),
    })
    this.editMode = false
  }

  render() {
    const { data, saveInfo, saveNewEntry, deleteEntry } = this.props

    return (
      <form>
        <FormControls editingInfo={this.state} toggleArea={this.toggleArea} updateData={this.updateData} />
        {this.state.personalFieldset && (
          <GeneralInfoEditor editingInfo={this.state.general} handleChange={this.handleChange} handleFileChange={this.handleFileChange} />
        )}
        {this.state.educationFieldset && (
          <EducationInfoEditor
            editMode={this.editMode}
            data={data}
            editingInfo={this.state.education}
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
            editingInfo={this.state.job}
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
