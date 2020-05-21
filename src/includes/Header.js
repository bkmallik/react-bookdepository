import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    Redirect
  } from "react-router-dom";


export default class Header extends Component {


    handleSubmit=e=>{
        localStorage.clear();
        return <Redirect to="/login" />;
    }

    render() {

        const logindata = localStorage.getItem('userlogin') === 'true'


        if(logindata){
            return (
                <>
                    <section>
                   
                    {/*Navbar*/}
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                    {/* Navbar brand */}
                    <Link className="navbar-brand" to="/"><img src="logo.png" width="150px"/></Link>
                    {/* Collapse button */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* Collapsible content */}
                    
                    <div className="collapse navbar-collapse" id="basicExampleNav">
                        {/* Links */}
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                        <NavLink exact  to="/" className="nav-link" activeClassName="active">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact  to="/about" className="nav-link" activeClassName="active">About</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact  to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
                        </li>
                        {/* Dropdown */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Books</a>
                            <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                            <NavLink className="dropdown-item" to="allstudents" activeClassName="myactive">Show All</NavLink>
                            <NavLink className="dropdown-item" to="create-student" activeClassName="myactive">Create</NavLink>
                            </div>
                        </li>
                        </ul>
                        {/* Links */}
                        <form className="form-inline">
                        <div className="md-form my-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                        </div>
                        </form>
                    
                            <ul className="navbar-nav">
                            <li className="nav-item">
                            <NavLink exact onClick={this.handleSubmit}  to="/login" className="nav-link" activeClassName="active">Logout</NavLink>
                            </li>
                            </ul>
                    </div>               
                    {/* Collapsible content */}
                    </div>
                    </nav>
                    {/*/.Navbar*/}
                </section>
                </>
            )


            
        }else{
            return (
                <>
                    <section>
                   
                    {/*Navbar*/}
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                    {/* Navbar brand */}
                    <Link className="navbar-brand" to="/"><img src="logo.png" width="150px"/></Link>
                    {/* Collapse button */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* Collapsible content */}
                    
                    <div className="collapse navbar-collapse" id="basicExampleNav">
                        {/* Links */}
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                        <NavLink exact  to="/" className="nav-link" activeClassName="active">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact  to="/about" className="nav-link" activeClassName="active">About</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact  to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
                        </li>
                        {/* Dropdown */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Books</a>
                            <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                            <NavLink className="dropdown-item" to="allstudents" activeClassName="myactive">Show All</NavLink>
                            <NavLink className="dropdown-item" to="create-student" activeClassName="myactive">Create</NavLink>
                            </div>
                        </li>
                        </ul>
                        {/* Links */}
                        <form className="form-inline">
                        <div className="md-form my-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                        </div>
                        </form>
                    
                            <ul className="navbar-nav">
                            <li className="nav-item">
                            <NavLink exact  to="/login" className="nav-link" activeClassName="active">Login</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink exact  to="/register" className="nav-link" activeClassName="active">Register</NavLink>
                            </li>
                            </ul>
                    </div>               
                    {/* Collapsible content */}
                    </div>
                    </nav>
                    {/*/.Navbar*/}
                </section>
                </>
            )
        }
    }
}
