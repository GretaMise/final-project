import './about-us.css';

export const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-container">
        <div className="about-us-header">
          <h1>About Witty Wraps</h1>
          <p className="about-us-subtitle">
            Making gift-giving memorable, one witty wrap at a time
          </p>
        </div>

        <div className="about-us-content">
          <section className="about-section">
            <h2>Our Story</h2>
            <p>
              Founded in 2020 by Greta Mi, Witty Wraps was born from a simple idea: gift-giving should be 
              as delightful as gift-receiving. We noticed that while people put tremendous thought 
              into choosing the perfect gift, the presentation often fell short. That's where we 
              come in – transforming ordinary gifts into extraordinary experiences through creative 
              wrapping, thoughtful presentation, and a touch of wit.
            </p>
          </section>

          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              At Witty Wraps, we believe that every gift tells a story. Our mission is to help 
              you tell that story in the most memorable way possible. Whether it's a birthday 
              surprise, holiday celebration, or just-because moment, we provide the tools, 
              inspiration, and services to make your gifts unforgettable.
            </p>
          </section>

          <section className="about-section">
            <h2>What Makes Us Different</h2>
            <div className="features-grid">
              <div className="feature">
                <h3>Curated Selection</h3>
                <p>Every gift in our collection is handpicked for quality, uniqueness, and that special "wow" factor.</p>
              </div>
              <div className="feature">
                <h3>Expert Wrapping</h3>
                <p>Our team of professional gift wrappers ensures every package is a work of art.</p>
              </div>
              <div className="feature">
                <h3>Personal Touch</h3>
                <p>From custom messages to themed presentations, we add personal touches that matter.</p>
              </div>
              <div className="feature">
                <h3>Sustainable Practices</h3>
                <p>We're committed to eco-friendly wrapping materials and sustainable gift options.</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Our Team</h2>
            <p>
              Led by our founder and CEO Greta Mi, Witty Wraps brings together a passionate team of gift enthusiasts, creative designers, 
              and customer service experts. We're united by our love for making people smile 
              and our commitment to turning every gift exchange into a cherished memory.
            </p>
          </section>

          <section className="about-section">
            <h2>Join Our Community</h2>
            <p>
              When you choose Witty Wraps, you're not just buying a gift – you're joining a 
              community of thoughtful gift-givers who believe in the power of presentation. 
              Follow us on social media for gift inspiration, wrapping tips, and to share 
              your own witty wrap creations!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
