import './Footer.style.scss';

export const Footer = () => {
  return (
    <footer>
      <div className="footer__column">
        <div className="footer__section">
          <div className="footer__section-title">Sell your home</div>
          <ul className="footer__section-list">
            <li className="footer__section-list-item">Request an offer</li>
            <li className="footer__section-list-item">Pricing</li>
            <li className="footer__section-list-item">Reviews</li>
            <li className="footer__section-list-item">Stores</li>
          </ul>
        </div>
        <div className="footer__section">
          <div className="footer__section-title">Buy a home</div>
          <ul className="footer__section-list">
            <li className="footer__section-list-item">Browse homes</li>
            <li className="footer__section-list-item">Finance</li>
            <li className="footer__section-list-item">Exclusives</li>
          </ul>
        </div>
        <div className="footer__section">
          <div className="footer__section-title">Partners</div>
          <ul className="footer__section-list">
            <li className="footer__section-list-item">Vendors</li>
            <li className="footer__section-list-item">Builder</li>
          </ul>
        </div>
      </div>
      <div className="footer__column">
        <div className="footer__section">
          <div className="footer__section-title">About</div>
          <ul className="footer__section-list">
            <li className="footer__section-list-item">Company</li>
            <li className="footer__section-list-item">Career</li>
            <li className="footer__section-list-item">Press</li>
            <li className="footer__section-list-item">Contact</li>
            <li className="footer__section-list-item">Investors</li>
          </ul>
        </div>
        <div className="footer__section">
          <div className="footer__section-title">Terms & privacy</div>
          <ul className="footer__section-list">
            <li className="footer__section-list-item">Trust & Safety</li>
            <li className="footer__section-list-item">Terms of Service</li>
            <li className="footer__section-list-item">Privacy Policy</li>
            <li className="footer__section-list-item">Do Not Sell My Info</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
