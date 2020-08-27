import React from "react";
import './App.css';
import {
  BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from './components/NavBar'
import Profile from './containers/Profile'
import ArticleContainer from './containers/ArticleContainer'
import JournalContainer from "./containers/JournalContainer";
import MoodContainer from "./containers/MoodContainer";
import Login from "./containers/Login";

class App extends React.Component {
  render(){
    return (
      <Router>
        <div>
          <h1>Wellness App</h1>
          <NavBar/>
          <Switch>
            <Route path='/moods' render={()=> <MoodContainer/>}></Route>
            <Route path='/journal' render={()=> <JournalContainer/>}></Route>
            <Route path='/resources' render={()=> <ArticleContainer/>}></Route>
            <Route path='/profile' render={()=> <Profile/>}></Route>
            <Route path='/' render={()=> <Login/>}></Route>
          </Switch>
  
        </div>
      </Router>
    );
  }
  
}

export default App;
