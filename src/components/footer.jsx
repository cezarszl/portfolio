const Footer = () => {
    return (
        <>
            <hr />
            <div className="footer-container">
                <p>
                    © {new Date().getFullYear()} Joel's Portfolio
                </p>
                <div className="social_icons">
                    <a
                        href="https://twitter.com/cezarszl/"
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a
                        href="https://github.com/cezarszl/"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/cezary-szal-986a672b8/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer;