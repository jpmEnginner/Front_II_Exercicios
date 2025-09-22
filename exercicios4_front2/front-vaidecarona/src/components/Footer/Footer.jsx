import '../../styles/layout/Footer.css';
import '../../styles/responsive/mobile.css';
import '../../styles/responsive/tablet.css';
import '../../styles/responsive/desktop.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-links">
          <a href="#" className="footer-link">Sobre nós</a>
          <a href="#" className="footer-link">Contato</a>
          <a href="#" className="footer-link">Termos de serviço</a>
          <a href="#" className="footer-link">Política de privacidade</a>
        </div>

        <div className="social-links">
          <a href="#" className="social-link">
            <img src="/assets/img/twitter.png" alt="Twitter" className="social-icon" />
          </a>
          <a href="#" className="social-link">
            <img src="/assets/img/facebook.png" alt="Facebook" className="social-icon" />
          </a>
          <a href="#" className="social-link">
            <img src="/assets/img/instagram.png" alt="Instagram" className="social-icon" />
          </a>
        </div>

        <div className="copyright">
          <p className="copyright-text">© 2025 VaiDeCarona. Todos os direitos reservados.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;