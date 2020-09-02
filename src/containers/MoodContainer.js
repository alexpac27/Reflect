import React, { Component } from "react";
// import { render } from "@testing-library/react";
import MoodCard from '../components/MoodCard'
import MoodEntry from "../components/MoodEntry";
import {connect} from 'react-redux'
import { getLogs } from "../redux/action";
import {Redirect} from 'react-router-dom'

class MoodContainer extends Component{

    componentDidMount(){
        this.props.fetchLogs()
    }

    render(){
        return(
            <div>
                { this.props.loggedInUser ?
                <div>
                <MoodEntry/>
                <h1>Mood History</h1>
               {this.props.logs.reverse().map(log => <MoodCard key={log.id} log={log}/>)}
               </div>
               :
                <Redirect to="/"/>
            }
                
            </div>
        )
    }  
}

const msp = (state) =>{
    return {logs: state.logs, loggedInUser: state.loggedInUser}
}

const mdp = (dispatch) =>{
    return {fetchLogs: () => dispatch(getLogs())}
}

export default connect(msp,mdp)(MoodContainer);