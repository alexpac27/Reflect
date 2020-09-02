import React from 'react'
import LoginForm from '../components/LoginForm'
import {connect} from 'react-redux'
import {userInfo} from '../redux/action'
import { Link, Redirect } from 'react-router-dom';

class Login extends React.Component{

    componentDidMount(){
        this.props.userInfo()
    }

    render(){
        // console.log("logged In user", this.props.loggedInUser)
        return(
            <div>
                {!this.props.loggedInUser ?
            <div className="loginContainer">
                <LoginForm/>
            </div>
            :
            <Redirect to='/moods'/>
                }

            </div>
        )
    }
}

const msp = (state) => {
    return {users: state.users, loggedInUser: state.loggedInUser}
}

const mdp = (dispatch) => {
    return {userInfo: () => dispatch(userInfo())}
}

export default connect(msp,mdp)(Login)