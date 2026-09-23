import {
  Activity,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileText,
  Filter,
  Gauge,
  Layers3,
  RefreshCw,
  Search,
  Server,
  ShieldCheck,
} from "lucide-react";

import { useState } from "react";

const applications = [
  {
    id: "SCH-2026-00125",
    citizen: "Aarav Sharma",
    service: "National Scholarship",
    department: "Education Department",
    stage: "Education Verification",
    status: "In Progress",
    time: "2h 14m",
    priority: "Normal",
  },
  {
    id: "SCH-2026-00124",
    citizen: "Priya Verma",
    service: "National Scholarship",
    department: "Income Department",
    stage: "Income Verification",
    status: "Action Required",
    time: "5h 32m",
    priority: "High",
  },
  {
    id: "SCH-2026-00123",
    citizen: "Rohan Mehta",
    service: "National Scholarship",
    department: "Scholarship Department",
    stage: "Department Review",
    status: "In Progress",
    time: "1d 03h",
    priority: "Normal",
  },
  {
    id: "SCH-2026-00122",
    citizen: "Ananya Singh",
    service: "National Scholarship",
    department: "Identity Department",
    stage: "Identity Verification",
    status: "Completed",
    time: "Completed",
    priority: "Normal",
  },
];

const integrations = [
  {
    name: "Identity Verification",
    provider: "Identity Gateway",
    status: "Operational",
    latency: "184 ms",
    requests: "2,481",
  },
  {
    name: "Income Verification",
    provider: "Income Department",
    status: "Operational",
    latency: "231 ms",
    requests: "1,942",
  },
  {
    name: "Education Verification",
    provider: "Education Department",
    status: "Degraded",
    latency: "1.8 sec",
    requests: "1,104",
  },
  {
    name: "Scholarship Processing",
    provider: "Scholarship Department",
    status: "Operational",
    latency: "312 ms",
    requests: "824",
  },
];

function StatCard({ icon: Icon, label, value, detail, type = "default" }) {
  return (
    <div className="admin-stat-card">
      <div className={`admin-stat-icon ${type}`}>
        <Icon size={20} />
      </div>

      <div>
        <div className="admin-stat-label">{label}</div>
        <div className="admin-stat-value">{value}</div>
        <div className="admin-stat-detail">{detail}</div>
      </div>
    </div>
  );
}

function StatusPill({ status }) {
  const className =
    status === "Operational"
      ? "status-pill success"
      : status === "Completed"
      ? "status-pill success"
      : status === "Degraded"
      ? "status-pill warning"
      : status === "Action Required"
      ? "status-pill danger"
      : "status-pill progress";

  return <span className={className}>{status}</span>;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedApplication, setSelectedApplication] = useState(null);

  return (
    <div className="official-layout">

      {/* Government-style header */}
      <header className="official-header">
        <div className="official-brand">
          <div className="official-mark">GOI</div>

          <div>
            <div className="official-gov-name">
              Government of India
            </div>

            <div className="official-product">
              ONEGOV JOURNEY
            </div>
          </div>
        </div>

        <div className="official-header-right">
          <span className="concept-badge">
            SIH 2026 • Concept Prototype
          </span>

          <div className="official-user">
            <div className="official-avatar">AS</div>

            <div>
              <strong>Admin Officer</strong>
              <span>Education Department</span>
            </div>
          </div>
        </div>
      </header>

      <div className="official-body">

        {/* Sidebar */}
        <aside className="official-sidebar">

          <div className="sidebar-section-title">
            WORKSPACE
          </div>

          <button
            className={`sidebar-item ${
              activeTab === "overview" ? "active" : ""
            }`}
            onClick={() => setActiveTab("overview")}
          >
            <Gauge size={18} />
            Dashboard
          </button>

          <button
            className={`sidebar-item ${
              activeTab === "applications" ? "active" : ""
            }`}
            onClick={() => setActiveTab("applications")}
          >
            <FileText size={18} />
            Applications
            <span className="sidebar-count">24</span>
          </button>

          <button
            className={`sidebar-item ${
              activeTab === "bottlenecks" ? "active" : ""
            }`}
            onClick={() => setActiveTab("bottlenecks")}
          >
            <AlertCircle size={18} />
            Bottlenecks
            <span className="sidebar-count warning">3</span>
          </button>

          <button
            className={`sidebar-item ${
              activeTab === "integrations" ? "active" : ""
            }`}
            onClick={() => setActiveTab("integrations")}
          >
            <Layers3 size={18} />
            Integrations
          </button>

          <button
            className={`sidebar-item ${
              activeTab === "audit" ? "active" : ""
            }`}
            onClick={() => setActiveTab("audit")}
          >
            <ShieldCheck size={18} />
            Audit Trail
          </button>

          <div className="sidebar-divider" />

          <div className="sidebar-section-title">
            SYSTEM
          </div>

          <div className="system-health">
            <div className="health-dot" />
            <div>
              <strong>System Operational</strong>
              <span>Last checked 12 sec ago</span>
            </div>
          </div>

        </aside>

        {/* Main */}
        <main className="official-main">

          {/* Overview */}
          {activeTab === "overview" && (
            <>
              <div className="official-page-heading">
                <div>
                  <div className="official-eyebrow">
                    OFFICIAL WORKSPACE
                  </div>

                  <h1>Service Delivery Dashboard</h1>

                  <p>
                    Monitor applications moving across departments
                    through one unified journey.
                  </p>
                </div>

                <button className="refresh-button">
                  <RefreshCw size={16} />
                  Refresh
                </button>
              </div>

              {/* Stats */}
              <div className="admin-stat-grid">

                <StatCard
                  icon={FileText}
                  label="Active Applications"
                  value="24"
                  detail="+6 today"
                  type="blue"
                />

                <StatCard
                  icon={Clock3}
                  label="Awaiting Action"
                  value="7"
                  detail="Across 3 departments"
                  type="orange"
                />

                <StatCard
                  icon={CheckCircle2}
                  label="Completed Today"
                  value="38"
                  detail="+12% vs yesterday"
                  type="green"
                />

                <StatCard
                  icon={AlertCircle}
                  label="Bottlenecks"
                  value="3"
                  detail="Requires attention"
                  type="red"
                />

              </div>

              {/* Main dashboard grid */}
              <div className="official-dashboard-grid">

                {/* Applications */}
                <section className="official-panel applications-panel">

                  <div className="panel-header">
                    <div>
                      <h2>Applications Requiring Attention</h2>
                      <p>
                        Cross-department applications currently in progress
                      </p>
                    </div>

                    <button
                      className="panel-link"
                      onClick={() => setActiveTab("applications")}
                    >
                      View all
                      <ArrowRight size={15} />
                    </button>
                  </div>

                  <div className="application-list">

                    {applications.slice(0, 4).map((application) => (
                      <div
                        className="application-row"
                        key={application.id}
                        onClick={() =>
                          setSelectedApplication(application)
                        }
                      >

                        <div className="application-id">
                          <div className="application-icon">
                            <FileText size={17} />
                          </div>

                          <div>
                            <strong>{application.id}</strong>
                            <span>{application.citizen}</span>
                          </div>
                        </div>

                        <div className="application-service">
                          <strong>{application.service}</strong>
                          <span>{application.stage}</span>
                        </div>

                        <div>
                          <StatusPill status={application.status} />
                        </div>

                        <div className="application-arrow">
                          <ArrowRight size={17} />
                        </div>

                      </div>
                    ))}

                  </div>
                </section>

                {/* Department bottlenecks */}
                <section className="official-panel">

                  <div className="panel-header">
                    <div>
                      <h2>Department Bottlenecks</h2>
                      <p>Where applications are waiting</p>
                    </div>
                  </div>

                  <div className="bottleneck-list">

                    <div className="bottleneck-item">
                      <div className="bottleneck-top">
                        <span>Education Department</span>
                        <strong>8</strong>
                      </div>

                      <div className="progress-track">
                        <div
                          className="progress-value"
                          style={{ width: "78%" }}
                        />
                      </div>

                      <small>
                        Education verification
                      </small>
                    </div>

                    <div className="bottleneck-item">
                      <div className="bottleneck-top">
                        <span>Income Department</span>
                        <strong>5</strong>
                      </div>

                      <div className="progress-track">
                        <div
                          className="progress-value"
                          style={{ width: "54%" }}
                        />
                      </div>

                      <small>
                        Income verification
                      </small>
                    </div>

                    <div className="bottleneck-item">
                      <div className="bottleneck-top">
                        <span>Scholarship Department</span>
                        <strong>3</strong>
                      </div>

                      <div className="progress-track">
                        <div
                          className="progress-value"
                          style={{ width: "31%" }}
                        />
                      </div>

                      <small>
                        Final approval
                      </small>
                    </div>

                  </div>

                </section>

              </div>

              {/* Integration health */}
              <section className="official-panel integration-panel">

                <div className="panel-header">

                  <div>
                    <h2>Integration Health</h2>
                    <p>
                      Status of connected departmental systems
                    </p>
                  </div>

                  <button
                    className="panel-link"
                    onClick={() => setActiveTab("integrations")}
                  >
                    Open monitoring
                    <ArrowRight size={15} />
                  </button>

                </div>

                <div className="integration-grid">

                  {integrations.map((item) => (
                    <div
                      className="integration-card"
                      key={item.name}
                    >

                      <div className="integration-card-top">

                        <div className="integration-icon">
                          <Server size={17} />
                        </div>

                        <StatusPill status={item.status} />

                      </div>

                      <strong>{item.name}</strong>

                      <span>{item.provider}</span>

                      <div className="integration-metrics">
                        <div>
                          <small>Latency</small>
                          <strong>{item.latency}</strong>
                        </div>

                        <div>
                          <small>Requests</small>
                          <strong>{item.requests}</strong>
                        </div>
                      </div>

                    </div>
                  ))}

                </div>

              </section>

              {/* Recent activity */}
              <section className="official-panel">

                <div className="panel-header">

                  <div>
                    <h2>Recent Activity</h2>
                    <p>
                      Latest actions across the application journey
                    </p>
                  </div>

                </div>

                <div className="activity-list">

                  <div className="activity-item">
                    <div className="activity-dot success" />
                    <div>
                      <strong>
                        Identity verification completed
                      </strong>
                      <span>
                        SCH-2026-00125 • 3 minutes ago
                      </span>
                    </div>
                  </div>

                  <div className="activity-item">
                    <div className="activity-dot warning" />
                    <div>
                      <strong>
                        Education verification retry scheduled
                      </strong>
                      <span>
                        SCH-2026-00125 • 11 minutes ago
                      </span>
                    </div>
                  </div>

                  <div className="activity-item">
                    <div className="activity-dot success" />
                    <div>
                      <strong>
                        Application routed to Income Department
                      </strong>
                      <span>
                        SCH-2026-00124 • 24 minutes ago
                      </span>
                    </div>
                  </div>

                </div>

              </section>
            </>
          )}

          {/* Applications */}
          {activeTab === "applications" && (
            <ApplicationsView
              applications={applications}
              onSelect={setSelectedApplication}
            />
          )}

          {/* Bottlenecks */}
          {activeTab === "bottlenecks" && (
            <BottlenecksView />
          )}

          {/* Integrations */}
          {activeTab === "integrations" && (
            <IntegrationsView />
          )}

          {/* Audit */}
          {activeTab === "audit" && (
            <AuditView />
          )}

        </main>
      </div>

      {/* Application detail drawer */}
      {selectedApplication && (
        <div
          className="drawer-overlay"
          onClick={() => setSelectedApplication(null)}
        >
          <div
            className="application-drawer"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="drawer-close"
              onClick={() => setSelectedApplication(null)}
            >
              ×
            </button>

            <div className="official-eyebrow">
              APPLICATION DETAILS
            </div>

            <h2>{selectedApplication.id}</h2>

            <p className="drawer-subtitle">
              {selectedApplication.service}
            </p>

            <div className="drawer-status">
              <StatusPill
                status={selectedApplication.status}
              />

              <span>
                Current stage:{" "}
                <strong>
                  {selectedApplication.stage}
                </strong>
              </span>
            </div>

            <div className="drawer-section">

              <h3>Application Journey</h3>

              <div className="drawer-timeline">

                <TimelineStep
                  title="Application Submitted"
                  department="Citizen"
                  done
                />

                <TimelineStep
                  title="Identity Verification"
                  department="Identity Department"
                  done
                />

                <TimelineStep
                  title="Income Verification"
                  department="Income Department"
                  done
                />

                <TimelineStep
                  title="Education Verification"
                  department="Education Department"
                  current
                />

                <TimelineStep
                  title="Department Review"
                  department="Scholarship Department"
                />

                <TimelineStep
                  title="Disbursement"
                  department="Finance"
                />

              </div>

            </div>

            <div className="drawer-section">

              <h3>Officer Actions</h3>

              <div className="drawer-actions">

                <button className="primary-action">
                  <RefreshCw size={16} />
                  Retry Verification
                </button>

                <button className="secondary-action">
                  <ArrowRight size={16} />
                  Escalate
                </button>

                <button className="secondary-action">
                  <ShieldCheck size={16} />
                  View Audit Trail
                </button>

              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}

/* ----------------------------- */
/* Applications View              */
/* ----------------------------- */

function ApplicationsView({ applications, onSelect }) {
  return (
    <>
      <div className="official-page-heading">

        <div>
          <div className="official-eyebrow">
            APPLICATION MANAGEMENT
          </div>

          <h1>Application Queue</h1>

          <p>
            Review and manage applications moving across departments.
          </p>
        </div>

        <button className="refresh-button">
          <RefreshCw size={16} />
          Refresh
        </button>

      </div>

      <div className="queue-toolbar">

        <div className="search-box">
          <Search size={17} />

          <input
            placeholder="Search application ID or citizen"
          />
        </div>

        <button className="filter-button">
          <Filter size={16} />
          Filter
        </button>

      </div>

      <section className="official-panel">

        <div className="queue-table">

          <div className="queue-table-header">
            <span>APPLICATION</span>
            <span>SERVICE</span>
            <span>DEPARTMENT</span>
            <span>STATUS</span>
            <span>AGE</span>
          </div>

          {applications.map((application) => (
            <button
              className="queue-table-row"
              key={application.id}
              onClick={() => onSelect(application)}
            >

              <div>
                <strong>{application.id}</strong>
                <span>{application.citizen}</span>
              </div>

              <span>{application.service}</span>

              <span>{application.department}</span>

              <StatusPill status={application.status} />

              <span>{application.time}</span>

            </button>
          ))}

        </div>

      </section>
    </>
  );
}

/* ----------------------------- */
/* Bottlenecks                    */
/* ----------------------------- */

function BottlenecksView() {
  return (
    <>
      <div className="official-page-heading">

        <div>
          <div className="official-eyebrow">
            SERVICE DELIVERY
          </div>

          <h1>Department Bottlenecks</h1>

          <p>
            Identify where applications are waiting and why.
          </p>
        </div>

      </div>

      <div className="bottleneck-large-grid">

        <div className="bottleneck-large-card">
          <div className="large-number">8</div>

          <div>
            <strong>Education Department</strong>
            <span>Education verification</span>
          </div>

          <div className="bottleneck-alert">
            Above SLA
          </div>
        </div>

        <div className="bottleneck-large-card">
          <div className="large-number">5</div>

          <div>
            <strong>Income Department</strong>
            <span>Income verification</span>
          </div>

          <div className="bottleneck-alert">
            Attention
          </div>
        </div>

        <div className="bottleneck-large-card">
          <div className="large-number">3</div>

          <div>
            <strong>Scholarship Department</strong>
            <span>Final approval</span>
          </div>

          <div className="bottleneck-normal">
            Within SLA
          </div>
        </div>

      </div>

      <section className="official-panel">

        <div className="panel-header">
          <div>
            <h2>Recommended Actions</h2>
            <p>
              System-generated operational recommendations
            </p>
          </div>
        </div>

        <div className="recommendation-list">

          <div className="recommendation">
            <AlertCircle size={20} />

            <div>
              <strong>Education verification delay</strong>

              <p>
                8 applications have exceeded the expected
                verification window.
              </p>
            </div>

            <button>
              Review
              <ArrowRight size={15} />
            </button>
          </div>

          <div className="recommendation">
            <Activity size={20} />

            <div>
              <strong>Integration latency increased</strong>

              <p>
                Education verification response time is
                currently above normal.
              </p>
            </div>

            <button>
              Monitor
              <ArrowRight size={15} />
            </button>
          </div>

        </div>

      </section>
    </>
  );
}

/* ----------------------------- */
/* Integrations                   */
/* ----------------------------- */

function IntegrationsView() {
  return (
    <>
      <div className="official-page-heading">

        <div>
          <div className="official-eyebrow">
            SYSTEM MONITORING
          </div>

          <h1>Integration Health</h1>

          <p>
            Monitor the systems connected to the application journey.
          </p>
        </div>

        <div className="system-operational">
          <span />
          All systems monitored
        </div>

      </div>

      <div className="integration-large-grid">

        {integrations.map((integration) => (
          <div
            className="integration-large-card"
            key={integration.name}
          >

            <div className="integration-large-top">

              <div className="integration-icon large">
                <Server size={20} />
              </div>

              <StatusPill status={integration.status} />

            </div>

            <h3>{integration.name}</h3>

            <p>{integration.provider}</p>

            <div className="integration-stat-row">

              <div>
                <small>Latency</small>
                <strong>{integration.latency}</strong>
              </div>

              <div>
                <small>Requests</small>
                <strong>{integration.requests}</strong>
              </div>

              <div>
                <small>Success</small>
                <strong>99.4%</strong>
              </div>

            </div>

            {integration.status === "Degraded" && (
              <div className="integration-warning">
                <AlertCircle size={16} />

                Elevated response time detected.
                Automatic retry is active.
              </div>
            )}

          </div>
        ))}

      </div>
    </>
  );
}

/* ----------------------------- */
/* Audit                           */
/* ----------------------------- */

function AuditView() {
  const events = [
    [
      "09:42",
      "SCH-2026-00125",
      "Education verification initiated",
      "Education Department",
      "Success",
    ],
    [
      "09:37",
      "SCH-2026-00125",
      "Identity verification completed",
      "Identity Department",
      "Success",
    ],
    [
      "09:21",
      "SCH-2026-00124",
      "Income verification failed",
      "Income Department",
      "Retry scheduled",
    ],
    [
      "09:04",
      "SCH-2026-00123",
      "Application routed",
      "Scholarship Department",
      "Success",
    ],
  ];

  return (
    <>
      <div className="official-page-heading">

        <div>
          <div className="official-eyebrow">
            GOVERNANCE & SECURITY
          </div>

          <h1>Audit Trail</h1>

          <p>
            Trace every major event across the application lifecycle.
          </p>
        </div>

      </div>

      <section className="official-panel">

        <div className="audit-table">

          <div className="audit-header">
            <span>TIME</span>
            <span>APPLICATION</span>
            <span>EVENT</span>
            <span>ACTOR</span>
            <span>RESULT</span>
          </div>

          {events.map((event, index) => (
            <div className="audit-row" key={index}>

              <span>{event[0]}</span>

              <strong>{event[1]}</strong>

              <span>{event[2]}</span>

              <span>{event[3]}</span>

              <span className="audit-result">
                {event[4]}
              </span>

            </div>
          ))}

        </div>

      </section>

      <div className="security-note">
        <ShieldCheck size={19} />

        <div>
          <strong>Traceable by design</strong>

          <p>
            Every application handoff, verification and officer
            action is recorded against the unified application ID.
          </p>
        </div>
      </div>
    </>
  );
}

/* ----------------------------- */
/* Timeline                       */
/* ----------------------------- */

function TimelineStep({
  title,
  department,
  done = false,
  current = false,
}) {
  return (
    <div className="drawer-timeline-item">

      <div
        className={`drawer-timeline-dot ${
          done ? "done" : current ? "current" : ""
        }`}
      >
        {done && <CheckCircle2 size={13} />}
      </div>

      <div>
        <strong>{title}</strong>
        <span>{department}</span>
      </div>

    </div>
  );
}
