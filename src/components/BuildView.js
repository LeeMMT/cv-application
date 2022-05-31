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
      qualEdit: false,
      jobEdit: false,

      general: this.props.data.general,

      education: {
        placeOfStudy: '',
        qualName: '',
        startDate: '',
        endDate: '',
        id: uniqid(),
      },

      job: {
        companyName: '',
        positionTitle: '',
        positionStartDate: '',
        positionEndDate: '',
        roleDescription: '',
        id: uniqid(),
      },
    }

    this.editMode = false
    this.handleChange = this.handleChange.bind(this)
    this.handleFileChange = this.handleFileChange.bind(this)
    this.updateData = this.updateData.bind(this)
    this.toggleArea = this.toggleArea.bind(this)
    this.addQual = this.addQual.bind(this)
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

  addQual() {
    const qualEntry = {
      ...this.state,
    }

    if (this.editMode) {
      this.props.addQual(qualEntry, true)
      this.editMode = false
    } else {
      this.props.addQual(qualEntry)
    }

    this.props.saveNewQual()
  }

  /*editQual(e) {
    const id = e.target.getAttribute('data-key')
    const qual = this.props.info.qualifications.find((entry) => entry.id === id)
    this.setState({ ...qual })
    this.editMode = true
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
  }*/

  render() {
    const { data, saveInfo, saveNewQual } = this.props

    return (
      <form>
        <FormControls editingInfo={this.state} toggleArea={this.toggleArea} updateData={this.updateData} />
        {this.state.personalFieldset && (
          <GeneralInfoEditor editingInfo={this.state.general} handleChange={this.handleChange} handleFileChange={this.handleFileChange} />
        )}
        {this.state.educationFieldset && (
          <EducationInfoEditor data={data} editingInfo={this.state.education} handleChange={this.handleChange} addQual={this.addQual} />
        )}
        {this.state.experienceFieldset && <ExperienceInfoEditor data={data} editingInfo={this.state.job} handleChange={this.handleChange} />}
      </form>
    )
  }
}

export default BuildView
