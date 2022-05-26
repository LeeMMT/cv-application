import React, { Component } from "react";
import BuildView from "./BuildView";
import ViewMode from "./ViewMode";
import "../styles/main.css";

class Main extends Component {
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
      roleDescription: "",
    };

    this.saveInfo = this.saveInfo.bind(this);
  }

  saveInfo(info) {
    this.setState(info);
  }

  render() {
    return (
      <div>
        {this.props.activeMode === "view" && <ViewMode info={this.state} />}
        {this.props.activeMode === "build" && <BuildView saveInfo={this.saveInfo} printInfo={this.printInfo} photoRef={this.photoFile} />}
      </div>
    );
  }
}

export default Main;
