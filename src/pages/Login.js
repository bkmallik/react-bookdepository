import React, { Component } from 'react'
import Header from '../includes/Header'

import $ from 'jquery';

import axios from 'axios';

import { Route, Redirect } from "react-router-dom";

import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

export default class Login extends Component {

    constructor(props){
        super(props)
        this.state={
            email:this.props.email,
            password:this.props.password
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e =>{
        $('#logBtn').hide();
        $('#logLoader').show()
        e.preventDefault();
        axios.post('https://www.learningall.me/api/bookdepository-userdetails/logincheck', {
            name: this.state.name,
            email: this.state.email,
        })
        .then(function (response) {
             if(response.data.msg === 'found'){
                return <Redirect to="/" push={true} />
                // store.addNotification({
                //     title: 'Success',
                //     message: 'Welcome to you.',
                //     type: 'success',                         // 'default', 'success', 'info', 'warning'
                //     container: 'top-right',                // where to position the notifications
                //     animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
                //     animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
                //     showIcon:true,
                //     dismiss: {
                //       duration: 3000 
                //     }
                //   })

                  
                // localStorage.setItem('userlogin', 'true');
                // localStorage.setItem('userEmail', this.state.email);
                // // this.props.history.push("/userhome");
                // // this.history.push("/userhome");
                // <Redirect to="/your-new-location/"  />

                // // window.location.reload();


             }else{
                store.addNotification({
                    title: 'Failed',
                    message: 'Please check your Email and Password',
                    type: 'danger',                         // 'default', 'success', 'info', 'warning'
                    container: 'top-right',                // where to position the notifications
                    animationIn: ["animated", "flash"],     // animate.css classes that's applied
                    animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
                    showIcon:true,
                    dismiss: {
                      duration: 3000 
                    }
                  })
                  $('#logBtn').show();
                  $('#logLoader').hide()
             }
             
        })
        .catch(function (error) {
            console.log(error);
        });        


        
        
    }

    render() {
        return (
            
            <section>
                <Header />
                <div className="container col-md-3 mt-5">
                
                    {/* Default form login */}
                        <form className="text-center border border-light p-5" onSubmit={this.handleSubmit}>
                        <p className="h2 mb-4">Login</p>
                        {/* Email */}
                        <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail" name="email" onChange={this.handleChange} value={this.state.email} />
                        {/* Password */}
                        <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} />
                        <div className="d-flex justify-content-around">
                            <div>
                            {/* Remember me */}
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
                                <label className="custom-control-label" htmlFor="defaultLoginFormRemember">Remember me</label>
                            </div>
                            </div>
                            <div>
                            {/* Forgot password */}
                            <a href>Forgot password?</a>
                            </div>
                        </div>
                        {/* Sign in button */}
                        <button className="btn btn-info btn-block my-4" type="submit" id="logBtn">Sign in</button>
                        <center><img src="loader.gif" max-width="200px" alt="loader" id="logLoader" style={{display:'none',marginTop:'1rem'}}/></center>
                        {/* Register */}
                        <p>Not a member?
                            <a href>Register</a>
                        </p>
                        </form>
                    {/* Default form login */}
                </div>
            </section>
        )
    }
}
