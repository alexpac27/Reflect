import React, {Component} from 'react'
import {connect} from 'react-redux'
import {renderFav} from "../redux/action";


class ArticleCard extends Component{
  state = {
      add: true
  }

    addFav = () => {
         this.props.renderFav(this.props.article.id, this.state.add)
    }

    removeFav = () => {
        const fav = this.props.favorites.filter(fav => fav.user_id === 1 && fav.article_id === this.props.article.id)
        const favId = fav[0].id
        // console.log("in remove article", fav)
        // console.log("in remove article--favorite state", this.props.favorites)
        this.setState({add: !this.state.add}, () => this.props.renderFav(favId, this.state.add))
        
    }
    render(){
        console.log("render--favorite state", this.props.favorites)
        return(
            <div className="articleItem">
                <img className="articleImage" src={this.props.article.image_url} alt=""/>
                <p className="articleTitle">{this.props.article.title}</p>
                <p className="articleBody">{this.props.article.content}</p>
                <span className="cardBottom">
                <p className="articleCat">{this.props.article.category}</p>

               
                {this.props.favorites.some(fav => fav.user_id === 1 && fav.article_id === this.props.article.id) ? 
                
                <button className="removeBtn" onClick={this.removeFav}>Remove</button>
                :
                <button className="favBtn" onClick={this.addFav}>Favorite</button>}
                </span>
            </div>
        )
    }
}

const msp = (state) =>{
return {favorites: state.favorites}
}

const mdp = (dispatch) => {
        return {renderFav: (id, state) => dispatch(renderFav(id, state))}
}

export default connect(msp,mdp)(ArticleCard)



