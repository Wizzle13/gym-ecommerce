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
            <Link to='/' smooth={true} duration={1000} className ='logo'>
                <img src={logo} alt=""/>
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn' />
              <label className='menu-icon' for='menu-btn'>
                  <span className='nav-icon'></span>
              </label>
              <ul className="menu">
                  <li><Link to="/" smooth={true} duration={1000}>Home</Link></li>
                  <li><Link to="weoffer" smooth={true} duration={1000}>What we Offer</Link></li>
                  <li><Link to="team" smooth={true} duration={1000}>Team</Link></li>
                  <li><Link to="about" smooth={true} duration={1000}>About</Link></li>
                  <li><Link to="contact" smooth={true} duration={1000}>Contact Us</Link></li>
                  <li><Link to="Login" smooth={true} duration={1000}>Sign In </Link></li>

              </ul>

        </nav>
    )
}
