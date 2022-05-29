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
      country: "",
      profTitle: "",
      description: "",
      email: "",
      phoneNumber: "",
      placeOfStudy: "",
      qualName: "",
      startDate: "",
      endDate: "",
      jobs: [],
    };

    this.saveInfo = this.saveInfo.bind(this);
    this.printState = this.printState.bind(this);
    this.addJob = this.addJob.bind(this);
  }

  printState() {
    console.log(this.state);
  }

  saveInfo(info) {
    this.setState(info);
  }

  addJob(job) {
    this.setState({
      jobs: this.state.jobs.concat(job),
    });
  }

  render() {
    return (
      <div>
        {this.props.activeMode === "view" && <ViewMode info={this.state} printState={this.printState} />}
        {this.props.activeMode === "build" && <BuildView info={this.state} saveInfo={this.saveInfo} addJob={this.addJob} />}
      </div>
    );
  }
}

export default Main;
