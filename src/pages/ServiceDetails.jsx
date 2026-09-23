import {
  GraduationCap,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function ServiceDetails() {
  return (
    <>
      <Navbar />

      <main className="page">
        <Link
          to="/services"
          style={{
            display: "flex",
            gap: "7px",
            alignItems: "center",
            color: "var(--muted)",
            fontSize: "13px",
            marginBottom: "20px",
          }}
        >
          <ArrowLeft size={15} />
          Back to services
        </Link>

        <div className="card details-card">
          <div className="details-top">
            <div className="large-icon">
              <GraduationCap size={30} />
            </div>

            <div>
              <h1>National Scholarship</h1>
              <p>Education & Student Welfare</p>
            </div>
          </div>

          <div style={{ marginTop: "25px" }}>
            <h3 style={{ marginBottom: "8px" }}>
              Apply through ONEGOV
            </h3>

            <p
              style={{
                color: "var(--muted)",
                fontSize: "13px",
                lineHeight: "1.6",
              }}
            >
              Submit your scholarship application once.
              ONEGOV coordinates the required verification
              steps across departments.
            </p>
          </div>

          <div className="info-grid">
            <div className="info-item">
              <span>Processing time</span>
              <strong>15–30 working days</strong>
            </div>

            <div className="info-item">
              <span>Application fee</span>
              <strong>Free</strong>
            </div>

            <div className="info-item">
              <span>Service department</span>
              <strong>Student Welfare</strong>
            </div>

            <div className="info-item">
              <span>Application type</span>
              <strong>Online</strong>
            </div>
          </div>

          <h3 style={{ marginBottom: "13px" }}>
            Information required
          </h3>

          {[
            "Identity information",
            "Income details",
            "Education details",
            "Bank account information",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                gap: "9px",
                alignItems: "center",
                marginBottom: "10px",
                fontSize: "13px",
              }}
            >
              <CheckCircle2
                size={16}
                color="var(--green)"
              />
              {item}
            </div>
          ))}

          <Link to="/consent">
            <button
              className="primary-button full-button"
              style={{ marginTop: "25px" }}
            >
              Start Application
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}