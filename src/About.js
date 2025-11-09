import React, { useEffect } from "react";
import "./About.css";

function About() {
  // Scroll reveal animation
useEffect(() => {
  const elements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect().top;
      if (rect < window.innerHeight - 100) {
        el.classList.add("revealed");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
  return () => window.removeEventListener("scroll", revealOnScroll);
}, []);

  // Animate numbers
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");
    counters.forEach(counter => {
      let target = +counter.getAttribute("data-target");
      let count = 0;
      let step = target / 200;

      const updateCounter = () => {
        if (count < target) {
          count += step;
          counter.innerText = Math.ceil(count);
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target;
        }
      };
      updateCounter();
    });
  }, []);

  return (
    <div className="about-wrapper">

      {/* Floating Orbs */}
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>

      {/* HERO SECTION */}
      <section className="hero-section glass-card reveal">
        <h1 className="hero-title">Welcome to <span>Shopfinity</span> 🛍️</h1>
        <p className="hero-sub">Where Shopping Meets Innovation & Joy ✨</p>
      </section>

      {/* Stats */}
      <div className="stats-container">
        <div className="stat-box">
          <h2 className="counter" data-target="5000">0</h2>
          <p>+ Happy Customers</p>
        </div>
        <div className="stat-box">
          <h2 className="counter" data-target="1200">0</h2>
          <p>+ Products</p>
        </div>
        <div className="stat-box">
          <h2 className="counter" data-target="50">0</h2>
          <p>+ Cities Delivered</p>
        </div>
      </div>

      {/* Main Cards */}
      <div className="about-grid">
        
        <div className="glass-card">
          <h3>🚀 Mission</h3>
          <p>Deliver a delightful & futuristic shopping experience driven by trust & technology.</p>
        </div>

        <div className="glass-card">
          <h3>🌟 Vision</h3>
          <p>To be India’s most customer-loved ecommerce brand — built for speed, ease & happiness.</p>
        </div>

        <div className="glass-card">
          <h3>🛍️ Categories</h3>
          <p>Fashion • Electronics • Home • Beauty • Accessories • More…</p>
        </div>

        <div className="glass-card">
          <h3>⚙️ Technology</h3>
          <p>Built with React, Spring Boot & MySQL — blazing fast, secure & scalable.</p>
        </div>

        <div className="glass-card">
          <h3>🌿 Sustainability</h3>
          <p>Eco-friendly packaging & supporting ethical brands. We grow responsibly 🌎</p>
        </div>

        <div className="glass-card">
          <h3>📞 Support</h3>
          <p>24×7 help desk & instant chat — because you matter ❤️</p>
        </div>

      </div>

      <p className="end-text">Shopfinity — A Smarter Way to Shop 💙</p>
    </div>
  );
}

export default About;
