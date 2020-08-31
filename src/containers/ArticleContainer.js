import React, { Component } from "react";
// import { render } from "@testing-library/react";
import ArticleCard from '../components/ArticleCard'
import {connect} from 'react-redux'
import { getArticles } from "../redux/action";

class ArticleContainer extends Component{

    state = {
        category: "All"
    }

    componentDidMount(){
        this.props.fetchArticles()
    }

    selectCat = (e) => {
        this.setState({category: e.target.value}) 
        
    }

    render(){

        return(
            <div>
                <h1>Wellness Resources</h1>
                <form onChange={this.selectCat}>
                    <label>Select category</label>
                    <select className="articleDD">
                        <option selected value="All">All</option>
                        <option value="Meditation">Meditation</option>
                        <option value="Self Care">Self Care</option>
                        <option value="Fitness">Fitness</option>
                        <option value="Balance">Balance</option>
                        <option value="Mindfulness">Mindfulness</option>
                    </select>
                </form>
                <div className="ArticleContainer">
                {this.state.category === "All" ?
                this.props.articles.map(article => <ArticleCard key={article.id} article={article}/> )
                :
                this.props.articles.filter(art => art.category === this.state.category).map(article => <ArticleCard key={article.id} article={article}/> )
                }

                </div>
            </div>
        )
    }

    
}

function msp(state){
    return {articles: state.articles}
}

function mdp(dispatch){
    return {fetchArticles: () => dispatch(getArticles())}
}


export default connect(msp, mdp)(ArticleContainer)