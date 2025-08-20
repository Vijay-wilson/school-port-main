import React from "react";
import { Bot, Brain, TrendingUp } from "lucide-react";

const LivePreviewSection = () => {
  return (
    <div>
      <section className="live-preview-section" id="live-preview">
        <div className="container" style={{ width: "100%", margin: "0 auto" }}>
          <div
            className="section-header"
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            <h2
              className="section-title"
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                marginBottom: "20px",
                color: "#ffffff",
                background: "linear-gradient(135deg, #7c3aed, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Experience mobiCampus
            </h2>
            <p
              className="section-subtitle"
              style={{
                color: "#cbd5e1",
                maxWidth: "600px",
                margin: "0 auto",
                fontSize: "1.25rem",
                lineHeight: "1.6",
              }}
            >
              A smart platform designed to enhance everyday school life, making
              communication, learning, and management simpler for students,
              teachers, and parents.
            </p>
          </div>

          <div className="preview-container">
            <div className="preview-frame">
              <video
                src="/images/ai-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <div className="preview-info">
              <div className="info-card">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <Brain
                    style={{
                      width: "32px",
                      height: "32px",
                      color: "#8b5cf6",
                      marginRight: "16px",
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      color: "#ffffff",
                      margin: "0",
                    }}
                  >
                    AI-Powered Features
                  </h3>
                </div>
                <p
                  style={{
                    color: "#cbd5e1",
                    lineHeight: "1.6",
                    fontSize: "1rem",
                    margin: "0",
                  }}
                >
                  Experience intelligent notifications, smart scheduling, and
                  personalized recommendations in real-time.
                </p>
              </div>

              <div className="info-card">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <Bot
                    style={{
                      width: "32px",
                      height: "32px",
                      color: "#3b82f6",
                      marginRight: "16px",
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      color: "#ffffff",
                      margin: "0",
                    }}
                  >
                    Interactive Assistant
                  </h3>
                </div>
                <p
                  style={{
                    color: "#cbd5e1",
                    lineHeight: "1.6",
                    fontSize: "1rem",
                    margin: "0",
                  }}
                >
                  Chat with our AI assistant to get instant answers about
                  assignments, schedules, and school activities.
                </p>
              </div>

              <div className="info-card">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <TrendingUp
                    style={{
                      width: "32px",
                      height: "32px",
                      color: "#06b6d4",
                      marginRight: "16px",
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      color: "#ffffff",
                      margin: "0",
                    }}
                  >
                    Real-Time Analytics
                  </h3>
                </div>
                <p
                  style={{
                    color: "#cbd5e1",
                    lineHeight: "1.6",
                    fontSize: "1rem",
                    margin: "0",
                  }}
                >
                  Monitor academic progress, attendance patterns, and
                  performance insights with dynamic visualizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LivePreviewSection;
