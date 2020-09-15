import React, { Component } from "react";
// import { render } from "@testing-library/react";
import ArticleCard from '../components/ArticleCard'
import {connect} from 'react-redux'
import { getArticles } from "../redux/action";
import {Redirect} from 'react-router-dom'

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
            <div className="wellnessContainer">
            { this.props.loggedInUser ?
            <div className="wellnessContainerFirst">   

                <div className="categorySelect">
                <form  onChange={this.selectCat}>
                    <label className="selectLabel">Select category</label>
                    <select className="articleDD">
                        <option selected value="All">All</option>
                        <option value="Meditation">Meditation</option>
                        <option value="Self Care">Self Care</option>
                        <option value="Fitness">Fitness</option>
                        <option value="Balance">Balance</option>
                        <option value="Mindfulness">Mindfulness</option>
                    </select>
                </form>
                </div>
                <div className="ArticleContainer">
                    {this.state.category === "All" ?
                    this.props.articles.map(article => <ArticleCard key={article.id} article={article}/> )
                    :
                    this.props.articles.filter(art => art.category === this.state.category).map(article => <ArticleCard key={article.id} article={article}/> )
                    }

                            <div className="wellnessQuoteDiv">
                                <h2>"The greatest gift you have to give is that of your own self-transformation."</h2>
                                <h2>– Lao Tzu</h2>
                            </div>
                </div>
            </div>
            :
            <Redirect to="/"/>
    }
            </div>
        )
    }

    
}

function msp(state){
    return {articles: state.articles, loggedInUser: state.loggedInUser, favorites: state.favorites}
}

function mdp(dispatch){
    return {fetchArticles: () => dispatch(getArticles())}
}


export default connect(msp, mdp)(ArticleContainer)