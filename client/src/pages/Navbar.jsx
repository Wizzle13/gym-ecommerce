import React,{useState} from 'react'
import logo from '../images/gymlogo.png';
import {Link} from 'react-router-dom';
import Auth from '../utils/auth';

export default function Navbar() {
    const[nav,setnav] = useState(false);
    const changeBackground =() =>{
        if (window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    
    window.addEventListener('scroll',changeBackground);
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <nav className={nav ?"nav active":"nav"}>
            <Link to='/'className ='logo'>
                <img src={logo} alt=""/>
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn' />
              <label className='menu-icon' htmlFor='menu-btn'>
                  <span className='nav-icon'></span>
              </label>
              <ul className="menu">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="weoffer">What we Offer</Link></li>
                  <li><Link to="team">Team</Link></li>
                  <li><Link to="about">About</Link></li>
                  <li><Link to="contact">Contact Us</Link></li>
                  {Auth.loggedIn() ? (
                    <>  
                        <li><Link to="/" onClick={logout}>Logout </Link></li>
                        <li><Link to="/profile" >Profile </Link></li>
                    </>
                    ) : (
                    <>
                        
                        <li><Link to="Login">Sign In </Link></li>
                    </>
                    )}
              </ul>

        </nav>
    )
}
