import {
  Check,
  Clock,
  Circle,
} from "lucide-react";

export default function Timeline() {
  const steps = [
    {
      title: "Application Submitted",
      description: "Application received successfully",
      status: "completed",
    },
    {
      title: "Identity Verification",
      description: "Identity verified successfully",
      status: "completed",
    },
    {
      title: "Income Verification",
      description: "Income details verified",
      status: "completed",
    },
    {
      title: "Education Verification",
      description: "Currently verifying academic details",
      status: "active",
    },
    {
      title: "Department Review",
      description: "Pending scholarship department review",
      status: "pending",
    },
    {
      title: "Scholarship Disbursement",
      description: "Pending approval",
      status: "pending",
    },
  ];

  return (
    <div className="timeline">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`timeline-item ${step.status}`}
        >
          <div className="timeline-dot">
            {step.status === "completed" && <Check size={17} />}
            {step.status === "active" && <Clock size={17} />}
            {step.status === "pending" && <Circle size={13} />}
          </div>

          <div className="timeline-content">
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}