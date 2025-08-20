// app/page.jsx
"use client";

import { useEffect, useRef } from "react";
import { FaEnvelope, FaPhone, FaMapPin } from "react-icons/fa";
import {
  Bot,
  Calendar,
  Users,
  BookOpen,
  ClipboardCheck,
  Newspaper,
  Image as ImageIcon,
  Mail,
  Share2,
  Megaphone,
  Book,
  Settings,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";
import LivePreviewSection from "./LivePreviewSection";
import ContactForm from "./ContactForm";
import HeroSection from "./HeroSection";
const features = [
  {
    icon: <Bot className="w-6 h-6" />,
    title: "AI Assistant",
    description:
      "Interact with an intelligent AI assistant that provides instant answers, personalized recommendations, and proactive support for students, parents, and staff.",
    image: "/images/chat.png",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Calendar",
    description:
      "The Calendar module feature allows users to view and manage school-related events and activities. It's integrated with the device's native calendar for event management.",
    image: "/images/school-calendar.png",
  },
  // {
  //   icon: <CheckSquare className="w-6 h-6" />,
  //   title: "Assignments",
  //   description:
  //     "Track and manage assignments with AI-powered tools, including automated deadline alerts, progress tracking, and personalized submission reminders.",
  //   image: "/images/school-diary.png",
  // },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Parents Essentials",
    description:
      "Parents Essentials feature serves as a one-stop-shop for parents to access all essential school-related information, helping them stay informed and connected with their child's educational journey.",
    image: "/images/parents-essentials.png",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "School Diary",
    description:
      "A digital diary powered by AI, offering secure storage of daily activities, teacher notes, and student reflections with intelligent insights.",
    image: "/images/school-diary.png",
  },
  {
    icon: <ClipboardCheck className="w-6 h-6" />,
    title: "Leave Request",
    description:
      "Designed to be intuitive and user-friendly, helping parents manage their child's attendance needs efficiently while keeping the school administration informed.",
    image: "/images/leave-request.png",
  },
  {
    icon: <Newspaper className="w-6 h-6" />,
    title: "News Letter",
    description:
      "A digital communication platform that allows the school to share important updates, news, and information with parents and students in an organized, accessible format.",
    image: "/images/school-news-letter.png",
  },
  {
    icon: <ImageIcon className="w-6 h-6" />,
    title: "Gallery",
    description:
      "A multimedia showcase that allows users to browse through school-related photos and videos. It's designed to provide an engaging visual experience while maintaining easy navigation between different media types.",
    image: "/images/school-gallery.png",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Contact Us",
    description:
      "Contact Us provides essential contact information and communication channels for parents and students to reach the school administration.",
    image: "/images/school-contact.png",
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Social Media",
    description:
      "This feature integrates the school's social media presence, allowing the community to stay connected and engaged with the latest updates and events.",
    image: "/images/school-social-media.png",
  },
  // {
  //   icon: <BarChart3 className="w-6 h-6" />,
  //   title: "Reports",
  //   description:
  //     "Access detailed, AI-generated reports on academic performance, attendance, and behavior, with personalized insights and visual analytics.",
  //   image: "/images/school-reports.png",
  // },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Circulars",
    description:
      "Serves as a digital notice board for important school announcements, circulars, and official communications.",
    image: "/images/school-circulars.png",
  },
  {
    icon: <Book className="w-6 h-6" />,
    title: "Home Work",
    description:
      "Manage homework assignments with tools that offer task prioritization, completion tracking, personalized study recommendations, and timely reminders to stay on schedule.",
    image: "/images/school-home-work.png",
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "PTA",
    description:
      "A platform for meeting scheduling, feedback collection, and community engagement, with options to view scheduled meetings and manage bookings in the history section.",
    image: "/images/school-pta.png",
  },
];



export default function Home() {
  const heroVisualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll progress indicator
    const handleScroll = () => {
      const scrollProgress = document.querySelector(".scroll-indicator");
      if (scrollProgress) {
        const scrollTop = window.pageYOffset;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight;
        (
          scrollProgress as HTMLElement
        ).style.transform = `scaleX(${scrollPercent})`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Smooth scrolling for navigation links
    const handleSmoothScroll = (e: Event) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLElement).getAttribute("href");
      if (targetId) {
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleSmoothScroll);
    });

    // Intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = "1";
          (entry.target as HTMLElement).style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    document.querySelectorAll(".feature-card").forEach((card, index) => {
      const htmlCard = card as HTMLElement;
      htmlCard.style.opacity = "0";
      htmlCard.style.transform = "translateY(50px)";
      htmlCard.style.transition = `opacity 0.8s ease ${
        index * 0.2
      }s, transform 0.8s ease ${index * 0.2}s`;
      observer.observe(card);
    });



    const footer = document.querySelector(".footer");
    if (footer) {
      const htmlFooter = footer as HTMLElement;
      htmlFooter.style.opacity = "0";
      htmlFooter.style.transform = "translateY(50px)";
      htmlFooter.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      observer.observe(footer);
    }

    // Parallax effect for hero visual
    const handleMouseMove = (e: MouseEvent) => {
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
      const htmlBadge = badge as HTMLElement;
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
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div
      style={{
        fontFamily:
          '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
        lineHeight: "1.6",
        color: "#ffffff",
        overflowX: "hidden",
        background: "#0a0a0f",
      }}
    >
      {/* Scroll Progress Indicator */}
      <div className="scroll-indicator"></div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <img
            src="/images/school-logo.png"
            alt="School Logo"
            className="school-logo"
          />
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              {/* <a href="#live-preview">Live Preview</a> */}
              <a
                href="https://appetize.io/app/b_tq5jroy6vf6rtamsgmjvnjfhie"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Live App
              </a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            {/* <li>
              <a href="#pricing">Pricing</a>
            </li> */}
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <HeroSection />

      <LivePreviewSection />
      {/* Features Section */}
      <section className="features-section" id="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">AI-Powered Smart Features</h2>
            <p className="section-subtitle">
              Experience next-generation education management with our
              intelligent platform designed for modern families and powered by
              artificial intelligence.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${feature.image})` }}
                >
                  {/* <div className="feature-icon">{feature.icon}</div> */}
                </div>
                <div className="card-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-subtitle">
              Whether you require a simple website, a mobile app, some bespoke
              software, or you're looking to build your own development team,
              every venture starts with a simple email or phone call.
            </p>
          </div>
          <div className="contact-grid">
            {/* Left Card - Contact Details */}
            <div className="contact-card">
              <h3>We'd love to hear from you</h3>
              <p className="lead">
                Reach out for product demos, pricing, partnerships, or general
                questions.
              </p>

              <div className="contact-items">
                <div className="contact-item">
                  <span className="input-icon">
                    <FaEnvelope />
                  </span>
                  <div className="content">
                    <span className="label">Email</span>
                    <span className="value">
                      <a href="mailto:info@mobatia.com">info@mobatia.com</a>
                    </span>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="input-icon">
                    <FaPhone />
                  </span>
                  <div className="content">
                    <span className="label">Phone</span>
                    <span className="value">
                      <a href="tel:+917012927872">+91 7012927872</a>
                    </span>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="input-icon">
                    <FaMapPin />
                  </span>
                  <div className="content">
                    <span className="label">Location</span>
                    <span className="value">
                      Mobatia Technology Private Ltd, 1F,Carnival
                      Technopark,Technopark Campus,Thiruvananthapuram, Kerala
                      695581
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-card">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer" id="contact">
        <div className="container footer-container">
          <div className="footer-column">
            <h4>About mobiCampus</h4>
            <p>
              mobiCampus is an AI-powered education management platform
              revolutionizing how schools, parents, and students connect and
              collaborate.
            </p>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              {/* <li>
                <a href="#pricing">Pricing</a>
              </li> */}
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-conditions">Terms & Conditions</a>
              </li>
              <li>
                <a href="/delete-account" aria-label="Request account deletion">
                  Delete Account
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Connect With Us</h4>
            <div className="social-icons">
              <a
                href="https://x.com/mobatia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/mobatiatechnology"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/mobatia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/mobatia_technology/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © 2025 mobiCampus. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
