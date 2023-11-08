import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../assets/walletWhiz logo2.png';

const Navbar = () => {
    return (
        <nav class="navbar">
        <div class="header">
            <h1 class="headerText">WalletWhiz</h1>
            <img class="headerLogo" src={Logo}></img>
        </div>
        <ul class="nav-links">
            <li><Link class="listText" href="/dashboard">Login</Link></li>
            <li><Link class="listText" href="/homepage">Home</Link></li>
            <li><Link class="listText" href="/register">Register</Link></li>
            <li><Link class="listText" href="/user">Account</Link></li>
        </ul>
    </nav>
    );
};

export default Navbar;