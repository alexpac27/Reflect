import React from "react";
import './App.css';
import {
  BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from './components/NavBar'
import Profile from './containers/Profile'
import ArticleContainer from './containers/ArticleContainer'
import JournalContainer from "./containers/JournalContainer";
import BreatheContainer from "./containers/BreatheContainer";
import MoodContainer from "./containers/MoodContainer";
import Login from "./containers/Login";
import Register from "./containers/Register";
// import {fetchFavs} from "./redux/action";
import {connect} from 'react-redux'

class App extends React.Component {

//   componentDidMount(){
//     this.props.fetchFavs()
// }

  render(){
    return (
      <Router>
        <div className="mainContainer">
          <div className="App">
          <h1 className="logo">Reflect</h1>
          <NavBar/>
          <Switch>
            <Route path='/moods' render={()=> <MoodContainer/>}></Route>
            <Route path='/journal' render={()=> <JournalContainer/>}></Route>
            <Route path='/breathe' render={()=> <BreatheContainer/>}></Route>
            <Route path='/resources' render={()=> <ArticleContainer/>}></Route>
            <Route path='/profile' render={()=> <Profile/>}></Route>
            <Route exact path='/' render={()=> <Login/>}></Route>
            <Route exact path='/register' render={()=> <Register/>}></Route>
          </Switch>
  
          </div>
         
        </div>
      </Router>
    );
  }
  
}

// function mdp(dispatch){
//   return {fetchFavs: () => dispatch(fetchFavs())}
// }

const msp = (state) =>{
  return {loggedInUser: state.loggedInUser}
}

export default connect(msp)(App)
