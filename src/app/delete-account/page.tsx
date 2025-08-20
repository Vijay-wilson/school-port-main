"use client";

import React, { useRef, useState } from "react";
import { Trash2, Mail, User, Phone, Info } from "lucide-react";
import "./DeleteAccount.css";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function DeleteAccountPage() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    setState("submitting");
    setErrorMessage("");

    // By default, prevent network call and just simulate success.
    // Hook this up to your backend or a service like Formspree if desired.
    setTimeout(() => {
      setState("success");
      formRef.current?.reset();
    }, 700);
  }

  return (
    <div className="delete-page">
      <header className="delete-header">
        <div className="delete-header-content">
          <img src="/images/school-logo.png" alt="School Logo" className="school-logo" />
          <div className="delete-header-subtitle">Delete Account</div>
        </div>
      </header>

      <section className="delete-hero">
        <div className="delete-hero-content">
          {/* <div className="delete-hero-badge">
            <Trash2 size={16} />
            Account Removal Request
          </div> */}
          <h1 className="delete-hero-title">Request Account Deletion</h1>
          <p className="delete-hero-description">
            Use the form below to request deletion of your account and related personal data in line with our Privacy Policy.
          </p>
        </div>
      </section>

      <main className="delete-main">
        <section className="delete-form-card">
          <div className="delete-section-header">
            <div className="delete-section-icon"><Info size={18} /></div>
            <h2 className="delete-section-title">Verification & Consent</h2>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="delete-form" noValidate>
            <div className="delete-row">
              <div className="delete-input">
                <label htmlFor="fullName">Full Name</label>
                <div className="delete-input-wrap">
                  <User size={16} />
                  <input id="fullName" name="fullName" type="text" required />
                </div>
              </div>
              <div className="delete-input">
                <label htmlFor="email">Email</label>
                <div className="delete-input-wrap">
                  <Mail size={16} />
                  <input id="email" name="email" type="email"  required />
                </div>
              </div>
            </div>

            <div className="delete-row">
              <div className="delete-input">
                <label htmlFor="phone">Phone (optional)</label>
                <div className="delete-input-wrap">
                  <Phone size={16} />
                  <input id="phone" name="phone" type="tel" />
                </div>
              </div>
              <div className="delete-input">
                <label htmlFor="reason">Reason</label>
                <div className="delete-input-wrap">
                  <Trash2 size={16} />
                  <select id="reason" name="reason" defaultValue="">
                    <option value="" disabled>Please Select</option>
                    <option value="not-using">Not using the service</option>
                    <option value="privacy">Privacy concerns</option>
                    <option value="duplicate">Duplicate/second account</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="delete-input">
              <label htmlFor="details">Additional Details (optional)</label>
              <div className="delete-input-wrap textarea">
                <textarea id="details" name="details" rows={4}  />
              </div>
            </div>

            <div className="delete-consent">
              <input id="consent" name="consent" type="checkbox" required />
              <label htmlFor="consent">
                I understand this action is permanent and agree to the terms outlined in the Privacy Policy.
              </label>
            </div>

            <button type="submit" className="delete-submit" disabled={state === "submitting"}>
              {state === "submitting" ? "Submitting..." : "Submit request"}
            </button>

            <div className="delete-status" aria-live="polite">
              {state === "success" && <p className="ok">Request received. We'll be in touch soon.</p>}
              {state === "error" && <p className="err">Something went wrong. Please try again.</p>}
              {errorMessage && <p className="err">{errorMessage}</p>}
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}


