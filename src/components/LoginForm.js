import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'

class LoginForm extends Component{

    state = {
        email: "",
        password: ""
    }

    // componentDidMount(){
    //     this.props.fetchUsers()
    // }

    onChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault()
        console.log("submitted")
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
                    <button type="submit" >Log In</button>
                    <Link to='/register'>Sign Up</Link>
                    
                </form>
                
            </div>
        )
    }
    
    
}

// const mdp = (dispatch) => {
//     return {handleLogin: () => dispatch(handleLogin())}
// }

export default LoginForm
// export default connect(null, mdp)(LoginForm)

