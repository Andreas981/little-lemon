import React from 'react';
import "../styles/Footer.css";
import logoSmall from "../assets/logoSmall.png";

const Footer = () => {
  return (
    <footer>
        <section className="footer-background">
            <main className="footer-container">
                <img src={logoSmall} alt="Little Lemon logo" />
                <p>Do you feel sour? Then Little Lemon is the exact place for you!</p>
                <div className="footer-content">
                    <div className="locations">
                        <h5>Where are we?</h5>
                        <ul>
                            <li>Oslo</li>
                            <li>New York</li>
                            <li>London</li>
                            <li>Cape Town</li>
                        </ul>
                    </div>
                    <div className="opening-times">
                        <h5>When are we?</h5>
                        <ul>
                            <li>10:30AM - 12:00AM</li>
                        </ul>
                    </div>
                </div>
            </main>
        </section>
    </footer>
  )
}

export default Footer
