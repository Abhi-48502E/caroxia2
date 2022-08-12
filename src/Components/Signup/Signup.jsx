import React from 'react'
import './signup.css'

function Signup() {
    return (
        <div className='main-login'>
        <div class="wrapper">
            <h1>Hello Again!</h1>
            <p>Welcome back you've <br/> been missed!</p>
            <form >
                < input type="text" className='form-input' placeholder="Enter username"/>
                    <input type="password" placeholder="Password" className='form-input'/>
                        <p class="recover">
                            <a className='a' href="#">Recover Password</a>
                        </p>
                    </form>
                    <button className='button'>Sign in</button>
                    <p class="or">
                        ----- or continue with -----
                    </p>
                    <div class="icons">
                        <i class="fab fa-google"></i>
                        <i class="fab fa-github"></i>
                        <i class="fab fa-facebook"></i>
                    </div>
                    <div class="not-member">
                        Not a member? <a href="#">Register Now</a>
                    </div>
                </div>
                </div>
                )
}

export default Signup