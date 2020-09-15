import React from 'react'
import RegisterForm from '../components/RegisterForm'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';

class Login extends React.Component{

  

    render(){
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