
import Image from "next/image";

const Hero = () => {
    return (
        <div id="hero-container">
            <Image src='/images/profile.jpg' className="profile-img" width={300} height={300} alt="Cezar's personal headshot" />
            <div className="hero-text">
                <h1>Hey, I'm Cezary 👋</h1>
                <p>
                    I'm a software developer based in Hannover, Germany. I specialize in building (and occasionally designing)
                    exceptional websites, applications, and everything in between.
                </p>
                {/* <div className="social-icons">
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
                </div> */}
            </div>
        </div>
    )
}

export default Hero;