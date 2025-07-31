"use client";
import React, { useState, useEffect } from "react";
import {
  Shield,
  Eye,
  Users,
  Lock,
  Phone,
  Mail,
  Clock,
  AlertTriangle,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import "./TermsAndConditions.css";

const TermsAndConditionsPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sections = document.querySelectorAll("[data-section]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section.getAttribute("data-section") || "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "auto",
      });
    }
  };

  const PolicySection = ({
    title,
    children,
    icon: IconComponent,
    sectionId,
  }) => (
    <section data-section={sectionId} className="policy-section">
      <div className="section-header">
        <div className="section-icon">
          <IconComponent size={20} />
        </div>
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="section-content">{children}</div>
    </section>
  );

  const tableOfContents = [
    { id: "introduction", title: "Introduction", icon: Shield },
    { id: "usage", title: "Application Usage", icon: Eye },
    { id: "third-party", title: "Third Party Services", icon: Users },
    { id: "responsibility", title: "Our Responsibility", icon: CheckCircle },
    { id: "security", title: "Device Security", icon: Lock },
    { id: "updates", title: "Updates & Termination", icon: Clock },
    { id: "changes", title: "Changes to Terms", icon: AlertTriangle },
    { id: "contact", title: "Contact Us", icon: Phone },
  ];

  return (
    <div className="privacy-page">
      {/* Scroll Progress */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Header */}
      <header className="header">
        <div className="header-content">
          {/* <div className="logo">mobiCampus</div> */}
          <img
            src="/images/school-logo.png"
            alt="School Logo"
            className="school-logo"
          />
          <div className="header-subtitle">Terms & Conditions</div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <Shield size={16} />
            Terms of Use
          </div>
          <h1 className="hero-title">Terms & Conditions</h1>
          <p className="hero-description">
            These terms govern your use of the mobiCampus app. By downloading or
            using the app, you agree to these terms in full.
          </p>
          <div className="effective-date">Effective Date: January 1, 2027</div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="toc">
        <div className="toc-card">
          <h3 className="toc-title">
            <ChevronRight size={20} />
            Table of Contents
          </h3>
          <div className="toc-grid">
            {tableOfContents.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`toc-item ${
                  activeSection === item.id ? "active" : ""
                }`}
              >
                <item.icon size={16} />
                <span>{item.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="main-content">
        <PolicySection
          title="Introduction"
          icon={Shield}
          sectionId="introduction"
        >
          <p>
            These terms and conditions apply to the <strong>mobiCampus</strong>{" "}
            app for mobile devices, created by Mobatia Technology Private Ltd as
            a Commercial service. By downloading or using the Application, you
            automatically agree to these terms.
          </p>
        </PolicySection>

        <PolicySection title="Application Usage" icon={Eye} sectionId="usage">
          <p>
            Unauthorized copying, modification, or attempts to extract the
            source code, translate the Application into other languages, or
            create derivative versions are strictly prohibited. All trademarks,
            copyrights, database rights, and other intellectual property rights
            remain with Mobatia Technology Private Ltd.
          </p>
          <div className="note-box">
            <p>
              <strong>Note:</strong> The Application is provided "AS IS" and you
              are responsible for maintaining the security of your device and
              access to the Application.
            </p>
          </div>
        </PolicySection>

        <PolicySection
          title="Third Party Services"
          icon={Users}
          sectionId="third-party"
        >
          <p>
            The Application uses third-party services with their own Terms and
            Conditions. These include:
          </p>
          <div className="services-grid">
            <div className="service-card google">
              <h4>Google Play Services</h4>
              <p>Core mobile services and APIs</p>
            </div>
            <div className="service-card firebase">
              <h4>Firebase Analytics</h4>
              <p>App usage and performance analytics</p>
            </div>
            <div className="service-card expo">
              <h4>Expo</h4>
              <p>Development and deployment platform</p>
            </div>
          </div>
        </PolicySection>

        <PolicySection
          title="Our Responsibility"
          icon={CheckCircle}
          sectionId="responsibility"
        >
          <p>Mobatia Technology Private Ltd is not responsible for:</p>
          <div className="info-grid">
            <div className="info-card">
              <h4>Connectivity Issues</h4>
              <ul>
                <li>Lack of Wi-Fi or data access</li>
                <li>Charges from your mobile provider</li>
                <li>Roaming data charges</li>
              </ul>
            </div>
            <div className="info-card">
              <h4>Device Issues</h4>
              <ul>
                <li>Device battery life</li>
                <li>Device security (e.g., jailbreaking)</li>
                <li>Third-party information accuracy</li>
              </ul>
            </div>
          </div>
        </PolicySection>

        <PolicySection title="Device Security" icon={Lock} sectionId="security">
          <p>
            You are responsible for maintaining the security of your device. We
            strongly advise against jailbreaking or rooting your device, as this
            could expose it to malware, viruses, or compromise its security
            features, potentially causing the Application to malfunction.
          </p>
          <div className="warning-box">
            <h4>
              <AlertTriangle size={20} />
              Security Warning
            </h4>
            <p>
              Jailbreaking or rooting your device may prevent the Application
              from functioning correctly, and we cannot be held responsible for
              any resulting issues.
            </p>
          </div>
        </PolicySection>

        <PolicySection
          title="Updates & Termination"
          icon={Clock}
          sectionId="updates"
        >
          <p>
            We may update the Application to improve functionality or
            compatibility. You must download updates to continue using the
            Application. We may also cease providing the Application at any time
            without notice. Upon termination:
          </p>
          <ul className="info-card">
            <li>All rights and licenses granted to you will end.</li>
            <li>
              You must stop using and delete the Application from your device.
            </li>
          </ul>
        </PolicySection>

        <PolicySection
          title="Changes to Terms"
          icon={AlertTriangle}
          sectionId="changes"
        >
          <p>
            We may update these Terms and Conditions periodically. You are
            advised to review this page regularly for changes. Updates will be
            posted on this page, and continued use of the Application
            constitutes acceptance of the revised terms.
          </p>
        </PolicySection>

        <PolicySection
          title="Contact Information"
          icon={Phone}
          sectionId="contact"
        >
          <div className="contact-section">
            <h4>Get in Touch</h4>
            <p>
              If you have any questions or suggestions about these Terms and
              Conditions, please contact us:
            </p>
            <a href="mailto:mobicampus@mobatia.in" className="contact-button">
              <Mail size={16} />
              mobicampus@mobatia.in
            </a>
          </div>
        </PolicySection>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>These Terms and Conditions are effective as of January 1, 2027</p>
        <p>
          By using the Application, you consent to these terms and conditions.
        </p>
        {/* <div className="footer-note">
          Generated by <a href="#">App Terms and Conditions Generator</a>
        </div> */}
      </footer>
    </div>
  );
};

export default TermsAndConditionsPage;
