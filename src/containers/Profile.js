import React from "react";
import ArticleCard from '../components/ArticleCard'
import {connect} from 'react-redux'


class Profile extends React.Component{

   
    render(){
        return(
            <div>
                <div className="profile">
                    <h1>Profile</h1>
                    <p><b>First Name:</b> Alex</p>
                    <p><b>Last Name:</b> Ortiz</p>
                    <div>
                        <h3>Total Check-Ins</h3>
                        <p><b>Moods:</b> 5</p>
                        <p><b>Gratitude Journals:</b> 3</p>
                    </div>
                        <h3>Favorite Wellness Resources</h3>

                </div>
                    <div className="profileFavs">
                        {this.props.favorites.filter(fav => fav.user_id === 1).map(article => <ArticleCard key={article.id} article={article.article}/>)}
                    </div>
            </div>
        )
    }

    
}

const msp = (state) => {
    return {favorites: state.favorites}
}

export default connect(msp)(Profile)