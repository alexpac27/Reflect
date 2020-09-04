import React from 'react'
import { Link} from "react-router-dom";
import {connect} from 'react-redux'
import {logOut} from '../redux/action'

class NavBar extends React.Component{

    logOut = () =>{
        console.log("logging out")
        this.props.logOut()
    }

    render(){

        return(
            <div className="navBar">
                <Link to='/moods' className="tabTitle">Track Mood</Link>
                <Link to='/journal' className="tabTitle">Gratitude</Link>
                <Link to='/breathe' className="tabTitle">Breathe</Link>
                <Link to='/resources' className="tabTitle">Wellness</Link>
                <Link to='/profile' className="tabTitle">Profile</Link>
                {this.props.loggedInUser ?
                    <Link to='/' onClick={this.logOut} className="tabTitle">Log Out</Link>
                :    
                    <Link to='/' className="tabTitle">Log In</Link> 
                }
                
            </div>
        )
    }
        
}

const msp = (state) =>{
    return {loggedInUser: state.loggedInUser}
}

const mdp = (dispatch) => {
    return {logOut: () => dispatch(logOut())}
}

export default connect(msp, mdp)(NavBar)