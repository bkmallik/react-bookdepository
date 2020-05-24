import React, { Component } from "react";
import Header from "../../includes/Header";
import axios from "axios";
import UserAuth from './UserAUTH'

export default class UserHome extends Component {
 
  state={
    user:[]
  }

  componentDidMount(){
    const email = localStorage.getItem("userEmail");
    // console.log(email);
    axios.get(`https://www.learningall.me/api/bookdepository-userdetails/${email}`)
    .then(res=>{
      console.log(res.data);
      this.setState({user: res.data})
    })
  }

  render() {
    const item = localStorage.getItem("userEmail");

    return (
      <div>
        <Header />
        <div className="container mt-5">
          <center> <h1>Welcome </h1>
          <h2>Hello {this.state.user.fname}</h2> </center>
        </div>
      </div>
    );
  }
}
