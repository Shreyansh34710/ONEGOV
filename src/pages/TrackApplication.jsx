import {
  ArrowLeft,
  Clock,
  MapPin,
  Bell,
} from "lucide-react";

import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import Timeline from "../components/Timeline";
import { Link } from "react-router-dom";

export default function TrackApplication() {
  return (
    <>
      <Navbar />

      <main className="page">
        <div className="tracking-wrapper">
          <Link
            to="/home"
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
            My Applications
          </Link>

          <div className="tracking-header">
            <div>
              <div className="tracking-id">
                SCH-2026-00125
              </div>

              <h1
                style={{
                  fontSize: "26px",
                  marginTop: "5px",
                }}
              >
                National Scholarship
              </h1>

              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "12px",
                  marginTop: "5px",
                }}
              >
                Submitted on 06 September 2026
              </p>
            </div>

            <div className="status-pill">
              IN PROGRESS
            </div>
          </div>

          <div className="card tracking-card">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "5px",
              }}
            >
              <h2 style={{ fontSize: "18px" }}>
                Application Journey
              </h2>

              <Bell
                size={18}
                color="var(--primary)"
              />
            </div>

            <p
              style={{
                color: "var(--muted)",
                fontSize: "12px",
                marginBottom: "25px",
              }}
            >
              One application. Multiple departments.
              One unified timeline.
            </p>

            <Timeline />

            <div className="current-department">
              <MapPin
                size={21}
                color="var(--primary)"
              />

              <div>
                <strong>
                  Currently with Education Department
                </strong>

                <p>
                  Academic details are being verified
                </p>
              </div>
            </div>

            <div
              style={{
                marginTop: "15px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                color: "var(--muted)",
                fontSize: "11px",
              }}
            >
              <Clock size={13} />
              Last updated 2 minutes ago
            </div>
          </div>

          <div
            className="card"
            style={{
              marginTop: "15px",
              padding: "18px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <strong style={{ fontSize: "13px" }}>
                Something taking longer than expected?
              </strong>

              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "11px",
                  marginTop: "4px",
                }}
              >
                ONEGOV automatically handles service
                interruptions.
              </p>
            </div>

            <Link to="/failure">
              <button className="secondary-button">
                View example
              </button>
            </Link>
          </div>
        </div>
      </main>

      <BottomNav />
    </>
  );
}