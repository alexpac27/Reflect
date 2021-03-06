import React, {Component} from 'react'
import {changeDate} from '../helpers/HelperMethods'
import {connect} from 'react-redux'
import {changeEntry} from '../redux/action'


class JournalCard extends Component{

    removeJournal = () => {
        this.props.changeEntry(this.props.entry.id)
    }

    render(){
        return(
            <div className="journalCard">
                <p className="journalDate">{changeDate(this.props.entry.created_at)}</p>
                <p className="cardPrompt"><b>{this.props.entry.prompt} </b></p>
                <p className="entryResp">1. {this.props.entry.resp1}</p>
                <p className="entryResp">2. {this.props.entry.resp2}</p>
                <p className="entryResp">3. {this.props.entry.resp3}</p>
                <div className="moodBtns">
                    <button onClick={this.removeJournal}>X</button>
                </div>
            </div>
        )
    }
}

const mdp = (dispatch) => {
    return {changeEntry: (id) => dispatch(changeEntry(id))}
}

export default connect(null, mdp)(JournalCard)
