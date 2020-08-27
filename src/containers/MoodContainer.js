import React, { Component } from "react";
// import { render } from "@testing-library/react";
import MoodCard from '../components/MoodCard'
import MoodEntry from "../components/MoodEntry";

class MoodContainer extends Component{
    render(){

        return(
            <div>
                <h1>Mood Container</h1>
                <MoodEntry/>
                <MoodCard/>
            </div>
        )
    }

    
}

export default MoodContainer