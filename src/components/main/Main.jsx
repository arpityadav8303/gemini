import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
function Main(){
    return(
        <div className='main'>
         <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
         </div>
         <div className="main-container">
            <div className="greet">
                <p><span>Hello, dev.</span></p>
                <p>How can I help you</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautifull place to visit</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Briefly summarize this concept:Arpit</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Brainstorm teambonding for outstanding work</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Improve the readibility of code</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                     <input type="text" placeholder='enter your prompt' />
                     <div className='img'>
                        <img src={assets.gallery_icon}alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                     </div>
                </div>
            </div>
         </div>
        </div>
    )
}
export default Main