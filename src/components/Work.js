import React from "react";
import twitter from "../assets/img/twitter.png";
import snap from "../assets/img/snap.png";
import cssfr1 from "../assets/img/cssfr1.png";
import cssfr2 from "../assets/img/cssfr2.png";
import IRC from "../assets/img/IRC.png";
import API from "../assets/img/API.png";

export default function Work() {
  return (
    <div id="work">
      <h2>Work projects</h2>
      <section id="projects">
        <div id="twitter">
          <a href="https://github.com/foxdrow/Php-twitter" target="_blank">
            <h4>Twitter PHP</h4>
          </a>
          <p>
            Create a clone of twitter with many functionality and features
            (tweet, messaging, followers, following...)
          </p>
          <p className="skill">PHP MySql JavaScript Jquery</p>
          <img src={twitter}></img>
        </div>
        <div id="snap">
          <a href="https://github.com/foxdrow/SnapchatClone" target="_blank">
            <h4>Snapchat React Native</h4>
          </a>
          <p>A Snapchat clone built with React native 👻</p>
          <p className="skill">JavaScript ReactNative Node.js</p>
          <img src={snap}></img>
        </div>
        <div id="cssfr">
          <a href="https://github.com/foxdrow/my_css_framework" target="_blank">
            <h4>My CSS Framework</h4>
          </a>
          <p>A CSS Framework realise with Sass</p>
          <p className="skill">SCSS CSS HTML</p>
          <img src={cssfr1} className="topImage"></img>
          <img src={cssfr2}></img>
        </div>
        <div id="irc">
          <a href="https://github.com/foxdrow/IRC-Socket.io" target="_blank">
            <h4>IRC chat Application</h4>
          </a>
          <p>A IRC chat Application create with Socket.io</p>
          <p className="skill">JavaScript Socket.io React Node.js SCSS</p>
          <img src={IRC}></img>
        </div>
        <div id="api">
          <a href="https://github.com/foxdrow/task-manager-rest-api" target="_blank">
            <h4>REST API Node.js</h4>
          </a>
          <p>A complete REST Api using asynchronous requests, and communicate with a MongoBD database using mongoose</p>
          <p className="skill">JavaScript Node.js MongoBD Mongoose Postman</p>
          <img src={API}></img>
        </div>
        <p className="conclusion">And other projects available on my github !</p>
      </section>
    </div>
  );
}
