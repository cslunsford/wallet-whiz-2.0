import React from 'react';
import './ContactForm.css'; // Ensure you have the corresponding CSS file

const ContactForm = () => {
  return (
    <div className="container">
        <header>
            <nav>
                <a className="nav-link" href="/">Home</a> {/* Changed to root path */}
            </nav>
        </header>
        <form action="https://formspree.io/f/mnqkndlb" method="POST" className="contact-form">
            <h1>Contact Us</h1>
            <div className="input-group">
                <input type="text" name="first" placeholder="First Name" autoComplete="off" required />
                <input type="text" name="last" placeholder="Last Name" autoComplete="off" required />
            </div>
            <input type="email" name="email" placeholder="Email Address" autoComplete="off" required />
            <textarea rows="5" name="message" placeholder="Your Message" required></textarea>
            <button type="submit" className="send-btn">Send Message</button>
        </form>
    </div>
  );
};

export default ContactForm;
