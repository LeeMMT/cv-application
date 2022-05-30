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
      personal: true,
      education: true,
      experience: true,

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

    this.handleChange = this.handleChange.bind(this)
    this.handleFileChange = this.handleFileChange.bind(this)
    this.updateData = this.updateData.bind(this)
    this.toggleArea = this.toggleArea.bind(this)
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

  componentDidUpdate() {
    console.log(this.state)
  }

  render() {
    const { data, saveInfo } = this.props

    return (
      <form>
        <FormControls editingInfo={this.state} toggleArea={this.toggleArea} updateData={this.updateData} />
        {this.state.personal && (
          <GeneralInfoEditor editingInfo={this.state.general} handleChange={this.handleChange} handleFileChange={this.handleFileChange} />
        )}
        {this.state.education && <EducationInfoEditor data={data} editingInfo={this.state.education} />}
        {this.state.experience && <ExperienceInfoEditor data={data} editingInfo={this.state.job} />}
      </form>
    )
  }
}

export default BuildView
