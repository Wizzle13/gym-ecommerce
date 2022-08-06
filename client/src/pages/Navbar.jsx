import React,{useState} from 'react'
import logo from '../images/gymlogo.png';
import {Link} from 'react-router-dom';
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
                  <li><Link to="Login">Sign In </Link></li>

              </ul>

        </nav>
    )
}
