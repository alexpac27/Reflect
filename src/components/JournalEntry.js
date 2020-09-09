import React, {Component} from 'react'
import {prompt} from '../helpers/HelperMethods'
import _ from "lodash";
import {connect} from 'react-redux'
import {postJournal} from "../redux/action";

class JournalEntry extends Component{

    state= {
        input1: "",
        input2:"",
        input3:"",
        prompt: "",
        formComplete: false
    }

    onSubmit = (e) =>{
        e.preventDefault()
        const form = e.target
        const prompt = form.children[0].innerText
        const input1Text = form.children[1].children[0].value
        const input2Text = form.children[2].children[0].value
        const input3Text = form.children[3].children[0].value

        this.setState({
            input1: input1Text,
            input2: input2Text,
            input3: input3Text,
            prompt: prompt,
            formComplete: !this.state.formComplete
        }, () => this.props.postJournal(this.state))

    }


    render(){
        return(
            <div>
                {/* <h1>Today's Entry</h1> */}
                <div >
                    { this.state.formComplete ? 
                    <h1 className="responseLabel">Thank you for submitting</h1> 
                    
                    : 
                        <form className="journalForm" onSubmit={this.onSubmit}>
                        <p className="prompt">{_.sample(prompt)}</p>
                        {/* <p className="prompt">{this.samplePrompt()}</p> */}
                        <span className="numbers">1.  <input name="input1" type="text" className="formInput"></input></span>
                        <span className="numbers">2. <input name="input2" type="text" className="formInput"></input></span>
                        <span className="numbers">3.  <input name="input3" type="text" className="formInput"></input></span>
                        <input type="submit" value="Done" className="formBtn"></input>
                        </form>
                    }
                </div>

            </div>
        )
    }
}

const mdp = (dispatch) =>{
    return {postJournal: (state) => dispatch(postJournal(state))}
}

export default connect(null,mdp)(JournalEntry)



