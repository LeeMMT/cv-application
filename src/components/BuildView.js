import React, { Component } from 'react'
import PersonalInfoEditor from './PersonalInfoEditor'
import EducationInfoEditor from './EducationInfoEditor'
import ExperienceInfoEditor from './ExperienceInfoEditor'
import '../styles/build-view.css'
import FormControls from './FormControls'

class BuildView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ...this.props.info,
      personal: true,
      education: true,
      experience: true,
    }

    this.savePhotoFile = this.savePhotoFile.bind(this)
    this.saveInfo = this.saveInfo.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.toggleArea = this.toggleArea.bind(this)
  }

  componentDidUpdate() {
    console.log('BuildView ffffstate updated')
    console.log(this.state)
  }

  savePhotoFile(file) {
    this.setState({ ...this.state, photoFile: file })
  }

  saveInfo() {
    console.log('before saveInfo in BuildView')
    console.log(this.state)
    this.props.saveInfo(this.state)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  toggleArea(e) {
    const area = e.target.getAttribute('data-area')
    this.setState({
      [area]: this.state[area] ? false : true,
    })
  }

  componentDidUpdate() {
    console.log('build view state updated')
    console.log(this.state)
  }

  render() {
    const { info, saveInfo, addJob, addQual } = this.props
    return (
      <form>
        <FormControls editingInfo={this.state} toggleArea={this.toggleArea} saveInfo={this.saveInfo} />
        {this.state.personal && <PersonalInfoEditor formValues={this.state} handleChange={this.handleChange} savePhotoFile={this.savePhotoFile} />}
        {this.state.education && <EducationInfoEditor info={info} addQual={addQual} />}
        {this.state.experience && <ExperienceInfoEditor info={info} addJob={addJob} />}
      </form>
    )
  }
}

export default BuildView
