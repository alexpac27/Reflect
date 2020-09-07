import React, {Component} from 'react'
import {connect} from 'react-redux'
import {renderFav} from "../redux/action";


class ArticleCard extends Component{
  state = {
      add: true
  }
  

    addFav = () => {
         this.setState({add: true}, () => this.props.renderFav(this.props.article.id, this.state.add, this.props.loggedInUser.user.id))
        
    }

    removeFav = () => {
        const fav = this.props.loggedInUser.user.favorites.filter(fav => fav.article_id === this.props.article.id)
        const favId = fav[0].id
        this.setState({add: false}, () => this.props.renderFav(favId, this.state.add, this.props.loggedInUser.user.id))
        
    }
    render(){
        console.log("in article card-- state", this.props.article.id, this.state)
        
        return(
            <div className="articleItem">
                <iframe  width="600" height="250" className="articleImage" src={this.props.article.image_url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p className="articleTitle">{this.props.article.title}</p>
                <p className="articleBody">{this.props.article.content}</p>
                <span className="cardBottom">
                <p className="articleCat">{this.props.article.category}</p>

               
                {this.props.loggedInUser.user.favorites.some(fav => fav.user_id === this.props.loggedInUser.user.id && fav.article_id === this.props.article.id) ? 
                
                <button className="removeBtn" onClick={this.removeFav}>Remove</button>
                :
                <button className="favBtn" onClick={this.addFav}>Favorite</button>}
                </span>
            </div>
        )
    }
}

const msp = (state) =>{
return {favorites: state.favorites, loggedInUser: state.loggedInUser}
}

const mdp = (dispatch) => {
        return {renderFav: (id, state, userId) => dispatch(renderFav(id, state, userId))}
}

export default connect(msp,mdp)(ArticleCard)


// {this.props.favorites.some(fav => fav.user_id === 1 && fav.article_id === this.props.article.id) ? 
                
//     <button className="removeBtn" onClick={this.removeFav}>Remove</button>
//     :
//     <button className="favBtn" onClick={this.addFav}>Favorite</button>}
