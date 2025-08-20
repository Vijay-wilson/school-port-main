"use client";

import { useEffect, useRef } from "react";
import PlatformBadges from "./PlatformBadges";
import {
  Download,
  PlayCircle,
  Brain,
  Bot,
  ChartLine,
  GraduationCap,
} from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
const HeroSection = () => {
  const heroVisualRef = useRef(null);

  useEffect(() => {
    // Parallax effect for hero visual
    const handleMouseMove = (e) => {
      if (heroVisualRef.current) {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        heroVisualRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Dynamic badge animation
    const badges = document.querySelectorAll(".badge");
    badges.forEach((badge, index) => {
      const htmlBadge = badge;
      htmlBadge.style.animationDelay = `${index * 0.2}s`;
      htmlBadge.style.opacity = "0";
      htmlBadge.style.transform = "translateY(20px)";
      setTimeout(() => {
        htmlBadge.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        htmlBadge.style.opacity = "1";
        htmlBadge.style.transform = "translateY(0)";
      }, index * 200);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>mobiCampus</h1>
            <p className="tagline">
              AI-Powered Education Management Revolution
            </p>
            <p className="description">
              Experience the future of education with our cutting-edge AI
              platform. Seamlessly manage multiple schools, track academic
              progress with intelligent insights, and revolutionize your child's
              educational journey through smart automation.
            </p>
            <PlatformBadges />
            <div className="cta-buttons">
              <a href="#ios-download" className="btn btn-secondary">
                <FaApple className="w-5 h-5 mr-2" /> App Store
              </a>

              <a href="#android-download" className="btn btn-secondary">
                <FaGooglePlay className="w-5 h-5 mr-2" /> Play Store
              </a>
            </div>
          </div>

          <div className="hero-visual" ref={heroVisualRef}>
            <div className="phone-showcase">
              <div className="phone-mockup"></div>
              <div className="secondary-phones">
                <div className="mini-phone"></div>
                <div className="mini-phone"></div>
                <div className="mini-phone"></div>
              </div>
            </div>

            <div className="floating-elements">
              <div className="floating-icon">
                <Brain className="w-6 h-6" />
              </div>
              <div className="floating-icon">
                <Bot className="w-6 h-6" />
              </div>
              <div className="floating-icon">
                <ChartLine className="w-6 h-6" />
              </div>
              <div className="floating-icon">
                <GraduationCap className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
