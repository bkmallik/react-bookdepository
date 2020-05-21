import React, { Component } from "react";
import Header from "../../includes/Header";

export default class UserHome extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    localStorage.clear();
    this.props.history.push("/login");
  };

  componentDidMount() {
    // <Header />
  }

  render() {
    const item = localStorage.getItem("userEmail");

    return (
      <div>
        <Header />
        <div>
          Hello From User Home
          {item}
          <button onClick={this.handleSubmit}>Logut</button>
        </div>
      </div>
    );
  }
}
