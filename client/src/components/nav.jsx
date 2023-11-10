import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Logo from '../assets/walletWhiz logo2.png';

const Navbar = () => {
    return (
        <nav class="navbar">
        <div class="header">
            <h1 class="navHeaderText">WalletWhiz</h1>
            <img class="headerLogo" src={Logo}></img>
        </div>
        <ul class="nav-links">
            <li><Link class="listText" to="/">Login</Link></li>
            <li><Link class="listText" to="/dashboard">Home</Link></li>
            <li><Link class="listText" to="/register">Register</Link></li>
            <li><Link class="listText" to="/user">Account</Link></li>
        </ul>
    </nav>
    );
};

export default Navbar;