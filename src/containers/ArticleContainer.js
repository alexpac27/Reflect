import React, { Component } from "react";
// import { render } from "@testing-library/react";
import ArticleCard from '../components/ArticleCard'

class ArticleContainer extends Component{
    render(){

        return(
            <div>
                <h1>Wellness Resources</h1>
                <ArticleCard/>
            </div>
        )
    }

    
}

export default ArticleContainer