import React, {Component} from 'react'
import {changeDate} from '../helpers/HelperMethods'
import {connect} from 'react-redux'
import {deleteMood} from '../redux/action'



class MoodCard extends Component{

    state = {
        update: false
    }

    
    deleteMood = () => {
        this.props.deleteMood(this.props.log.id)
    }

    updateMood = () =>{
        console.log("updated!", this.props.log.id)
        this.setState({update: !this.state.update})
    }
    
    render(){
        return(
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
                    <button onClick={this.updateMood}>Update</button>
                </div>
            </div>
        )
    }
}

const mdp = (dispatch) => {
    return {deleteMood: (id) => dispatch(deleteMood(id))}
}

export default connect(null, mdp)(MoodCard)
