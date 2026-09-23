import {
  ShieldCheck,
  Check,
  ArrowLeft,
  Fingerprint,
  WalletCards,
  GraduationCap,
} from "lucide-react";

import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Consent() {
  return (
    <>
      <Navbar />

      <main className="page">
        <Link
          to="/service/scholarship"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "7px",
            color: "var(--muted)",
            fontSize: "13px",
            marginBottom: "20px",
          }}
        >
          <ArrowLeft size={15} />
          Back
        </Link>

        <div className="card consent-card">
          <div className="consent-header">
            <div className="large-icon">
              <ShieldCheck size={28} />
            </div>

            <h1>Give consent to continue</h1>

            <p>
              ONEGOV needs permission to securely retrieve
              information required for your scholarship
              application.
            </p>
          </div>

          <div className="data-permission">
            <div className="permission-icon">
              <Fingerprint size={20} />
            </div>

            <div className="permission-text">
              <strong>Identity Information</strong>
              <p>Used for identity verification</p>
            </div>

            <Check className="check" size={18} />
          </div>

          <div className="data-permission">
            <div className="permission-icon">
              <WalletCards size={20} />
            </div>

            <div className="permission-text">
              <strong>Income Information</strong>
              <p>Used to verify scholarship eligibility</p>
            </div>

            <Check className="check" size={18} />
          </div>

          <div className="data-permission">
            <div className="permission-icon">
              <GraduationCap size={20} />
            </div>

            <div className="permission-text">
              <strong>Education Information</strong>
              <p>Used to verify academic eligibility</p>
            </div>

            <Check className="check" size={18} />
          </div>

          <p
            style={{
              color: "var(--muted)",
              fontSize: "11px",
              lineHeight: "1.6",
              margin: "20px 0",
            }}
          >
            Your information will only be shared with
            authorized departments for this application.
            You can withdraw consent where applicable.
          </p>

          <Link to="/application-created">
            <button className="primary-button full-button">
              Allow & Continue
            </button>
          </Link>

          <Link to="/service/scholarship">
            <button
              className="secondary-button full-button"
              style={{ marginTop: "9px" }}
            >
              Cancel
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}