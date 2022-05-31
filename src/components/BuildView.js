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
    this.addJob = this.addJob.bind(this)
    this.editQual = this.editQual.bind(this)
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
    this.props.saveNewQual({ ...this.state.education })
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

  addJob() {
    /*if (this.editMode) {
      this.editMode = false
    } else {
      this.props.addQual(qualEntry)
    }*/

    this.props.saveNewJob({ ...this.state.job })
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
  }

  editQual(e) {
    const id = e.target.getAttribute('data-key')
    const qual = this.props.data.qualifications.find((entry) => entry.id === id)
    this.setState({ education: qual })
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
  }

  render() {
    const { data, saveInfo, saveNewQual, addJob } = this.props

    return (
      <form>
        <FormControls editingInfo={this.state} toggleArea={this.toggleArea} updateData={this.updateData} />
        {this.state.personalFieldset && (
          <GeneralInfoEditor editingInfo={this.state.general} handleChange={this.handleChange} handleFileChange={this.handleFileChange} />
        )}
        {this.state.educationFieldset && (
          <EducationInfoEditor
            data={data}
            editingInfo={this.state.education}
            handleChange={this.handleChange}
            addQual={this.addQual}
            editQual={this.editQual}
          />
        )}
        {this.state.experienceFieldset && (
          <ExperienceInfoEditor data={data} editingInfo={this.state.job} handleChange={this.handleChange} addJob={this.addJob} />
        )}
      </form>
    )
  }
}

export default BuildView
