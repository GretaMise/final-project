import './contact.css';

export const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p className="contact-subtitle">
            We'd love to hear from you! Get in touch with our team.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Visit Our Store</h3>
              <p>
                Gifting Street 123<br />
                Creative Quarter<br />
                Vilnius, LT-01234
              </p>
              <p className="contact-hours">
                <strong>Store Hours:</strong><br />
                Monday - Friday: 9:00 AM - 8:00 PM<br />
                Saturday: 10:00 AM - 6:00 PM<br />
                Sunday: 12:00 PM - 5:00 PM
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Call Us</h3>
              <p>
                <strong>Customer Service:</strong><br />
                (555) 123-GIFT (4438)
              </p>
              <p>
                <strong>Corporate Inquiries:</strong><br />
                (555) 123-CORP (2677)
              </p>
              <p className="contact-hours">
                <strong>Phone Hours:</strong><br />
                Monday - Friday: 8:00 AM - 9:00 PM<br />
                Saturday - Sunday: 10:00 AM - 6:00 PM
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">✉️</div>
              <h3>Email Us</h3>
              <p>
                <strong>General Inquiries:</strong><br />
                greta.mi@wittywraps.com
              </p>
              <p>
                <strong>Customer Support:</strong><br />
                greta.mi.support@wittywraps.com
              </p>
              <p>
                <strong>Corporate Services:</strong><br />
                greta.mi.corporate@wittywraps.com
              </p>
              <p>
                <strong>Press & Media:</strong><br />
                greta.mi.press@wittywraps.com
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">💬</div>
              <h3>Live Chat</h3>
              <p>
                Get instant help with our live chat feature available on our website. 
                Our friendly customer service team is ready to assist you with any questions 
                about our products or services.
              </p>
              <p className="contact-hours">
                <strong>Chat Hours:</strong><br />
                Monday - Friday: 9:00 AM - 7:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM
              </p>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" required />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number (Optional)</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject" required>
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="order">Order Support</option>
                  <option value="corporate">Corporate Services</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>

        <div className="contact-social">
          <h3>Follow Us</h3>
          <p>Stay connected for the latest gift ideas and special offers!</p>
          <div className="social-links">
            <a href="https://facebook.com/wittywraps" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://instagram.com/wittywraps" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://twitter.com/wittywraps" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="https://pinterest.com/wittywraps" target="_blank" rel="noopener noreferrer">
              Pinterest
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
