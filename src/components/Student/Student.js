import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ClassList from "../ClassList/ClassList";

export default class Student extends Component {
  constructor() {
    super();

    this.state = {
      studentInfo: {}
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`).then(res => {
      this.setState({ studentInfo: res.data });
    });
  }
  render() {
    // destructures student info so you dont need to type this.state.studentInfo
    const { studentInfo } = this.state;
    let backToClass = studentInfo.class;
    return (
      <div className="box">
        <Link to={`/classlist/${backToClass}`}>
          <button>Go Back</button>
        </Link>
        <h1>Student</h1>
        <h1>
          {studentInfo.first_name} {studentInfo.last_name}
        </h1>
        <h3>Grade: {studentInfo.grade}</h3>
        <h3>Email: {studentInfo.email}</h3>
      </div>
    );
  }
}
