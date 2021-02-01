import React from "react";
//import icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> services
        </h2>
        <div className="card">
          <div className="icon">
            <img alt="clockicon" src={clock} />
            <h3>Efficient</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card">
          <div className="icon">
            <img alt="teamworkicon" src={teamwork} />
            <h3>Teamwork</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card">
          <div className="icon">
            <img alt="diaphragmicon" src={diaphragm} />
            <h3>Diaphragm</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card">
          <div className="icon">
            <img alt="moneyicon" src={money} />
            <h3>Affordable</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="image">
          <img alt="camera" src={home2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
