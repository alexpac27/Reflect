import React from 'react'
import LoginForm from '../components/LoginForm'
import {connect} from 'react-redux'
import {userInfo} from '../redux/action'
import { Redirect} from 'react-router-dom';

class Login extends React.Component{

    componentDidMount(){
        const token = localStorage.getItem("token")
        if (token){
            fetch("http://localhost:3000/api/v1/profile", {
                method: "GET",
                headers:{Authorization: `Bearer ${token}`}
            })
            .then(resp => resp.json())
            .then(data => this.props.userInfo(data))
        } else{
            console.log("logged out")
        }
    }

    render(){
        return(
            <div>
                {!this.props.loggedInUser ?
            <div className="loginContainer">
                <LoginForm/>
            </div>
            :
            <Redirect to='/reflect'/>
                }

            </div>
        )
    }
}

const msp = (state) => {
    return {loggedInUser: state.loggedInUser}
}

const mdp = (dispatch) => {
    return {userInfo: (user) => dispatch(userInfo(user))}
}

export default connect(msp, mdp)(Login)