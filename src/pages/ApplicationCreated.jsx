import {
  Check,
  ArrowRight,
  Copy,
} from "lucide-react";

import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ApplicationCreated() {
  const [copied, setCopied] = useState(false);
  const applicationId = "SCH-2026-00125";

  const copyId = async () => {
    try {
      await navigator.clipboard?.writeText(applicationId);
    } catch {
      // Clipboard access can be unavailable in a non-secure preview context.
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <>
      <Navbar />

      <main className="success-page">
        <div className="card success-card">
          <div className="success-icon">
            <Check size={38} />
          </div>

          <h1>Application submitted</h1>

          <p
            style={{
              color: "var(--muted)",
              fontSize: "13px",
              lineHeight: "1.6",
              marginTop: "8px",
            }}
          >
            Your scholarship application has been
            successfully created.
          </p>

          <div className="application-id">
            <span>Your ONEGOV Application ID</span>

            <strong>{applicationId}</strong>

            <button
              className="copy-id-button"
              type="button"
              onClick={copyId}
            >
              <Copy size={12} />
              {copied ? "Application ID copied" : "Copy ID for your records"}
            </button>
          </div>

          <p
            style={{
              color: "var(--muted)",
              fontSize: "12px",
              marginBottom: "22px",
            }}
          >
            You don't need to track multiple departmental
            references. ONEGOV will show your complete
            application journey.
          </p>

          <Link to="/track">
            <button className="primary-button">
              Track Application <ArrowRight size={15} />
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
