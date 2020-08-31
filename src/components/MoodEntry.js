import React, {Component} from 'react'
import {connect} from 'react-redux'
import {submitLog} from '../redux/action'


class MoodEntry extends Component{

    state = {
        tagArray: [],
        mood: "Happy",
        request: "add"
    }

    moodTag = (e) => {
        e.preventDefault()
        if (this.state.tagArray.length <= 4 ){
            const updated = this.state.tagArray.concat(e.target.innerText)
            this.setState({
                tagArray: updated
            })
        }
    }

    submitMood = (e) =>{
        e.preventDefault()
        this.props.submitLog(this.state)
    }

    moodSelect = (e) =>{
        this.setState({
            mood: e.target.value
        })
    }

    render(){
        return(
            <div>
                <h1>Today's Mood Entry</h1>
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
                        <button onClick={this.moodTag} className="tagBtn">Work</button>
                        <button onClick={this.moodTag} className="tagBtn">School</button>
                        <button onClick={this.moodTag} className="tagBtn">Family</button>
                        <button onClick={this.moodTag} className="tagBtn">Friends</button>
                        <button onClick={this.moodTag} className="tagBtn">Travel</button>
                        <button onClick={this.moodTag} className="tagBtn">Self Care</button>
                        <button onClick={this.moodTag} className="tagBtn">Relationships</button>
                        <button onClick={this.moodTag} className="tagBtn">Calm</button>
                        <button onClick={this.moodTag} className="tagBtn">Money</button>
                        <button onClick={this.moodTag} className="tagBtn">Food</button>
                        <button onClick={this.moodTag} className="tagBtn">Spirituality</button>
                        <button onClick={this.moodTag} className="tagBtn">Health</button>
                    </div>
                    <input className="moodSubmitBtn" type="submit" value="Done"></input>
                </form>

            </div>
        )
    }
}


const mdp = (dispatch) =>{
    return {submitLog: (state) => dispatch(submitLog(state))}
}
export default connect(null, mdp)(MoodEntry)
