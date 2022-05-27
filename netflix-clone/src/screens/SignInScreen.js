import React, { useRef } from 'react'
import { auth , useAuth } from '../firebase';
import "../styles/signIn.css"
import { signin , signup } from '../firebase';

function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);


  const currentUser = useAuth()
  console.log(currentUser)

  const register = (e) =>{
    e.preventDefault();
    try{
        signup(emailRef.current.value, passwordRef.current.value);
    }catch{
        alert("email already in use");
    }
  }  

  const signIn = (e) =>{
    e.preventDefault();
    try{
        signin(emailRef.current.value, passwordRef.current.value);
        
    }catch{
        alert("error in login")
    }
  }




  return (
    <div className='SignInScreen'>
        <h1>Sign In</h1>
        <form>
            <input type='email' placeholder='Email Address' ref={emailRef}/>
            <input type='password' placeholder='Password' ref={passwordRef}/>
            <button type='submit' onClick={signIn}>Sign In</button>
            <h4>New to Netflix?<span className='signupLink' onClick={register}> Sign up now</span></h4>

        </form>
    </div>
  )
}

export default SignInScreen