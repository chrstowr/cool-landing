import React from "react";
import ParticlesBg from "particles-bg";

let config = {
  num: [.1, .5],
  rps: 0.1,
  radius: [2, 2],
  life: [3, 10],
  v: [.1, 1],
  tha: [-40, 100],
  // body: "./img/icon.png", // Whether to render pictures
  rotate: [0, 100],
  alpha: [0, 0.6],
  scale: [0.7, 0],
  position: "all", // all or center or {x:1,y:1,width:100,height:100}
  color: "#00ff00",
  cross: "null", // cross or bround
  random: 1,  // or null,
  g: 0,    // gravity
  // f: [2, -1], // force
  onParticleUpdate: (ctx, particle) => {
      ctx.beginPath();
      ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.closePath();
  }
};

const Hero = () => {
  return (
    <div className="heroContainer">
      <ParticlesBg color="#0084ff" type="custom" config={config} num={60} bg={true} />
          <div id="heroText" className="center-align white-text">
            <h2>towrproject.com</h2>
            <p className="big">React, React Native, and Node projects.</p>
          </div>
      </div>
  );
};

export default Hero;
