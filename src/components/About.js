import React from "react";
import logo from "../assets/img/Logo foxdrow blue.png";
import dq11 from "../assets/img/AdorableShrillCougar-size_restricted.gif";
import music from "../assets/img/music.jpg";
import catRead from "../assets/img/catRead.webp";
import CV from "../assets/download/CV-Raphael-Saverys.pdf";

export default function About() {
  return (
    <div id="about">
      <h2>About</h2>
      <section id="whoIAm">
        <div className="textBox">
          <h3>Who I am</h3>
          <p>I am Raphael, Full-stack developer with knowledge of JavaScript frameworks, both frontend and backend with a focus on React and Node.js.</p>
          <p>I am above all a self-taught person, but I followed a 1-year web curriculum at Epitech Nantes.</p>
          <p className="skill">
            autonomous eager analytic organized teamwork quickLearner
          </p>
          <h4>Languages</h4>
          <p className="skill">JavaScript TypeScript HTML CSS PHP Python SQL</p>
          <h4>Framework</h4>
          <p className="skill">
            React.js ReactNative Node.js GraphQL Docker Redux Express.js Socket.io Mysql
            MongoDB Firebase Sass Bootstrap
          </p>
          <h4>Softwares and Others</h4>
          <p className="skill">GitHub Vim Photoshop AdobeXD</p>
          <div className="cvButton">
            <a className="CV" href={CV} download>
              CV
            </a>
          </div>
        </div>
        <img src={logo} className="logoBig" />
      </section>
      <section id="passions">
        <h3>Passions</h3>
        <div className="intro">
          <p>
            "Passion is energy. Feel the power that comes from focusing on what
            excites you."
          </p>
          <p className="skill">
            Creativity Ambition Fantasy Imagination Fun Relaxation
          </p>
        </div>
        <div id="videoGame">
          <h4>Video games</h4>
          <p>Improve my creativity.</p>
          <img src={dq11} alt="dq11"></img>
        </div>
        <div id="reading">
          <h4>Reading</h4>
          <p>Relax me and develop my Imagination.</p>
          <img src={catRead} alt="sekiro"></img>
        </div>
        <div id="music">
          <h4>Classical music</h4>
          <p>Help me to stay focus.</p>
          <img src={music} alt="sekiro"></img>
        </div>
      </section>
    </div>
  );
}
