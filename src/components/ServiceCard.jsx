import { ArrowRight } from "lucide-react";

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  onClick,
}) {
  return (
    <div className="card service-card" onClick={onClick}>
      <div className="service-icon">
        <Icon size={22} />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div
        style={{
          marginTop: "15px",
          color: "var(--primary)",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          fontSize: "12px",
          fontWeight: "600",
        }}
      >
        View service <ArrowRight size={14} />
      </div>
    </div>
  );
}