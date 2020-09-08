import React, { Component } from "react";
import MoodCard from '../components/MoodCard'
import MoodEntry from "../components/MoodEntry";
import {connect} from 'react-redux'
import { getLogs } from "../redux/action";
import {Redirect} from 'react-router-dom'

class MoodContainer extends Component{

    state = {
        history: false,
        btnText: "View History"
    }

    componentDidMount(){
        this.props.fetchLogs()
    }

    showHistory = () => {
        this.setState({history: true})
    }


    render(){
        const foundLogs = this.props.logs.filter(log => log.user_id === this.props.loggedInUser.user.id)
        return(
            <div className="moodContainer">
                { this.props.loggedInUser ?
                <div className="moodContainerFirst">
                    <MoodEntry/>
                    <div className="historyBtnDiv">
                    {/* <button className="divider"></button> */}
                    <button onClick={this.showHistory} className="showHistory">{this.state.btnText}</button>
                    </div>
                    {this.state.history ? 
                    <div className="moodHistory">
                        <h1>Mood History</h1>
                        {this.props.loggedInUser.user.logs.length > 0 ?
                        foundLogs.reverse().map(log => <MoodCard key={log.id} log={log}/>)
                        :
                        <p>No logs yet!</p>
                        }
                    </div>
                    :
                    null
                     }
               </div>
               :
                <Redirect to="/"/>
            }
                
            </div>
        )
    }  
}

const msp = (state) =>{
    return {loggedInUser: state.loggedInUser, logs: state.logs}
}

const mdp = (dispatch) =>{
    return {fetchLogs: () => dispatch(getLogs())}
}


export default connect(msp,mdp)(MoodContainer);