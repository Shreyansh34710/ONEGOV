import {
  ArrowRight,
  Check,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="welcome">
      <nav className="navbar">
        <div className="logo">
          <div className="logo-mark">O</div>
          ONEGOV
        </div>

        <button className="secondary-button">
          English ▾
        </button>
      </nav>

      <main className="welcome-content">
        <div>
          <div className="welcome-badge">
            <ShieldCheck size={14} />
            Unified Government Services
          </div>

          <h1>
            Government services.
            <br />
            <span className="highlight">
              One journey.
            </span>
          </h1>

          <p>
            Apply once, connect with the departments you
            need, and track your complete government service
            journey through one application ID.
          </p>

          <div className="welcome-actions">
            <Link to="/home">
              <button className="primary-button">
                Start a Service <ArrowRight size={16} />
              </button>
            </Link>

            <Link to="/track">
              <button className="secondary-button">
                Track Application
              </button>
            </Link>
          </div>
        </div>

        <div className="welcome-visual">
          <div className="card journey-card">
            <h3>Your application journey</h3>

            <div className="mini-step">
              <div className="step-icon">
                <Check size={15} />
              </div>
              Application submitted
            </div>

            <div className="mini-step">
              <div className="step-icon">
                <Check size={15} />
              </div>
              Identity verified
            </div>

            <div className="mini-step">
              <div className="step-icon">
                <Check size={15} />
              </div>
              Income verified
            </div>

            <div className="mini-step">
              <div className="step-icon step-active">
                4
              </div>
              Education verification
            </div>

            <div className="mini-step">
              <div className="step-icon">5</div>
              Department review
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}