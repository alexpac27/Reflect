import React, {Component} from 'react'
import {connect} from 'react-redux'
import {submitLog} from '../redux/action'
import Calendar from './Calendar.js'


class MoodEntry extends Component{

    state = {
        tagArray: [],
        mood: "Happy",
        request: "add",
        formComplete: false,
        work: "tagBtn",
        school: "tagBtn",
        family: "tagBtn",
        friends: "tagBtn",
        travel: "tagBtn",
        selfCare: "tagBtn",
        relationships: "tagBtn",
        calm: "tagBtn",
        money: "tagBtn",
        food: "tagBtn",
        spirituality: "tagBtn",
        health: "tagBtn"
        
    }

    moodTag = (e) => {
        e.preventDefault()
        const tag = e.target.name
        if (this.state.tagArray.length < 5){
            if (this.state[tag] === "tagBtn"){
                this.setState({ [e.target.name] : "btnPressed" })
                const updated = this.state.tagArray.concat(e.target.innerText)
                this.setState({ tagArray: updated })
            } else if (this.state[tag] !== "tagBtn"){
                this.setState({ [e.target.name] : "tagBtn" })
                const filtered = this.state.tagArray.filter(tag => tag !== e.target.innerText)
                this.setState({ tagArray: filtered })
            }
        } else if (this.state.tagArray.length = 5){
            if (this.state[tag] !== "tagBtn"){
                this.setState({ [e.target.name] : "tagBtn" })
                const filtered = this.state.tagArray.filter(tag => tag !== e.target.innerText)
                this.setState({ tagArray: filtered })
            }
        }
    }

    submitMood = (e) =>{
        e.preventDefault()
        this.setState({formComplete: !this.state.formComplete}, () => this.props.submitLog(this.state, this.props.loggedInUser))
    }

    moodSelect = (e) =>{
        this.setState({
            mood: e.target.value
        })
    }

    render(){
        return(
            <div>
                {/* <h1>Today's Mood Entry</h1> */}

                <div >
                    { this.state.formComplete ? 
                    <div>
                    {/* <h1 className="responseLabel">Thank you for submitting</h1>  */}
                    <Calendar/>
                    </div>
                    : 
                        <form className="moodForm" onSubmit={this.submitMood}>
                            <label className="moodLabel">How are you feeling today?</label>
                            <select onChange={this.moodSelect} className="articleDD">
                                <option selected value="Happy">Happy</option>
                                <option value="Excited">Excited</option>
                                <option value="Grateful">Grateful</option>
                                <option value="Relaxed">Relaxed</option>
                                <option value="Content">Content</option>
                                <option value="Tired">Tired</option>
                                <option value="Unsure">Unsure</option>
                                <option value="Bored">Bored</option>
                                <option value="Anxious">Anxious</option>
                                <option value="Angry">Angry</option>
                                <option value="Stressed">Stressed</option>
                                <option value="Sad">Sad</option>
                            </select>
                            <p>Select up to 5 tags</p>
                            <div className="tagBtnContainer">
                                <button onClick={this.moodTag} name="work" className={this.state.work}>Work</button>
                                <button onClick={this.moodTag} name="school" className={this.state.school}>School</button>
                                <button onClick={this.moodTag} name="family" className={this.state.family}>Family</button>
                                <button onClick={this.moodTag} name="friends" className={this.state.friends}>Friends</button>
                                <button onClick={this.moodTag} name="travel" className={this.state.travel}>Travel</button>
                                <button onClick={this.moodTag} name="selfCare" className={this.state.selfCare}>Self Care</button>
                                <button onClick={this.moodTag} name="relationships" className={this.state.relationships}>Relationships</button>
                                <button onClick={this.moodTag} name="calm" className={this.state.calm}>Calm</button>
                                <button onClick={this.moodTag} name="money" className={this.state.money}>Money</button>
                                <button onClick={this.moodTag} name="food" className={this.state.food}>Food</button>
                                <button onClick={this.moodTag} name="spirituality" className={this.state.spirituality}>Spirituality</button>
                                <button onClick={this.moodTag} name="health" className={this.state.health}>Health</button>
                            </div>
                            <input className="moodSubmitBtn" type="submit" value="Done"></input>
                        </form>
                    }
                </div>
            </div>
        )
    }
}

const msp = (state) =>{
    return { loggedInUser: state.loggedInUser}
}

const mdp = (dispatch) =>{
    return {submitLog: (state, user) => dispatch(submitLog(state, user))}
}

export default connect(msp, mdp)(MoodEntry)
