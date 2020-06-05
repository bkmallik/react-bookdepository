import React, { Component } from 'react'
import AdminHeader from '../../includes/AdminHeader'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

export default class AdminUserDetails extends Component {

    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            user:[],
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        var id=this.state.id;
        axios.get(`https://www.learningall.me/api/bookdepository-userdetails/${id}/edit`)
        .then(res => {
        
            const peoples = res.data
            // console.log(res.data)
            this.setState({ user:peoples,loading:true })
        })
    }


    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        return (
        <>
            <div className="container mt-5 mb-5">
                <AdminHeader />
                <h2>Edit {this.state.user.fname}</h2>
            </div>
            <div className="container mt-5 mb-5 col-md-4">
            <form>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" value={this.state.user.email} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input type="text" className="form-control" value={this.state.user.phone} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" value={this.state.user.fname} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" value={this.state.user.lname} onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
            </div>
        </>
        )
    }
}
