// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Login.scss'

const Login = () => {
  return (
    <section className='login'>
        <div className="circle-container">
            <h2>LETS BEGIN THE <br /> JOURNEY WITH US</h2>
            <p>Make Your Choice, our partners are very <br /> experienced in their field and have the <br /> potential to increase your business</p>
            
        </div>
        <div className="login-input-container">
        <div className="login-input">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
        </div>
        <button>GET STARTED</button>
        
    </div>

      
    </section> 
    
  )
}

export default Login