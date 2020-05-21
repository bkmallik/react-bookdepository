import React, { Component } from 'react'
import Header from '../includes/Header'



export default class Home extends Component {
    render() {
        return (
            <>
            <Header />
            <center>
                <img src="logo.png" className="myHeroLogo" alt="" />
            </center>
            </>
        )
    }
}
