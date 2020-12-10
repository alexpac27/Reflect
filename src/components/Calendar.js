import React, {Component} from 'react'
import '../Calendar.css';

const date = new Date()

class Calendar extends Component{
    
    state = {
        currentMonth: date.getMonth()
    }
    
    previousMonth = () => {
        if(this.state.currentMonth > 0){
            this.setState(prevState => {
                return {
                    currentMonth: prevState.currentMonth--
                }
            })
        } if(this.state.currentMonth === 0 ){
            this.setState({currentMonth: 11})
        }
    }

    nextMonth = () => {
        if(this.state.currentMonth < 11){
            this.setState(prevState => {
                return {
                    currentMonth: prevState.currentMonth++
                }
            })
        } if(this.state.currentMonth === 11 ){
            this.setState({currentMonth: 0})
        }
    }

    render(){

        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ]
        
        
        let days = "";

        for(let i=1;i<= 31;i++){
            days += `<div>${i}</div>`
        }

        let firstDay = (new Date(2020, 11, 1))
        console.log(firstDay.getDay())
        console.log("state", typeof this.state.currentMonth)


        return(
            <div className="calContainer">
            <div className="calendar">
                <div className="month">
                    <i className="fas fa-angle-left prev" onClick={this.previousMonth}></i>
                    <div className="date">
                    <h1>{months[this.state.currentMonth]}</h1>
                    <p>{date.toDateString()}</p>
                    </div>
                    <i className="fas fa-angle-right next" onClick={this.nextMonth}></i>
                </div> 
                <div className="weekdays">
                    <div>Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                </div>
                <div className="days">
                    <div className="prev-date">30</div>
                    <div className="prev-date">31</div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div className="today">7</div>
                    <div className="today">8</div>
                    <div className="today">9</div>
                    <div className="today">10</div>
                    <div>11</div>
                    <div>12</div>
                    <div>13</div>
                    <div>14</div>
                    <div>15</div>
                    <div>16</div>
                    <div>17</div>
                    <div>18</div>
                    <div>19</div>
                    <div>20</div>
                    <div>21</div>
                    <div>22</div>
                    <div>23</div>
                    <div>24</div>
                    <div>25</div>
                    <div>26</div>
                    <div>27</div>
                    <div>28</div>
                    <div>29</div>
                    <div>30</div>
                    <div>31</div>
                    <div className="next-date">1</div>
                    <div className="next-date">2</div>
                    <div className="next-date">3</div>
                </div>
            </div>
        </div>
        )
    }
}

export default Calendar;