import React, { Component } from 'react'
import AdminHeader from '../../includes/AdminHeader'
import axios from 'axios';

import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

export default class AdminUserCreate extends Component {

    constructor(props){
        super(props)
        this.state = {
            fname:'',
            lname:'',
            email:'',
            phone:'',
            password:'',
        }
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(e){
        this.setState({
            [e.target.name] : [e.target.value]
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        alert(this.state.fname)
        axios.post('https://www.learningall.me/api/bookdepository-userdetails',{
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            password: this.state.password,
            phone: this.state.phone
        })
        .then((rr)=>{
            if(rr.data.success){
                this.props.history.push('/userlist');
                store.addNotification({
                    title: 'Success',
                    message: 'Updated Successfully',
                    type: 'success',                         // 'default', 'success', 'info', 'warning'
                    container: 'top-right',                // where to position the notifications
                    animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
                    animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
                    showIcon:true,
                    dismiss: {
                      duration: 3000 
                    }
                  })
            }else{
                
            }
        })
        
       
    }

    render() {
        return (
            <>
                <div className="container mt-5 mb-5">
                <AdminHeader />
                <br/><br/>
                <h3 className="text-center">Create User</h3>
                    <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Fname:</label>
                        <input type="text" className="form-control" name="fname" value={this.state.fname} onChange={this.onChangeValue} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Lname:</label>
                        <input type="text" className="form-control" name="lname" value={this.state.lname} onChange={this.onChangeValue} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.onChangeValue} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Phone:</label>
                        <input type="text" className="form-control" name="phone" value={this.state.phone} onChange={this.onChangeValue} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Password:</label>
                        <input type="text" className="form-control" name="password" value={this.state.password} onChange={this.onChangeValue} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" >Create</button>
                    </div>
                    </form>
                </div>
            </>
        )
    }
}
