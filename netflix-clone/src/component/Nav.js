import React, { useEffect, useState } from 'react'
import "../styles/nav.css"

function Nav() {
    // navbar visibility setting on scroll
  const [show , handleSHhow] = useState(false);

  const transitionNavBar = () => {
      //if nav height > 100 show black nav
      if (window.scrollY > 100){
          handleSHhow(true);
      } else{
          handleSHhow(false);
      }
  }

  useEffect(() => {
      window.addEventListener("scroll" , transitionNavBar);

      //remove
      return() => window.removeEventListener('scroll' , transitionNavBar);
  },[])


  return (
    <div className={`nav ${show && 'navbar-black'}`}>

        <div className='navbar-content'>
            <img 
            className='navbar-logo'
            src='netflixlogo.png'  
            />

            <img 
            className='navbar-avatar'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' 
            />
        </div>
        
    </div>
  )
}

export default Nav