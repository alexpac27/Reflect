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
        const foundJournals = this.props.journals.filter(journal => journal.user_id === this.props.loggedInUser.user.id)
        console.log("found journals : ", foundJournals)

        const person = this.props.loggedInUser
        let x = this

        return(
            <div className="journalContainer">
                { this.props.loggedInUser ?
                    <div className="journalContainerFirst">
                    <JournalEntry/>
                    <h1>Previous Journal Entries</h1>
                    {person.user.journals.length > 0 ?
                    foundJournals.reverse().map(entry => <JournalCard entry={entry} key={entry.id}/>)
                    :
                    <p>no jounrals yet</p>
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
    return {loggedInUser: state.loggedInUser, journals: state.journals}
}

const mdp = (dispatch) =>{
    return {fetchJournals: () => dispatch(getJournals())}
}


export default connect(msp, mdp)(JournalContainer)