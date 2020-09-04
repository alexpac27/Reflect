import React, { Component } from "react";
import '../Breathing.css';
import ScriptTag from 'react-script-tag';
import '../helpers/BreathingExercise.js'


const totalTime = 7500
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

class BreathContainer extends Component{

    constructor(props){
        super(props);
        this.state =  {
            minutes: 3,
            seconds: 0
          }
      }

      componentDidMount() {
        this.myInterval = setInterval(() => {
          const { seconds, minutes } = this.state
          if (seconds > 0) {
            this.setState(({ seconds }) => ({
              seconds: seconds - 1
            }))
          }
          if (seconds === 0) {
            if (minutes === 0) {
              clearInterval(this.myInterval)
            } else {
              this.setState(({ minutes }) => ({
                minutes: minutes - 1,
                seconds: 59
              }))
            }
          }
        }, 1000)
      }

      componentWillUnmount() {
        clearInterval(this.myInterval)
    }


    render(){
        const { minutes, seconds } = this.state
        let innerText = 'Breath in!'
        let container = 'container grow'

        return(
            <>
            <div className="breathBody">
              
              <h3 className="instructionFont">Breath out</h3>
                <div className='container'>

                    <div className="circle"></div>

                    <div id="text" className="circleText">{ minutes === 0 && seconds === 0
                    ? <h1>Done!</h1>
                    : <div> <h3>Time Remaining:</h3>
                    <h3> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h3></div>
                }</div>

                    <div className="pointer-container">
                        <div className="pointer"></div>
                    </div>

                    <div className="gradient-circle"></div>

                </div>
                    <h3 className="instructionFont">Breath In</h3>
            </div>
            <div className="hold">
                    <h3>Hold</h3>

            </div>
                <h2 className="quote"><i>"Breath is the link between mind and body." – Dan Brule</i></h2>
            </>
        )    
    }
}

export default BreathContainer