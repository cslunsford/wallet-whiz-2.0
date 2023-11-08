import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar">
        <div class="header">
            <h1 class="headerText">WalletWhiz</h1>
            <img class="headerLogo" src="../assets/WalletWiz logo.png"></img>
        </div>
        <ul class="nav-links">
            <li><a class="listText" href="#">Dashboard</a></li>
            <li><a class="listText" href="#">Transactions</a></li>
            <li><a class="listText" href="#">Budgets</a></li>
            <li><a class="listText" href="#">Account</a></li>
        </ul>
    </nav>
    );
};

export default Navbar;