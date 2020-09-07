import React, { Component } from "react";
import JournalCard from "../components/JournalCard";
import JournalEntry from "../components/JournalEntry";
import {connect} from 'react-redux'
import {getJournals} from "../redux/action";
import {Redirect} from 'react-router-dom'

class JournalContainer extends Component{

    // componentDidMount(){
    //     console.log("component did mount")
    //     this.props.fetchJournals()
    // }

    render(){
        const person = this.props.loggedInUser
        let x = this
        // debugger
        // console.log("in journal", person)
        // console.log("journal attr", person["user"]["journals"])
        // console.log("object key", Object.keys(person["user"]))
        return(
            <div className="journalContainer">
                { this.props.loggedInUser ?
                    <div className="journalContainerFirst">
                    <JournalEntry/>
                    <h1>Previous Journal Entries</h1>
                    {person.user.journals.length > 0 ?
                    person.user.journals.reverse().map(entry => <JournalCard entry={entry} key={entry.id}/>)
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
    return {loggedInUser: state.loggedInUser}
}

// const mdp = (dispatch) =>{
//     return {fetchJournals: () => dispatch(getJournals())}
// }


export default connect(msp)(JournalContainer)