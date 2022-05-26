import React, { Component } from "react";
import PersonalInfoEditor from "./PersonalInfoEditor";
import EducationInfoEditor from "./EducationInfoEditor";
import ExperienceInfoEditor from "./ExperienceInfoEditor";
import "../styles/build-view.css";

class BuildView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fName: "",
      lName: "",
      city: "",
      profTitle: "",
      description: "",
      email: "",
      phoneNumber: "",
      placeOfStudy: "",
      qualName: "",
      startDate: "",
      endDate: "",
      companyName: "",
      positionTitle: "",
      positionStartDate: "",
      positionEndDate: "",
      mainTasks: "",
      challenge: "What is an example of a challenge you face during your time at this particular company, and how did you overcome said challenge?",
    };

    this.savePhotoFile = this.savePhotoFile.bind(this);
    this.saveInfo = this.saveInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  savePhotoFile(file) {
    this.setState({ ...this.state, photoFile: file });
  }

  saveInfo() {
    this.props.saveInfo(this.state);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <form>
        <PersonalInfoEditor formValues={this.state} handleChange={this.handleChange} savePhotoFile={this.savePhotoFile} />
        <EducationInfoEditor formValues={this.state} handleChange={this.handleChange} />
        <ExperienceInfoEditor formValues={this.state} handleChange={this.handleChange} />
        <button id="save-details-btn" type="button" onClick={this.saveInfo}>
          Save Details
        </button>
        <button type="button" onClick={this.props.printInfo}>
          Print State
        </button>
      </form>
    );
  }
}

export default BuildView;
