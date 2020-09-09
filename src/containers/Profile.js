import React from "react";
import ArticleCard from '../components/ArticleCard'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {getUser} from '../redux/action'
import '../media/photo.png'

class Profile extends React.Component{

    state={
        editProfile: false
    }

    componentDidMount(){
        if (this.props.loggedInUser){
        this.props.fetchUser(this.props.loggedInUser.user.id)
        }
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
                                           <div className="personalInfo">
                                               <div className="image">
                                                <img className="profileImage" hight="300" width="255" src="https://i.postimg.cc/15F1BGSt/Screen-Shot-2020-09-08-at-10-33-24-PM.png" alt="profile-photo"></img>
                                               </div>
                                               <div className="textInfo">
                                                    <p><b>First Name:</b> {this.props.loggedInUser.user.first_name}</p>
                                                    <p><b>Last Name:</b> {this.props.loggedInUser.user.last_name}</p>
                                                    <p><b>Email:</b> {this.props.loggedInUser.user.email}</p>
                                                <div className="editBtnDiv">
                                                    <button className="editProfileBtn" onClick={this.editProfile}>Edit Profile</button>
                                                </div>
                                                </div>
                                            </div>
                                            <div>
                                                <h3>Total Check-Ins</h3>
                                                <p><b>Moods:</b> {this.props.loggedInUser.user.logs.length} </p>
                                                
                                                <p><b>Gratitude Journals:</b> {this.props.loggedInUser.user.journals.length}</p>
                                                
                                            </div>
                                           
                                        </div>
                                :
                                <div className="profile">
                                    <p >EDITING...</p>
                                    <button onClick={this.cancelEdit}>CANCEL</button>
                                </div>
                        }

                        <div>
                                <h1>Favorite Wellness Resources</h1>
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