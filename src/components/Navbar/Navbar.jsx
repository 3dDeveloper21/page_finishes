import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
     <header>
         <nav className='navbar'>
           <div className="container flex-wrapper">
                <img src="./imgs/wayne-logo.png" alt="" className='navbar__logo'/>
           </div>
         </nav>
     </header> 
  )
}

export default Navbar;