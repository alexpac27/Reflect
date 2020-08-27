import React, { Component } from "react";
// import { render } from "@testing-library/react";
import JournalCard from "../components/JournalCard";
import JournalEntry from "../components/JournalEntry";

class JournalContainer extends Component{
    render(){

        return(
            <div>
                <h1>Gratitude Journal</h1>
                <JournalEntry/>
                <JournalCard/>
            </div>
        )
    }

    
}

export default JournalContainer