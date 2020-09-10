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
                                           
                                           
                                        </div>
                                :
                                <div className="profile">
                                    <p >EDITING...</p>
                                    <button onClick={this.cancelEdit}>CANCEL</button>
                                </div>
                        }

                            <div className="wellnessQuoteDiv">
                                <h2>"Who looks outside, dreams. Who looks inside, awakes."</h2>
                                <h2>– Carl Jung</h2>
                            </div>

                            <h1>Total Check-Ins</h1>
                        <div className="stats">
                            <div className="mStats">
                                <i class="fas fa-universal-access"></i>
                                <p>{this.props.loggedInUser.user.logs.length}</p>
                                <h2>Moods Entries</h2>
                            </div>
                            <div className="jStats">
                                <i class="fas fa-book-open"></i>
                                <p>{this.props.loggedInUser.user.journals.length}</p>
                                <h2>Gratitude Journals</h2>
                            </div>
                            
                        </div>

                            <div className="wellnessQuoteDiv">
                                <h2>"Each morning we are born again. What we do today is what matters most."</h2>
                                <h2>– Buddha</h2>
                            </div>

                        <div>
                            <h1>Favorite Wellness Resources</h1>
                            <div className="profileFavs">
                                {this.props.loggedInUser.user.articles.map(article => <ArticleCard key={article.id} article={article}/>)}
                            </div>
                        </div>

                        <div className="wellnessQuoteDiv">
                                <h2>"What we learn with pleasure, we never forget."</h2>
                                <h2>– Alfred Mercier</h2>
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