import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import {loggedInUser} from '../redux/action'

class LoginForm extends Component{

    state = {
        email: "",
        password: "",
        error: null
    }


    onChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault()
        const loggedInUser = this.props.users.find(user => user.email === this.state.email)
        if (loggedInUser && loggedInUser.last_name === this.state.password){
            this.props.loggedInUser(loggedInUser)
        } else {
            this.setState({error: "The email and/or password is incorrect. Please try again."})
        }
        
    }
    render(){
        return( 
                <div className="loginForm">
                    <form onSubmit={this.submitForm}>
                        <h1 className="formLabels">Login</h1>
                        <label className="formLabels">Email</label><br/>
                        <input onChange={this.onChange} name="email" type ="text" id="email" name="email" placeholder="example@email.com" value={this.state.email}/><br/>
                        <br/>
                        <label className="formLabels">Password</label><br/>
                        <input onChange={this.onChange} name="password" type="password" id="password" name="password" placeholder="password" value={this.state.password}/><br/>
                        <br/>
                        {this.state.error ? <p>{this.state.error}</p> : null}
                        <button type="submit" >Log In</button>
                        <Link to='/register'>Sign Up</Link>
                        
                    </form>
                    
                </div>
           
        )
    }
    
    
}

const msp = (state) =>{
    return {users: state.users}
}

const mdp = (dispatch) => {
    return {loggedInUser: (userObj) => dispatch(loggedInUser(userObj))}
}

export default connect(msp, mdp)(LoginForm)


