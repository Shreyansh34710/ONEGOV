import {
  AlertTriangle,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Failure() {
  return (
    <>
      <Navbar />

      <main className="page">
        <div className="failure-card card">
          <div className="section-header">
            <h1>Service interruption</h1>

            <p>
              ONEGOV handles the problem without making the
              citizen start again.
            </p>
          </div>

          <div className="failure-banner">
            <AlertTriangle size={22} />

            <div>
              <strong>
                Education Verification temporarily
                unavailable
              </strong>

              <p>
                The connected department service is
                currently unavailable. Your application and
                previous verification steps are safely
                saved.
              </p>
            </div>
          </div>

          <div
            className="card"
            style={{
              padding: "17px",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
              }}
            >
              <div className="permission-icon">
                <ShieldCheck size={19} />
              </div>

              <div>
                <strong style={{ fontSize: "13px" }}>
                  Your application is safe
                </strong>

                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "11px",
                    marginTop: "3px",
                  }}
                >
                  No need to resubmit your application.
                </p>
              </div>
            </div>
          </div>

          <div
            className="card"
            style={{
              padding: "17px",
              marginBottom: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
              }}
            >
              <div className="permission-icon">
                <RefreshCw size={19} />
              </div>

              <div>
                <strong style={{ fontSize: "13px" }}>
                  Automatic retry enabled
                </strong>

                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "11px",
                    marginTop: "3px",
                  }}
                >
                  ONEGOV will retry when the service becomes
                  available.
                </p>
              </div>
            </div>
          </div>

          <Link to="/track">
            <button className="primary-button full-button">
              Return to Application
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}