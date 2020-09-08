import React from "react";
import ArticleCard from '../components/ArticleCard'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {getUser} from '../redux/action'

class Profile extends React.Component{

    state={
        editProfile: false
    }

    componentDidMount(){
        this.props.fetchUser(this.props.loggedInUser.user.id)
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
        console.log("logged in user", this.props.loggedInUser)
        console.log("logs", this.props.logs)
        console.log("journals", this.props.journals)
        return(
            <>
            {this.props.loggedInUser ?
                <div className="profileTop">
                    <div className="profileTopFirst">    
                        {!this.state.editProfile ?
                                        <div className="profile">
                                            {/* <h1>Profile</h1> */}
                                            <p><b>First Name:</b> {this.props.loggedInUser.user.first_name}</p>
                                            <p><b>Last Name:</b> {this.props.loggedInUser.user.last_name}</p>
                                            <p><b>Last Name:</b> {this.props.loggedInUser.user.email}</p>
                                            <div>
                                                <h3>Total Check-Ins</h3>
                                                <p><b>Moods:</b> {this.props.loggedInUser.user.logs.length} </p>
                                                
                                                <p><b>Gratitude Journals:</b> {this.props.loggedInUser.user.journals.length}</p>
                                                
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
                                {this.props.loggedInUser.user.articles.map(article => <ArticleCard key={article.id} article={article}/>)}
                            </div>
                        </div>
                    </div>
                 </div>
                    :
                    <Redirect to="/"/> 
                }
            </>
        )
    }

    
}

const msp = (state) => {
    return {favorites: state.favorites, loggedInUser: state.loggedInUser, logs: state.logs, journals: state.journals}
}

const mdp = (dispatch)=> {
    return{fetchUser: (userId) => dispatch(getUser(userId))}
}

export default connect(msp, mdp)(Profile)