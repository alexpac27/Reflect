import React from 'react'
import { Link} from "react-router-dom";

class NavBar extends React.Component{
    render(){

        return(
            <div className="navBar">
                <Link to='/moods' className="tabTitle">Track Mood</Link>
                <Link to='/journal' className="tabTitle">Gratitude Journal</Link>
                <Link to='/resources' className="tabTitle">Wellness Resources</Link>
                <Link to='/profile' className="tabTitle">Profile</Link>
                <Link to='/' className="tabTitle">Log Out</Link>
                
            </div>
        )
    }
        
}

export default NavBar