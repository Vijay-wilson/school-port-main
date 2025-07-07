// app/page.jsx
"use client";

import { useEffect, useRef } from "react";
import {
  Bot,
  Calendar,
  CheckSquare,
  Users,
  BookOpen,
  ClipboardCheck,
  Newspaper,
  Image as ImageIcon,
  Mail,
  Share2,
  BarChart3,
  Megaphone,
  Book,
  Settings,
  Download,
  PlayCircle,
  Brain,
  ChartLine,
  GraduationCap,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  Check,
} from "lucide-react";
import LivePreviewSection from "./LivePreviewSection";
import PlatformBadges from "./PlatformBadges";

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
      "Stay organized with an AI-driven calendar that syncs school events, parent-teacher meetings, and holidays, offering smart reminders and conflict-free scheduling.",
    image: "/images/school-diary.png",
  },
  {
    icon: <CheckSquare className="w-6 h-6" />,
    title: "Assignments",
    description:
      "Track and manage assignments with AI-powered tools, including automated deadline alerts, progress tracking, and personalized submission reminders.",
    image: "/images/school-diary.png",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Parents Essentials",
    description:
      "Access essential tools for parents, including real-time updates on student progress, fee payments, and direct communication with teachers.",
    image: "/images/school-diary.png",
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
      "Streamline leave applications with an intuitive system, featuring automated approvals, status tracking, and instant notifications for parents and staff.",
    image: "/images/school-diary.png",
  },
  {
    icon: <Newspaper className="w-6 h-6" />,
    title: "News Letter",
    description:
      "Stay informed with AI-curated newsletters, delivering school updates, events, and achievements directly to parents and students.",
    image: "/images/school-diary.png",
  },
  {
    icon: <ImageIcon className="w-6 h-6" />,
    title: "Gallery",
    description:
      "Explore a secure, organized gallery of school events, activities, and student achievements, with AI-enhanced tagging and easy sharing options.",
    image: "/images/school-diary.png",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Contact Us",
    description:
      "Connect effortlessly with school staff through an integrated communication system, featuring AI-driven query prioritization and response tracking.",
    image: "/images/school-diary.png",
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Social Media",
    description:
      "Engage with the school community through integrated social media features, sharing updates and events with AI-optimized content scheduling.",
    image: "/images/school-diary.png",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Reports",
    description:
      "Access detailed, AI-generated reports on academic performance, attendance, and behavior, with personalized insights and visual analytics.",
    image: "/images/school-diary.png",
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Circulars",
    description:
      "Receive and manage school circulars with an AI-powered system, ensuring timely delivery, read receipts, and organized archiving.",
    image: "/images/school-diary.png",
  },
  {
    icon: <Book className="w-6 h-6" />,
    title: "Home Work",
    description:
      "Manage homework assignments with AI-driven tools, offering task prioritization, completion tracking, and personalized study recommendations.",
    image: "/images/school-diary.png",
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "PTA",
    description:
      "Enhance parent-teacher collaboration with an AI-supported PTA platform, facilitating meeting scheduling, feedback collection, and community engagement.",
    image: "/images/school-diary.png",
  },
];

const pricingPlans = [
  {
    name: "Basic Plan",
    price: "$99",
    period: "/month",
    features: [
      "Access to Core Features",
      "Up to 100 Students",
      "Basic AI Analytics",
      "Email Support",
    ],
    buttonText: "Get Started",
    buttonClass: "btn-primary",
  },
  {
    name: "Pro Plan",
    price: "$299",
    period: "/month",
    features: [
      "All Basic Features",
      "Up to 500 Students",
      "Advanced AI Analytics",
      "Priority Support",
      "Custom Integrations",
    ],
    buttonText: "Get Started",
    buttonClass: "btn-primary",
  },
  {
    name: "Enterprise Plan",
    price: "Custom",
    period: "",
    features: [
      "All Pro Features",
      "Unlimited Students",
      "Dedicated AI Assistant",
      "24/7 Premium Support",
      "Custom Development",
    ],
    buttonText: "Contact Sales",
    buttonClass: "btn-secondary",
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

    document.querySelectorAll(".pricing-card").forEach((card, index) => {
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
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>School Port</h1>
              <p className="tagline">
                AI-Powered Education Management Revolution
              </p>
              <p className="description">
                Experience the future of education with our cutting-edge AI
                platform. Seamlessly manage multiple schools, track academic
                progress with intelligent insights, and revolutionize your
                child's educational journey through smart automation.
              </p>

              {/* <div className="platform-badges">
                <span className="badge">
                  <Bot className="w-5 h-5 inline mr-2" /> iOS App
                </span>
                <span className="badge">
                  <Bot className="w-5 h-5 inline mr-2" /> Android
                </span>
                <span className="badge">
                  <Bot className="w-5 h-5 inline mr-2" /> Web Portal
                </span>
                <span className="badge">
                  <Bot className="w-5 h-5 inline mr-2" /> AI Assistant
                </span>
              </div> */}
              <PlatformBadges />
              <div className="cta-buttons">
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1vSDRwIAC43EA7SmyRlRyBHKvYs74rA8k/view?usp=sharing",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  <Download className="w-5 h-5 mr-2" /> Download App
                </button>

                <a href="#live-preview" className="btn btn-secondary">
                  <PlayCircle className="w-5 h-5 mr-2" /> Live Preview
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
                  <div className="feature-icon">{feature.icon}</div>
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

      {/* Plans and Pricing Section */}
      <section className="pricing-section" id="pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Plans and Pricing</h2>
            <p className="section-subtitle">
              Choose the perfect plan for your school or family, with flexible
              pricing tailored to your needs.
            </p>
          </div>

          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div className="pricing-card" key={index}>
                <h3>{plan.name}</h3>
                <div className="price">
                  {plan.price}
                  <span>{plan.period}</span>
                </div>
                <ul>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <Check className="inline w-5 h-5" /> {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.buttonClass === "btn-secondary" ? "#contact" : "#"}
                  className={`btn ${plan.buttonClass}`}
                >
                  {plan.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer" id="contact">
        <div className="container footer-container">
          <div className="footer-column">
            <h4>About School Port</h4>
            <p>
              School Port is an AI-powered education management platform
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
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Connect With Us</h4>
            <div className="social-icons">
              <a href="#">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © 2025 School Port. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
