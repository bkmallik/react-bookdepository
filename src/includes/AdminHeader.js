import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    Redirect
  } from "react-router-dom";

export default class AdminHeader extends Component {

    logout=e=>{
        localStorage.clear();
        this.props.history.push(`/`, null);
    }

    render() {
        return (
            <div>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <NavLink exact  to="/adminhome" className="nav-link" activeClassName="active">Dashboard</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/userlist" className="nav-link" activeClassName="active">User</NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Products</a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link" onClick={this.logout}>Logout</a>
                    </li>
                </ul>
            </div>
        )
    }
}
