import './privacy-policy.css';

export const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <div className="privacy-policy-container">
        <div className="privacy-policy-header">
          <h1>Privacy Policy</h1>
          <p className="privacy-policy-subtitle">
            Your privacy is important to us. Learn how we protect your information.
          </p>
          <p className="last-updated">Last updated: December 2024</p>
        </div>

        <div className="privacy-policy-content">
          <section className="policy-section">
            <h2>1. Information We Collect</h2>
            <p>
              At Witty Wraps, we collect information to provide better services to our customers. 
              The types of information we collect include:
            </p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, shipping and billing addresses</li>
              <li><strong>Payment Information:</strong> Credit card details, billing information (processed securely through encrypted payment processors)</li>
              <li><strong>Order Information:</strong> Purchase history, gift preferences, delivery instructions</li>
              <li><strong>Account Information:</strong> Username, password, account preferences</li>
              <li><strong>Communication Data:</strong> Customer service interactions, reviews, feedback</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li>Processing and fulfilling your orders</li>
              <li>Providing customer support and responding to inquiries</li>
              <li>Personalizing your shopping experience</li>
              <li>Sending order confirmations, shipping updates, and important account information</li>
              <li>Improving our products and services</li>
              <li>Preventing fraud and ensuring security</li>
              <li>Sending promotional emails (with your consent)</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. Information Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. 
              We may share your information only in the following circumstances:
            </p>
            <ul>
              <li><strong>Service Providers:</strong> Trusted partners who help us operate our business (shipping companies, payment processors, customer service platforms)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
              <li><strong>With Your Consent:</strong> When you explicitly agree to share information</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information:
            </p>
            <ul>
              <li>SSL encryption for all data transmission</li>
              <li>Secure payment processing through PCI-compliant providers</li>
              <li>Regular security audits and updates</li>
              <li>Limited access to personal information on a need-to-know basis</li>
              <li>Secure data storage with backup and recovery procedures</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>5. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies to enhance your browsing experience:
            </p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with your consent)</li>
            </ul>
            <p>You can manage cookie preferences through your browser settings.</p>
          </section>

          <section className="policy-section">
            <h2>6. Your Rights and Choices</h2>
            <p>You have the following rights regarding your personal information:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
              <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Restriction:</strong> Request limitation of processing in certain circumstances</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>7. Children's Privacy</h2>
            <p>
              Our services are not intended for children under 13 years of age. We do not knowingly 
              collect personal information from children under 13. If we become aware that we have 
              collected personal information from a child under 13, we will take steps to delete 
              such information promptly.
            </p>
          </section>

          <section className="policy-section">
            <h2>8. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your own. 
              We ensure appropriate safeguards are in place to protect your information in accordance 
              with applicable data protection laws.
            </p>
          </section>

          <section className="policy-section">
            <h2>9. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes 
              outlined in this policy, comply with legal obligations, resolve disputes, and enforce 
              our agreements. Specific retention periods vary based on the type of information and 
              applicable legal requirements.
            </p>
          </section>

          <section className="policy-section">
            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any 
              material changes by posting the new policy on our website and updating the "Last 
              updated" date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="policy-section">
            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, 
              please contact us:
            </p>
            <div className="contact-info">
              <p><strong>Email:</strong> greta.mi.privacy@wittywraps.com</p>
              <p><strong>Phone:</strong> (555) 123-GIFT (4438)</p>
              <p><strong>Mail:</strong><br />
                Witty Wraps Privacy Team<br />
                Greta Mi, CEO<br />
                Gifting Street 123<br />
                Creative Quarter<br />
                Vilnius, LT-01234
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
