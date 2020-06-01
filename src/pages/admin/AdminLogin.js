import React, { Component } from 'react'
import axios from 'axios'

import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

export default class AdminLogin extends Component {

    constructor(props){
        super(props)
        this.state={
            username:'',
            password:''
        }
        this.handleChange= this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()

        axios.post(`https://www.learningall.me/api/bookdepository-admindetails/logincheck`,{
            username:this.state.username,
            password:this.state.password
        })
        .then((rr)=>{
            if(rr.data.msg == 'success'){
                alert('Success');
            }else{
                store.addNotification({
                    title: 'Failed',
                    message: rr.data.msg,
                    type: 'danger',                         // 'default', 'success', 'info', 'warning'
                    container: 'top-right',                // where to position the notifications
                    animationIn: ["animated", "flash"],     // animate.css classes that's applied
                    animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
                    showIcon:true,
                    dismiss: {
                      duration: 3000 
                    }
                  })
            }
        })
        .catch(function(error){
            console.log(error)
        })
    }

    render() {
        return (
            <>
                <div className="container col-md-3 mt-5">
                    {/* Default form login */}
                    <form className="text-center border border-light p-5" onSubmit={this.handleSubmit}>
                    <p className="h4 mb-4">Admin Login</p>
                    {/* Email */}
                    <input type="text" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} />
                    {/* Password */}
                    <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
                    
                    {/* Sign in button */}
                    <button className="btn btn-info btn-block my-4" type="submit">Sign in</button>
                   
                    </form>
                    {/* Default form login */}
                </div>
            </>
        )
    }
}
