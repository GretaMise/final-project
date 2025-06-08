import './services.css';

export const Services = () => {
  return (
    <div className="services">
      <div className="services-container">
        <div className="services-header">
          <h1>Our Services</h1>
          <p className="services-subtitle">
            Discover our range of gift-giving solutions
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🎁</div>
            <h2>Professional Gift Wrapping</h2>
            <p>
              Transform your gifts into works of art with our expert wrapping service. 
              Choose from a variety of premium papers, ribbons, and decorative elements. 
              Perfect for any occasion!
            </p>
            <ul className="service-features">
              <li>Custom paper selection</li>
              <li>Handcrafted bows and decorations</li>
              <li>Themed wrapping options</li>
              <li>Eco-friendly materials available</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">🎨</div>
            <h2>Personalization Services</h2>
            <p>
              Add a personal touch to your gifts with our customization options. 
              From monogramming to custom messages, make your gift truly unique.
            </p>
            <ul className="service-features">
              <li>Custom gift tags and cards</li>
              <li>Personalized messages</li>
              <li>Photo integration</li>
              <li>Special occasion customization</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">📦</div>
            <h2>Gift Curating</h2>
            <p>
              Let our expert gift curators help you find the perfect present. 
              We'll work with your budget and preferences to create the ideal gift package.
            </p>
            <ul className="service-features">
              <li>Personal shopping assistance</li>
              <li>Theme-based gift collections</li>
              <li>Budget-friendly options</li>
              <li>Occasion-specific recommendations</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">🚚</div>
            <h2>Delivery Services</h2>
            <p>
              Convenient delivery options to ensure your gifts arrive safely and on time. 
              Local and international shipping available.
            </p>
            <ul className="service-features">
              <li>Same-day local delivery</li>
              <li>International shipping</li>
              <li>Gift tracking</li>
              <li>Special handling for delicate items</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">📅</div>
            <h2>Corporate Gifting</h2>
            <p>
              Specialized services for businesses looking to reward employees, 
              thank clients, or celebrate company milestones.
            </p>
            <ul className="service-features">
              <li>Bulk ordering options</li>
              <li>Corporate branding integration</li>
              <li>Employee recognition programs</li>
              <li>Custom corporate catalogs</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">💝</div>
            <h2>Gift Registry</h2>
            <p>
              Create and manage gift registries for special occasions. 
              Perfect for weddings, baby showers, and other celebrations.
            </p>
            <ul className="service-features">
              <li>Online registry management</li>
              <li>Group gifting options</li>
              <li>Registry consultation</li>
              <li>Thank you note tracking</li>
            </ul>
          </div>
        </div>

        <div className="services-cta">
          <h3>Ready to elevate your gift-giving experience?</h3>
          <p>Contact us today to learn more about our services or to schedule a consultation.</p>
        </div>
      </div>
    </div>
  );
};
