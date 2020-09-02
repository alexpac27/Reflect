import React, { Component } from "react";
import JournalCard from "../components/JournalCard";
import JournalEntry from "../components/JournalEntry";
import {connect} from 'react-redux'
import {getJournals} from "../redux/action";
import {Redirect} from 'react-router-dom'

class JournalContainer extends Component{

    componentDidMount(){
        console.log("component did mount")
        this.props.fetchJournals()
    }

    render(){
        return(
            <div>
                { this.props.loggedInUser ?
                    <div>
                    <JournalEntry/>
                    <h1>Previous Journal Entries</h1>
                    {this.props.journals.reverse().map(entry => <JournalCard entry={entry} key={entry.id}/>)}
                    </div>
                    :
                    <Redirect to="/"/>
                }
            </div>
        )
    }

    
}

const msp = (state) =>{
    return {journals: state.journals, loggedInUser: state.loggedInUser}
}

const mdp = (dispatch) =>{
    return {fetchJournals: () => dispatch(getJournals())}
}


export default connect(msp,mdp)(JournalContainer)