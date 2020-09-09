import React, { Component } from 'react'
import { Link} from 'react-router-dom';
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
        //auth code
        console.log("attempted login")
        this.props.loggedInUser(this.state)
        //end of auth code

        // const loggedInUser = this.props.users.find(user => user.email === this.state.email)
        // if (loggedInUser && loggedInUser.last_name === this.state.password){
        //     this.props.loggedInUser(loggedInUser)
        // } else {
        //     this.setState({error: "The email and/or password is incorrect."})
        // }
        
    }
    render(){
        return( 
                <div className="loginForm">
                        <h1 className="topLabel">Login</h1>
                        <div className="loginFormDiv">
                            <form onSubmit={this.submitForm}>
                            <label className="formLabels">Email</label><br/>
                            <input className="loginInput" onChange={this.onChange} name="email" type ="text" id="email" name="email" placeholder="example@email.com" value={this.state.email}/><br/>
                            <br/>
                            <label className="formLabels">Password</label><br/>
                            <input className="loginInput" onChange={this.onChange} name="password" type="password" id="password" name="password" placeholder="password" value={this.state.password}/><br/>
                            <br/>
                            <div className="loginBtns">
                                <button className="enterBtn" type="submit" >Log In</button><br></br>
                                <Link className="altBtnLink" to='/register'>Sign Up</Link>
                            </div>   
                            {this.state.error ? <p className="errors">{this.state.error}</p> : null}
                        </form>
                    </div>
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


