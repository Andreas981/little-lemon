import React from 'react';
import "../styles/Hero.css";
import { NavLink } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero-section-background">
        <div className="hero-section-container">
            <div className="section-left">
                <h1>Little Lemon</h1>
                <h2>Oslo</h2>
                <p>Do you feel sour?</p>
                <NavLink to="/reservation"><button className="btn">Reservations!</button></NavLink>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
