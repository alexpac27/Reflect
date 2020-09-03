import React from "react";
import ArticleCard from '../components/ArticleCard'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class Profile extends React.Component{

    state={
        editProfile: false
    }

    editProfile = () => {
        console.log("edit profile")
        this.setState({editProfile: !this.state.editProfile})
    }

    cancelEdit = () => {
        console.log("edit profile")
        this.setState({editProfile: !this.state.editProfile})
    }

   
    render(){
        console.log("in profile -- moods", this.props.journals )
        return(
            <div>
                { this.props.loggedInUser ?
                    <div>    
                        {!this.state.editProfile ?
                                        <div className="profile">
                                            <h1>Profile</h1>
                                            <p><b>First Name:</b> {this.props.loggedInUser.first_name}</p>
                                            <p><b>Last Name:</b> {this.props.loggedInUser.last_name}</p>
                                            <p><b>Last Name:</b> {this.props.loggedInUser.email}</p>
                                            <div>
                                                <h3>Total Check-Ins</h3>
                                                <p><b>Moods:</b> {this.props.logs.length} </p>
                                                {this.props.journals.length === 0 ?
                                                <p><b>Gratitude Journals:</b> 5</p>
                                                :
                                                <p><b>Gratitude Journals:</b> {this.props.journals.length}</p>
                                                }
                                            </div>
                                                <button onClick={this.editProfile}>Edit Profile</button>
                                        </div>
                                :
                                <div className="profile">
                                    <p >EDITING...</p>
                                    <button onClick={this.cancelEdit}>CANCEL</button>
                                </div>
                        }

                        <div>
                                <h3>Favorite Wellness Resources</h3>
                            <div className="profileFavs">
                                {this.props.favorites.filter(fav => fav.user_id === 1).map(article => <ArticleCard key={article.id} article={article.article}/>)}
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

const msp = (state) => {
    return {favorites: state.favorites, loggedInUser: state.loggedInUser, logs: state.logs, journals: state.journals}
}

export default connect(msp)(Profile)