import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Logo from '../assets/walletWhiz logo2.png';
import Auth from '../utils/auth';

const Navbar = () => {
    return (
        <nav className="navbar">
        <div className="header">
        <Link className="listText" to="/">WalletWhiz</Link>
            <img className="headerLogo" src={Logo}></img>
        </div>
        <ul className="nav-links">
            {Auth.loggedIn() ? (
                <>
                <li><Link className="listText" to="/dashboard">Home</Link></li>
                <li><Link className="listText" to="/user">Account</Link></li>
                <li><Link className='listText' onClick={Auth.logout}>Logout</Link></li>
                </>
                ) : (
                    <>
                <li><Link className="listText" to="/">Login</Link></li>
                <li><Link className="listText" to="/register">Register</Link></li>
                </>
            )}
        </ul>
    </nav>
    );
};

export default Navbar;