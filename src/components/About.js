import React from "react";
import logo from "../assets/img/Logo foxdrow blue.png";
import dq11 from "../assets/img/AdorableShrillCougar-size_restricted.gif";
import music from "../assets/img/music.jpg";
import catRead from "../assets/img/catRead.webp";
import CV from "../assets/download/Rphael Saverys CV.pdf";

export default function About() {
  return (
    <div id="about">
      <h2>About</h2>
      <section id="whoIAm">
        <div className="textBox">
          <h3>Who I am</h3>
          <p>I am a Nantes based developer specialised in web</p>
          <p>I am currently a 1st year student at Epitech</p>
          <p>I am looking for a 14 month internship on September 2021</p>
          <p className="skill">
            autonomous eager analytic organized teamwork quickLearner
          </p>
          <h4>Languages</h4>
          <p className="skill">JavaScript HTML CSS PHP Python SQL</p>
          <h4>Framework</h4>
          <p className="skill">
            React.js ReactNative Node.js Redux Express.js Socket.io Mysql
            MongoDB Sass Bootstrap Wordpress
          </p>
          <h4>Softwares and Others</h4>
          <p className="skill">GitHub Photoshop AdobeXD Illustrator</p>
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
