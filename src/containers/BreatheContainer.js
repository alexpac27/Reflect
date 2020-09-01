import React, { Component } from "react";
import '../Breathing.css'

class BreathContainer extends Component{

    constructor(props){
        super(props);
        this.state =  {
            currentCount: 180,
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

        return(
            <div className="breathBody">
                 { minutes === 0 && seconds === 0
                    ? <h1>Done!</h1>
                    : <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                }

                <div className='container'>

                    <div className="circle"></div>

                    <p id="text"></p>

                    <div className="pointer-container">
                        <div className="pointer"></div>
                    </div>

                    <div className="gradient-circle"></div>

                </div>

                <h1>Take as much time as you need</h1>
            </div>
        )    
    }
}

export default BreathContainer