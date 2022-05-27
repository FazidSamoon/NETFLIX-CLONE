import React , {useState} from 'react'
import '../styles/login.css'
import SignInScreen from './SignInScreen'

function LoginScreen() {


  const [SignIn , setSignIn] = useState(false);


  return (
    <div className='loginScreen'>
        <div className='loginScreen-bg'>
            <img className='loginScreen-logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='' />

            <button onClick={() => setSignIn(true)} className='loginScreen-button'>SignIn</button>

            <div className='loginScreen-gradient'></div>
        </div>

        <div className='loginScreen-body'>
            {SignIn ? (
                <SignInScreen />
            ) : (
                <>
                    <h1>Unlimited films, TV programs and more...</h1>
                    <h2>Watch anywhere, Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                    <div className='loginScreen-input'>
                        <form>
                            <input type='email' placeholder='Email Address'/>
                            <button onClick={() => setSignIn(true)} className='loginScreen-start'>GET STARTED</button>
                        </form>

                    </div>
                </>
            )}
            
        </div>
    </div>
  )
}

export default LoginScreen