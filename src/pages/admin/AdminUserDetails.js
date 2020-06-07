import React, { Component } from 'react'
import AdminHeader from '../../includes/AdminHeader'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

export default class AdminUserDetails extends Component {

    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            userid:'',
            fname:'',
            lname:'',
            email:'',
            phone:'',
            user:[],
            loading:false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        var id=this.state.id;
        axios.get(`https://www.learningall.me/api/bookdepository-userdetails/${id}/edit`)
        .then(res => {
        
            const peoples = res.data
            // console.log(res.data)
            this.setState({ 
                user:peoples,
                fname:peoples.fname,
                lname:peoples.lname,
                email:peoples.email,
                phone:peoples.phone,
                loading:true
             })
        })
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

       


        const products = {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            phone: this.state.phone,
        }
        let uri = 'https://www.learningall.me/api/bookdepository-userdetails/'+this.state.id;
        axios.patch(uri, products)
        
        .then((rr)=>{

            if(rr.data.message == 'Success'){
                    this.setState({
                        fname:'',
                        lname:'',
                        email:'',
                        phone:'',
                    })
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
                  this.props.history.push('/userlist');
                    }else{
                            store.addNotification({
                            title: 'Failed',
                            message: rr.data.message,
                            type: 'danger',                         // 'default', 'success', 'info', 'warning'
                            container: 'top-right',                // where to position the notifications
                            animationIn: ["animated", "flash"],     // animate.css classes that's applied
                            animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
                            showIcon:true,
                            dismiss: {
                            duration: 3000 
                            }
                        })
                  
                
            }
            // this.props.history.push('/userlist');
            // <Redirect to='/adminhome'  />

        })

    }

    handleDelete=(event)=>{
        event.preventDefault();
        const param =this.state.id;
        let uri = 'https://www.learningall.me/api/bookdepository-userdetails/'+param;
        axios.delete(uri,{})
        
        .then((rr)=>{

            if(rr.data.message == 'Success'){
                    
              this.props.history.push('/userlist')
                
            }else{
                           
                  
                
            }

        })
    }

    
    render() {
        return (
        <>
            <div className="container mt-5 mb-5">
                <AdminHeader />
                <h2>Edit {this.state.fname}</h2>
                <button onClick={this.handleDelete} className="btn btn-danger float-right">Delete</button>
            </div>
            <div className="container mt-5 mb-5 col-md-4">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" name="fname" value={this.state.fname} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" name="lname" value={this.state.lname} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input type="text" className="form-control" name="phone" value={this.state.phone} onChange={this.handleChange} />
                </div>
                
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
            </div>
        </>
        )
    }
}
