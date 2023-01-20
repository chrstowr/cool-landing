import React from 'react';
import ParticlesBg from 'particles-bg'

const Hero = () => {
  return (
    <section
      id="hero"
      className=""
    >
      <ParticlesBg color="#0084ff" type="cobweb" num={100} bg={true} />
      <div className="container valign-wrapper jc-center">
        <div className="valign center-align white-text">
          <h2>
            towrproject.com
          </h2>
          <p className="big">
           React, React Native, and Node projects. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
