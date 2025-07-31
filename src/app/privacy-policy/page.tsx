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
import "./PrivacyPolicy.css";
const PrivacyPolicyPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Update active section based on scroll position
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

      // Instant scroll for better performance
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
    { id: "overview", title: "Overview", icon: Shield },
    { id: "collection", title: "Information Collection", icon: Eye },
    { id: "third-party", title: "Third Party Services", icon: Users },
    { id: "rights", title: "Your Rights", icon: CheckCircle },
    { id: "retention", title: "Data Retention", icon: Clock },
    { id: "children", title: "Children's Privacy", icon: AlertTriangle },
    { id: "security", title: "Security", icon: Lock },
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
          <div className="header-subtitle">Privacy Policy</div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <Shield size={16} />
            Your Privacy Matters
          </div>

          <h1 className="hero-title">Privacy Policy</h1>

          <p className="hero-description">
            We are committed to protecting your privacy and ensuring the
            security of your personal information. This policy explains how we
            collect, use, and safeguard your data.
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
        <PolicySection title="Overview" icon={Shield} sectionId="overview">
          <p>
            This privacy policy applies to the <strong>mobiCampus</strong> app
            for mobile devices, created by Mobatia Technology Private Ltd as a
            Commercial service. This service is intended for use "AS IS".
          </p>
        </PolicySection>

        <PolicySection
          title="Information Collection and Use"
          icon={Eye}
          sectionId="collection"
        >
          <p>
            The Application collects information when you download and use it.
            This information may include:
          </p>
          <div className="info-grid">
            <div className="info-card">
              <h4>Device Information</h4>
              <ul>
                <li>Internet Protocol address (IP address)</li>
                <li>Pages visited and time spent</li>
                <li>Operating system information</li>
              </ul>
            </div>
            <div className="info-card">
              <h4>Location Services</h4>
              <ul>
                <li>Approximate geographical location</li>
                <li>Personalized content delivery</li>
                <li>Analytics and improvements</li>
              </ul>
            </div>
          </div>
          <div className="note-box">
            <p>
              <strong>Note:</strong> The Application does not gather precise
              location information from your mobile device.
            </p>
          </div>
        </PolicySection>

        <PolicySection
          title="Third Party Services"
          icon={Users}
          sectionId="third-party"
        >
          <p>
            Only aggregated, anonymized data is periodically transmitted to
            external services to help improve the Application and our service.
            We utilize the following third-party services:
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
          title="Your Rights"
          icon={CheckCircle}
          sectionId="rights"
        >
          <div className="rights-box">
            <h4>
              <CheckCircle size={20} />
              Opt-Out Rights
            </h4>
            <p>
              You can stop all collection of information by the Application
              easily by uninstalling it. You may use the standard uninstall
              processes available on your mobile device or via the mobile
              application marketplace.
            </p>
          </div>
        </PolicySection>

        <PolicySection
          title="Data Retention Policy"
          icon={Clock}
          sectionId="retention"
        >
          <p>
            We will retain User Provided data for as long as you use the
            Application and for a reasonable time thereafter.
          </p>
          <div className="contact-box">
            <p>
              If you'd like us to delete your User Provided Data, please contact
              us at{" "}
              <a href="mailto:mobicampus@mobatia.in">mobicampus@mobatia.in</a>{" "}
              and we will respond in a reasonable time.
            </p>
          </div>
        </PolicySection>

        <PolicySection
          title="Children's Privacy"
          icon={AlertTriangle}
          sectionId="children"
        >
          <div className="warning-box">
            <h4>
              <AlertTriangle size={20} />
              Age Restriction
            </h4>
            <p>
              We do not knowingly collect personally identifiable information
              from children under 13 years of age. If we discover that a child
              under 13 has provided personal information, we will immediately
              delete this from our servers.
            </p>
          </div>
        </PolicySection>

        <PolicySection title="Security" icon={Lock} sectionId="security">
          <p>
            We are concerned about safeguarding the confidentiality of your
            information. We provide physical, electronic, and procedural
            safeguards to protect information we process and maintain.
          </p>
          <div className="security-grid">
            <div className="security-item">
              <div className="security-icon physical">
                <Shield size={24} />
              </div>
              <h5>Physical</h5>
              <p>Secure data centers and facilities</p>
            </div>
            <div className="security-item">
              <div className="security-icon electronic">
                <Lock size={24} />
              </div>
              <h5>Electronic</h5>
              <p>Encryption and secure protocols</p>
            </div>
            <div className="security-item">
              <div className="security-icon procedural">
                <Users size={24} />
              </div>
              <h5>Procedural</h5>
              <p>Access controls and policies</p>
            </div>
          </div>
        </PolicySection>

        <PolicySection
          title="Contact Information"
          icon={Phone}
          sectionId="contact"
        >
          <div className="contact-section">
            <h4>Get in Touch</h4>
            <p>
              If you have any questions regarding privacy while using the
              Application, or have questions about our practices, please contact
              us:
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
        <p>This privacy policy is effective as of January 1, 2027</p>
        <p>
          By using the Application, you are consenting to the processing of your
          information as set forth in this Privacy Policy.
        </p>
        {/* <div className="footer-note">
          Generated by <a href="#">App Privacy Policy Generator</a>
        </div> */}
      </footer>
    </div>
  );
};

export default PrivacyPolicyPage;
