import React from 'react';

function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>
      
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <p>Have a question about energy saving or the crisis? Send us a message.</p>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;