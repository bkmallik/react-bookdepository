import React, { Component } from 'react'
import AdminHeader from '../../includes/AdminHeader'
import axios from 'axios'

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

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUpdate(e){
       this.setState({
           [e.target.name] : e.target.value
       })
    }

    handleSubmit(e){
        e.preventDefault();

        axios.post('https://www.learningall.me/api/bookdepository-userdetails',{
            fname:this.state.fname,
            lname:this.state.lname,
            email:this.state.email,
            phone:this.state.phone,
            password:this.state.password,

        })
        .then((response)=>{
            console.log(response);
            if(response.data.success){
                this.props.history.push('userlist');
            }else{
                alert('No');
            }
        },(error)=>{
            console.log(error)
        })
    }

    render() {
        return (
            <>
            <div className="container mt-5 mb-5">
            <AdminHeader />
            <br/>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Fname:</label>
                        <input type="text" className="form-control" value={this.state.fname} name="fname" onChange={this.handleUpdate} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Lname:</label>
                        <input type="text" className="form-control" value={this.state.lname} name="lname" onChange={this.handleUpdate} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email:</label>
                        <input type="text" className="form-control" value={this.state.email} name="email" onChange={this.handleUpdate} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Phone:</label>
                        <input type="text" className="form-control" value={this.state.phone} name="phone" onChange={this.handleUpdate} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password:</label>
                        <input type="text" className="form-control" value={this.state.password} name="password" onChange={this.handleUpdate} />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="Create" />
                    </div>
                </form>
            </div>
            </>
        )
    }
}
