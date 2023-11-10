import React from 'react';
import './Footer.css'; // Make sure to import your stylesheet

// Update the href links to actual routes if you are using React Router or similar
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="sec AboutUs">
          <h2>About Us</h2>
          <p>
            WalletWhiz is a budgeting app that helps you keep track of your spending and saving habits.
            It is a simple and easy to use app that will help you keep track of your finances.
          </p>
          <img className="logo" src="/path/to/WalletWiz logo.png" alt="WalletWhiz Logo" />
        </div>

        <div className="sec developers">
          <h2>Our Developers</h2>
          <ul>
            <li><a href="https://github.com/DrDanik88" target="_blank" rel="noopener noreferrer">Danik</a></li>
            <li><a href="https://github.com/ChazCoats98" target="_blank" rel="noopener noreferrer">Chaz Coats</a></li>
            <li><a href="https://github.com/Rcurcurato" target="_blank" rel="noopener noreferrer">Ronald Curcurato</a></li>
            <li><a href="https://github.com/cslunsford" target="_blank" rel="noopener noreferrer">Christopher Lunsford</a></li>
            <li><a href="https://github.com/JObengDappah" target="_blank" rel="noopener noreferrer">Jason Obeng Dappah</a></li>
          </ul>
        </div>

        <div className="quickLinks">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Login</a></li>
            <li><a href="#">Register</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Account</a></li>
          </ul>
        </div>

        <section id="contact">
          <h2>Contact Us</h2>
          <p>For more information or Help...Click the link below!</p>
          {/* Update this link to use your contact route */}
          <a className="nav-link" href="contact.jsx">Contact Us</a>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
