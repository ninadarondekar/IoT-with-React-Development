import React from 'react';
import './navbar.css';
import logo from './../../assets/wc.png'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className='navbar h-24 w-auto bg-cyan-700 text-white flex items-center justify-between'>
        
        <div className='logo'>
            <img src={logo} alt='' className='h-20 w-24 rounded p-2 m-2.5'></img>
        </div>

        <div className='navsections'>
            <ul className="links flex gap-6 p-5 m-2.5">
                
                <li className=' text-white text-3xl'>
                    <Link to = '/'>Home</Link>
                </li>
                
                <li className=' text-white text-3xl'>
                    <Link to = '/about'>About</Link>
                </li>
                
                <li className=' text-white text-3xl'>
                    <Link to = '/services'>Services</Link>
                </li>
                
                <li className=' text-white text-3xl'>
                    <Link to = '/contact'>Contact</Link>
                </li>
            </ul>
        </div>
    
    </nav>
    </>
  )
}

export default Navbar