import React from 'react';
import {Link} from 'react-router-dom' ;

const Header = () => {
  return (
    <header className='header'>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Profile">Profile</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Skill">Skill</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header