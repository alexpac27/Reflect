import React, { Component } from 'react'
import { Link} from 'react-router-dom';
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
        this.props.createUser(this.state)
    }


    render(){
        return( 
                <div className="loginForm">
                        <h1 className="topLabelWelcome">Welcome!</h1>
                        <p className="topLabelPara">Register as a new user</p>
                    <form onSubmit={this.submitForm}>
                        <label className="formLabels">First Name</label><br/>
                        <input  className="loginInput" required onChange={this.onChange} name="firstName" type ="text"  placeholder="first name" value={this.state.firstName}/><br/>
                        <br/>

                        <label className="formLabels">Last Name</label><br/>
                        <input  className="loginInput" required  onChange={this.onChange} name="lastName" type ="text"  placeholder="last name" value={this.state.lastName}/><br/>
                        <br/>

                        <label className="formLabels">Email</label><br/>
                        <input   className="loginInput" required onChange={this.onChange} name="email" type ="text" placeholder="example@email.com" value={this.state.email}/><br/>
                        <br/>

                        <label className="formLabels">Password</label><br/>
                        <input  className="loginInput" required  onChange={this.onChange} name="password" type="password"  placeholder="password" value={this.state.password}/><br/>
                        <br/>

                        <div className="loginBtns">
                            <button className="enterBtn" type="submit" >Submit</button><br></br>
                            <Link className="altBtnLink" to='/'>Cancel</Link>
                        </div>    
                    </form>
                        {this.props.error ? <p className="errors">{this.props.error}</p> : null}
                    
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


