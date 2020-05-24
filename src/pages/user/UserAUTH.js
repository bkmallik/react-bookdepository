import React, { Component } from 'react'
import axios from "axios";


export default class UserAUTH extends Component {

    state={
        user:[]
      }

    componentDidMount(){
        const email = localStorage.getItem("userEmail");
        // console.log(email);
        axios.get(`https://www.learningall.me/api/bookdepository-userdetails/email@email.com`)
        .then(res=>{
          console.log(res.data);
          this.setState({user: res.data})
        })
      }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}


