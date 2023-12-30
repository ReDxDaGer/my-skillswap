import { useState } from 'react'
import Logo from '../src/Images/skillswapLogo.png'
import discordLogo from '../src/Images/discord.png'
import googleLogo from '../src/Images/googe.png'
import githubLogo from '../src/Images/github.png'
import './App.css'

function App() {
  return (
    <>
     <div className="LoginMain">
        <div className="LoginLeft">
          <div className="Logo">
            <img src={Logo} alt="" />
          </div>
          <div className="LogoContent">
            <h1>SKILLSWAP</h1> <br />
            <p>Connect with Developers and the world around them on SkillSwap. <br /></p>
          </div>
        </div>
        <div className="LoginRight">
          <div className="Logincontainer">
            
            <div className="header">
              <h1>LOGIN</h1>
            </div>
            
            <div className="inputContain">

              <input type="text" name="" placeholder='Enter your Username here!!'  id='inpt' required/>
              <input type="password" name="" placeholder='Enter your password here!!' id='inpt' required/>
              <a href="">Forgot Password ?</a>  
            </div>
            
            <div className="btn">
            
              <button>Login</button>
            
            </div>
            
            <div className="SocialLinks">
              <a href="#" target='_blank'>
                <img src={githubLogo} alt="" />
              </a>
              <a href="#" target='_blank'>
                <img src={googleLogo} alt="" />
              </a>
              <a href="#" target='_blank'>
              <img src={discordLogo} alt="" />
              </a>
            </div>
            
            
            <div className="signUptxt">
              Not a Member ? <a href="#">SignUp</a>
            </div>
          
          </div>
        </div>
     </div>
    </>
  )
}

export default App;
