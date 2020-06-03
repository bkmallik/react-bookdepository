import React, { Component } from 'react'
import AdminHeader from '../../includes/AdminHeader'
import { useLocation } from 'react-router-dom'

export default class AdminUserDetails extends Component {
    render() {
        return (
            <>
            <div className="container mt-5 mb-5">
            <AdminHeader />
            <h2>Hello from user details</h2>
            {this.props.match.params.id}
            </div>
            </>
        )
    }
}
