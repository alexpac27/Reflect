import React, {Component} from 'react'
import {changeDate} from '../helpers/HelperMethods'
import {connect} from 'react-redux'
import {changeMood} from '../redux/action'



class MoodCard extends Component{

    state = {
        delete: false,
        update: false,
        showForm: false,
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

// from Mood entry

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
            this.setState({formComplete: !this.state.formComplete, showForm: false}, () => this.props.changeMood(this.props.log.id, this.state))
        }


        moodSelect = (e) =>{
            this.setState({
                mood: e.target.value
            })
        }

// end of Mood entry code


    deleteMood = () => {
        this.setState({delete: !this.state.delete}, () => this.props.changeMood(this.props.log.id, this.state))
    }

    updateMood = () =>{
        this.setState({ showForm: true, update: true })
    }

    cancelEdit = () =>{
        this.setState({ showForm: false })
    }
    
    render(){
       
        return(
            <div>
                
            {this.state.showForm ? 
            <div>
                <form className="moodForm" onSubmit={this.submitMood}>
                <label className="moodLabel">Update today's mood</label>
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
                    <button onClick={this.moodTag} name="self Care" className={this.state.selfCare}>Self Care</button>
                    <button onClick={this.moodTag} name="relationships" className={this.state.relationships}>Relationships</button>
                    <button onClick={this.moodTag} name="calm" className={this.state.calm}>Calm</button>
                    <button onClick={this.moodTag} name="money" className={this.state.money}>Money</button>
                    <button onClick={this.moodTag} name="food" className={this.state.food}>Food</button>
                    <button onClick={this.moodTag} name="spirituality" className={this.state.spirituality}>Spirituality</button>
                    <button onClick={this.moodTag} name="health" className={this.state.health}>Health</button>
                </div>
                <input className="moodSubmitBtn" type="submit" value="Done"></input>
            </form>
                <button onClick={this.cancelEdit} value="Cancel">Cancel</button>
        </div>
        :
        <div className="moodCard">
            <p>{changeDate(this.props.log.created_at)}</p>
                <p className="moodName">{this.props.log.mood.name}</p>
                <div className="moodTagContainer">
                    <p className="moodTag">{this.props.log.tag1}</p>
                    <p className="moodTag">{this.props.log.tag2}</p>
                    <p className="moodTag">{this.props.log.tag3}</p>
                    <p className="moodTag">{this.props.log.tag4}</p>
                    <p className="moodTag">{this.props.log.tag5}</p>
                </div>
                <div>
                    <button onClick={this.deleteMood}>X</button>
                    { this.props.logs[this.props.logs.length -1].id === this.props.log.id ?
                    <button onClick={()=> this.updateMood(this.props.log.id)}>Update</button>
                    :
                    null
                    }
                </div>
        </div>

        }    
                
            </div>
        )
    }
}

const msp = (state) =>{
    return {logs: state.logs}
}

const mdp = (dispatch) => {
    return {changeMood: (id, state) => dispatch(changeMood(id, state))}
}

export default connect(msp, mdp)(MoodCard)
