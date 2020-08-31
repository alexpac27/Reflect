import React from 'react'
import LoginForm from '../components/LoginForm'

class Login extends React.Component{
    render(){

        return(
            <div className="loginContainer">
                <LoginForm/>
            </div>
        )
    }
}

export default Login