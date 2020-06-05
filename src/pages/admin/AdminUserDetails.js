import React, { Component } from 'react'
import AdminHeader from '../../includes/AdminHeader'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

export default class AdminUserDetails extends Component {

    state={
        id:this.props.match.params.id,
        user:[]
    }

    componentDidMount(){
        var id=this.state.id;
        axios.get(`https://www.learningall.me/api/bookdepository-userdetails/${id}/edit`)
        .then(res => {
            
            const peoples = res.data
            // console.log(res.data)
            this.setState({ user:peoples,loading:true })

           


        })
        console.log(this.state.user)
    }

    render() {
        return (
        <>
            <div className="container mt-5 mb-5">
                <AdminHeader />
                <h2>Hello from user details</h2>
                {/* {this.props.match.params.id}     */}
                {console.log(this.state.id)}
            </div>
            <div className="container mt-5 mb-5 col-md-4">
                {this.state.id}
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" value={this.state.user.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Phone</label>
                    <input type="text" className="form-control" value={this.state.user.phone} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">First Name</label>
                    <input type="text" className="form-control" value={this.state.user.fname} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Last Name</label>
                    <input type="text" className="form-control" value={this.state.user.lname} />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
            </div>
        </>
        )
    }
}
