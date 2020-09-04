import React from 'react'
import RegisterForm from '../components/RegisterForm'
import {connect} from 'react-redux'
import {userInfo} from '../redux/action'
import { Link, Redirect } from 'react-router-dom';

class Login extends React.Component{

  

    render(){
        // console.log("logged In user", this.props.loggedInUser)
        return(
            <>
            {!this.props.loggedInUser ?
            
            <div className="loginContainer">
                <RegisterForm/>
            </div>
            :
            <Redirect to='/moods'/>
        }
            </>
            
        )
    }
}

const msp = (state) => {
    return {users: state.users, loggedInUser: state.loggedInUser}
}



export default connect(msp)(Login)