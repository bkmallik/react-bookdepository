import React, { Component } from 'react'
import Header from '../includes/Header'

import $ from 'jquery';
import axios from 'axios';

import Login from './Login'

import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

import ReactFormValidation from "react-form-input-validation";


export default class Register extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            fields: {
                fname:'',
                lname:'',
                email:'',
                password:'',
                phone:'',
            },
            loginSuccess:false,
            errors: {}
          };

        this.form = new ReactFormValidation(this);
        this.form.useRules({
            fname: "required",
            lname: "required",
            password: "required",
            email: "required|email|email_available",
            phone: "required|numeric|digits_between:10,12",
        });
        this.form.onformsubmit = (fields) => {
        //FORM SUBMIT
        // alert(fields.fname);
        console.log(fields.fname);




        $('#regBtn').hide();
        $('#regLoader').show();

        axios.post('https://www.learningall.me/api/bookdepository-userdetails',{
            fname: fields.fname,
            lname: fields.lname,
            email: fields.email,
            password: fields.password,
            phone: fields.phone
        })
        .then(function(response){
          $('#regBtn').show();
          $('#regLoader').hide();
          console.log(response.data.message);

          store.addNotification({
              title: 'Success',
              message: 'Your account has been created. Now You Can Login',
              type: 'success',                         // 'default', 'success', 'info', 'warning'
              container: 'top-right',                // where to position the notifications
              animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
              animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
              showIcon:true,
              dismiss: {
                duration: 3000 
              }
            })

        })
        .catch(function(error){
            console.log(error)
        })

        this.setState({
            // fields: {
            //     fname:'',
            //     lname:'',
            //     email:'',
            //     password:'',
            //     phone:'',
            // },
            loginSuccess:true
      })





        //FORM SUBMIT
        }


        //CHECK EMAIL AVAILABILITY
        ReactFormValidation.registerAsync('email_available', function(email, attribute, req, passes) {
            
            $('#regBtn').hide();
            $('#regLoader').show();

            axios.get(`https://www.learningall.me/api/bookdepository-userdetails/emailcheck/${email}`)
            .then(res => {
                console.log(res.data.msg);

                $('#regBtn').show();
                $('#regLoader').hide();

                setTimeout(() => {
                if (res.data.msg === "found")
                    passes(false, 'Email has already been taken.');
                else
                    passes();
                }, 1000);
            })
            .catch(function(error){
                passes();
            })


            // setTimeout(() => {
            //   if (username === "found")
            //     passes(false, 'Username has already been taken.'); // if username is not available
            //   else
            //     passes();
            // }, 1000);
          })
      };
      //CHECK EMAIL AVAILABILITY


      
      


    //   handleChange=(e)=>{
    //       this.setState({
    //           [e.target.name]: e.target.value
    //       })
    //   }

      handleSubmit=(e)=>{
          e.preventDefault();
          $('#regBtn').hide();
          $('#regLoader').show();

          axios.post('https://www.learningall.me/api/bookdepository-userdetails',{
              fname: this.state.fname,
              lname: this.state.lname,
              email: this.state.email,
              password: this.state.password,
              phone: this.state.phone
          })
          .then(function(response){
            $('#regBtn').show();
            $('#regLoader').hide();
            console.log(response.data.message);

            store.addNotification({
                title: 'Success',
                message: 'Your account has been created. Now You Can Login',
                type: 'success',                         // 'default', 'success', 'info', 'warning'
                container: 'top-right',                // where to position the notifications
                animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
                animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
                showIcon:true,
                dismiss: {
                  duration: 3000 
                }
              })

          })
          .catch(function(error){
              console.log(error)
          })

          this.setState({
            fname:'',
            lname:'',
            email:'',
            password:'',
            phone:'',
        })

        this.props.history.push(`/login/`, null);
          
      }


    render() {

        const isSuccess= this.state.loginSuccess;        


        return (
            <>
            
            {
                this.state.loginSuccess ?
                <Login email={this.state.fields.email} password={this.state.fields.password} />
                //END LOGIN
                :
                // REGISTER
                <section>
                <Header />
                <div className="container col-md-3 mt-5">
                    {/* Default form register */}
                        {/* <form id="myForm" className="text-center border border-light p-5" onSubmit={this.handleSubmit}> */}
                        <form id="myForm" className="text-center border border-light p-5" onSubmit={this.form.handleSubmit}>
                            <p className="h2 mb-4">Register</p>
                            <div className="form-row mb-4">
                                <div className="col">
                                {/* First name */}
                                <input type="text" id="defaultRegisterFormFirstName" className="form-control" data-attribute-name="First Name" placeholder="First name" name="fname" onChange={this.form.handleChangeEvent} value={this.state.fields.fname} />
                                {this.state.errors.fname ? this.state.errors.fname : ""}
                                </div>
                                <div className="col">
                                {/* Last name */}
                                <input type="text" id="defaultRegisterFormLastName" className="form-control" data-attribute-name="Last Name" placeholder="Last name" name="lname" onChange={this.form.handleChangeEvent} value={this.state.fields.lname}  />
                                {this.state.errors.lname ? this.state.errors.lname : ""}
                                </div>
                            </div>
                            <div className="form-row mb-4">
                            <div className="col">
                            {/* E-mail */}
                            <input type="email" id="defaultRegisterFormEmail" className="form-control" data-attribute-name="E-mail" data-async placeholder="E-mail" name="email" onChange={this.form.handleChangeEvent} value={this.state.fields.email} />
                            {this.state.errors.email ? this.state.errors.email : ""}
                            </div>
                            </div>

                            <div className="form-row mb-4">
                            <div className="col">
                            {/* Password */}
                            <input type="password" id="defaultRegisterFormPassword" className="form-control" data-attribute-name="Password" placeholder="Password" name="password" onChange={this.form.handleChangeEvent} value={this.state.fields.password} aria-describedby="defaultRegisterFormPasswordHelpBlock" />
                            {this.state.errors.password ? this.state.errors.password : ""}
                            </div>
                            </div>

                            <div className="form-row mb-4">
                            <div className="col">
                            {/* Phone number */}
                            <input type="text" id="defaultRegisterPhonePassword" className="form-control" data-attribute-name="Phone Number" placeholder="Phone number" name="phone" onChange={this.form.handleChangeEvent} value={this.state.fields.phone} aria-describedby="defaultRegisterFormPhoneHelpBlock" />
                            {this.state.errors.phone ? this.state.errors.phone : ""}
                            </div>
                            </div>
                            
                            {/* Sign up button */}
                            <button className="btn btn-info my-4 btn-block" type="submit" id="regBtn">Register</button>
                            <center><img src="loader.gif" max-width="200px" alt="loader" id="regLoader" style={{display:'none',marginTop:'1rem'}}/></center>
                        </form>
                    {/* Default form register */}
                </div>
            </section>

            }

           </> 
        )
    }
}