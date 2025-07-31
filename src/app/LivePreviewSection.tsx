import React from "react";
import { Bot, Brain, ChartLine } from "lucide-react";
const LivePreviewSection = () => {
  return (
    <div>
      <section className="live-preview-section" id="live-preview">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Experience mobiCampus Live</h2>
            <p className="section-subtitle">
              Try our mobile app directly in your browser. No download required
              - interact with the real app interface and explore all features.
            </p>
          </div>

          <div className="preview-container">
            <div className="preview-frame">
              <object
                data="https://appetize.io/embed/b_tq5jroy6vf6rtamsgmjvnjfhie"
                width="378"
                height="800"
                title="mobiCampus Live Preview"
                className="appetize-object"
              >
                <p>Your browser does not support this object.</p>
              </object>
            </div>

            <div className="preview-info">
              <div className="info-card">
                <Brain className="w-8 h-8 text-purple-500" />
                <h3>AI-Powered Features</h3>
                <p>
                  Experience intelligent notifications, smart scheduling, and
                  personalized recommendations in real-time.
                </p>
              </div>

              <div className="info-card">
                <Bot className="w-8 h-8 text-blue-500" />
                <h3>Interactive Assistant</h3>
                <p>
                  Chat with our AI assistant to get instant answers about
                  assignments, schedules, and school activities.
                </p>
              </div>

              <div className="info-card">
                <ChartLine className="w-8 h-8 text-cyan-500" />
                <h3>Real-Time Analytics</h3>
                <p>
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
