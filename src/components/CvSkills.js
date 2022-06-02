import React, { Component } from 'react'

class CvSkills extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { data, dummyInfo } = this.props

    const activeInfo = data.quickPreview ? dummyInfo : data

    const skills = activeInfo.skills.map((skill) => {
      console.log('skill to follow')
      console.log(skill)

      return (
        <div key={skill.id}>
          <span className="cv-bullet"></span>
          <p className="cv-sub-heading">{skill.skillName}</p>
        </div>
      )
    })

    return (
      <div className="skills-section">
        <p className="cv-heading">SKILLS</p>
        {skills}
      </div>
    )
  }
}

export default CvSkills
