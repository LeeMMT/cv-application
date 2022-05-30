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

      jobs: {
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
    this.saveInfo = this.saveInfo.bind(this)
    this.toggleArea = this.toggleArea.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
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

  render() {
    const { data } = this.props

    return (
      <form>
        <FormControls editingInfo={this.state} toggleArea={this.toggleArea} />
        {this.state.personal && <GeneralInfoEditor editingInfo={this.state} handleChange={this.handleChange} handleFileChange={this.handleFileChange} />}
        {this.state.education && <EducationInfoEditor data={data} editingInfo={this.state} />}
        {this.state.experience && <ExperienceInfoEditor data={data} editingInfo={this.state} />}
      </form>
    )
  }
}

export default BuildView
