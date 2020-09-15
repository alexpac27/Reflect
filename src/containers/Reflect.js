import React, {Component} from 'react'
import "./waterdrop.mp4"

class Reflect extends Component{
    render(){

        const videoSource = "https://cdn.videvo.net/videvo_files/video/free/2012-08/small_watermarked/Water%20Drop-H264%2075_preview.webm"
        return(
            <div className="videoBody"> 
                 <div className="videoQuotes">
                    <h2>"With our thoughts we make the world."</h2>
                    <h2>- Buddha</h2>
                </div>
                <div className="video-container">
                    <video  className="video" autoPlay="autoplay" loop="loop" muted>
                    <source   src={videoSource} type="video/mp4"></source>
                    </video>
                </div>    
            </div>
        )
    }
}

export default Reflect




