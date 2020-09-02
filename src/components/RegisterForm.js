import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import {loggedInUser} from '../redux/action'

class LoginForm extends Component{

    state = {
        email: "",
        password: ""
    }


    onChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault()
        console.log("trying to register", this.props.users)  
    }


    render(){
        return( 
                <div className="loginForm">
                    <form onSubmit={this.submitForm}>
                        <h1 className="formLabels">Welcome!</h1>
                        <p>Register as a new user</p>
                        <label className="formLabels">Email</label><br/>
                        <input onChange={this.onChange} name="email" type ="text" id="email" name="email" placeholder="example@email.com" value={this.state.email}/><br/>
                        <br/>
                        <label className="formLabels">Password</label><br/>
                        <input onChange={this.onChange} name="password" type="password" id="password" name="password" placeholder="password" value={this.state.password}/><br/>
                        <br/>
                        <button type="submit" >Submit</button>
                        <Link to='/'>Cancel</Link>
                        
                    </form>
                    
                </div>
           
        )
    }
    
    
}

// const msp = (state) =>{
//     return {users: state.users}
// }

const mdp = (dispatch) => {
    return {loggedInUser: (userObj) => dispatch(loggedInUser(userObj))}
}

export default connect(null, mdp)(LoginForm)


