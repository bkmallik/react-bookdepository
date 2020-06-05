import React, { Component } from 'react'
import AdminHeader from '../../includes/AdminHeader'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    Redirect
  } from "react-router-dom";


export default class UserList extends Component {

    state={
        people:[],
        loading:false
    }

    componentDidMount(){
        axios.get(`https://www.learningall.me/api/bookdepository-userdetails`)
        .then(res => {
            const peoples = res.data
            // console.log(res.data)
            this.setState({ people:peoples,loading:true })
        })
    }

    handleDelete = param => e => {
        
        alert(param)
    };

    render() {
        return (
            <>
            <div className="container mt-5 mb-5">
            <AdminHeader />
            <br/><br/>
            <h3 className="text-center">UserList</h3>
                <table class="table">
                    <thead class="black white-text">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    

                    {(() => {
                            if (this.state.loading == false) {
                            return (
                                <>
                                <br/>
                                    <h2>Loading...</h2>
                                <br/>
                                </>
                            )
                            } else {
                            return (
                                <>
                                <tbody>
                                {this.state.people.map(peps=>
                                    <tr>
                                    <td>{peps.fname} {peps.lname}</td>
                                    <td>{peps.email}</td>
                                    <td>{peps.phone}</td>
                                    <td><NavLink exact to={`/userdetails/${peps.id}`} className="text-info">Edit</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p onClick={this.handleDelete(peps.id)} style={{cursor: 'pointer'}} className="text-danger">Delete</p></td>
                                </tr>)}
                                </tbody>
                                </>
                            )
                            }
                        })()}

                        
                    
                </table>
            </div> 
            </>
        )
    }
}
