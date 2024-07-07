import './Footer.css';

const Footer = () => {
    return <footer className="footer" style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className="footer__content">
            <img src="/img/Logo.png" alt="Logo" className="footer__logo" />
            <div className="footer__social-media">
                <a href="#" className="footer__social-link">
                    <img src="/img/instagram.png" alt="Instagram" />
                </a>
                <a href="#" className="footer__social-link">
                    <img src="/img/twitter.png" alt="Twitter" />
                </a>
                <a href="#" className="footer__social-link">
                    <img src="/img/facebook.png" alt="Facebook" />
                </a>
            </div>
            <p className="footer__text">Desarrollado por Alura</p>
        </div>
    </footer>
};

export default Footer;