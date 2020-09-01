import React, { Component } from "react";
import JournalCard from "../components/JournalCard";
import JournalEntry from "../components/JournalEntry";
import {connect} from 'react-redux'
import {getJournals} from "../redux/action";

class JournalContainer extends Component{

    componentDidMount(){
        console.log("component did mount")
        this.props.fetchJournals()
    }

    render(){
        return(
            <div>
                <JournalEntry/>
                <h1>Previous Journal Entries</h1>
                {this.props.journals.reverse().map(entry => <JournalCard entry={entry} key={entry.id}/>)}
            </div>
        )
    }

    
}

const msp = (state) =>{
    return {journals: state.journals}
}

const mdp = (dispatch) =>{
    return {fetchJournals: () => dispatch(getJournals())}
}


export default connect(msp,mdp)(JournalContainer)