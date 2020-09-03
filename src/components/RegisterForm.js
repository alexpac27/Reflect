import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import {createUser} from '../redux/action'

class LoginForm extends Component{

    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    }


    onChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault()
        // console.log("trying to register", this.state)  
        this.props.createUser(this.state)
    }


    render(){
        return( 
                <div className="loginForm">
                    <form onSubmit={this.submitForm}>
                        <h1 className="formLabels">Welcome!</h1>
                        <p>Register as a new user</p>
                        <label className="formLabels">First Name</label><br/>
                        <input required onChange={this.onChange} name="firstName" type ="text"  placeholder="First name" value={this.state.firstName}/><br/>
                        <br/>
                        <label className="formLabels">Last Name</label><br/>
                        <input required  onChange={this.onChange} name="lastName" type ="text"  placeholder="Last name" value={this.state.lastName}/><br/>
                        <br/>
                        <label className="formLabels">Email</label><br/>
                        <input  required onChange={this.onChange} name="email" type ="text" placeholder="example@email.com" value={this.state.email}/><br/>
                        <br/>
                        <label className="formLabels">Password</label><br/>
                        <input required  onChange={this.onChange} name="password" type="password"  placeholder="password" value={this.state.password}/><br/>
                        <br/>
                        {this.props.error ? <p>{this.props.error}</p> : null}
                        <button type="submit" >Submit</button>
                        <Link to='/'>Cancel</Link>
                        
                    </form>
                    
                </div>
           
        )
    }
    
    
}

const msp = (state) =>{
    return {error: state.error}
}

const mdp = (dispatch) => {
    return {createUser: (state) => dispatch(createUser(state))}
}

export default connect(msp, mdp)(LoginForm)


