import React, { Component } from 'react'
import AdminHeader from '../../includes/AdminHeader'
import axios from 'axios'
  import { NavLink,withRouter,useLocation  } from 'react-router-dom'
  

import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

export default class UserList extends Component {

    

    constructor(props){
        super(props)
        this.state={
            people:[],
            loading:false
        }
    }

    componentDidMount(){
        axios.get(`https://www.learningall.me/api/bookdepository-userdetails`)
        .then(res => {
            const peoples = res.data
            // console.log(res.data)
            this.setState({ people:peoples,loading:true })
        })
    }

    
    render() {
        return (
            <>
            <div className="container mt-5 mb-5">
            <AdminHeader />
            <br/><br/>
            <h3 className="text-center">UserList</h3>
            <NavLink exact to={'user-create'} className="btn btn-info float-right">Create</NavLink>

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
                                    <td><NavLink exact to={`/userdetails/${peps.id}`} className="text-info">Edit</NavLink></td>
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
