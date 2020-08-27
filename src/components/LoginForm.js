import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class LoginForm extends Component{
    render(){
        return( 
            <div>
                <div>
                </div>
                <form>
                     <h1>Login</h1>
                    <label>Email</label><br/>
                    <input type ="text" id="email" name="email" placeholder="example@email.com"/><br/>
                    <br/>
                    <label>Password</label><br/>
                    <input type="password" id="password" name="password" placeholder="password"/><br/>
                    <br/>
                    <button type="submit" >Log In</button>
                    <Link to='/register'>Sign Up</Link>
                    
                </form>
                
            </div>
        )
    }
    
    
}

export default LoginForm

