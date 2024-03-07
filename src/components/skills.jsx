const Skills = () => {
    return (
        <div id="skills-container">
            <h2>Skills</h2>
            <div className="grid-skills">
                <div className="skill-card html">
                    <i className="fa-brands fa-html5 html-icon"></i>
                    <p>HTML</p>
                </div>
                <div className="skill-card css">
                    <i className="fa-brands fa-css3-alt css-icon"></i>
                    <p>CSS</p>
                </div>
                <div className="skill-card js">
                    <i className="fa-brands fa-js-square js-icon"></i>
                    <p>JavaScript</p>
                </div>
                <div className="skill-card react">
                    <i className="fa-brands fa-react react-icon"></i>
                    <p>React</p>
                </div>
                <div className="skill-card node">
                    <i className="fa-brands fa-node node-icon"></i>
                    <p>Node.js</p>
                </div>
                <div className="skill-card python">
                    <i className="fa-brands fa-php php-icon"></i>
                    <p>PHP</p>
                </div>
                <div className="skill-card python">
                    <i className="fa-brands fa-angular angular-icon"></i>
                    <p>Angular</p>
                </div>
            </div>
        </div>
    )
}

export default Skills;